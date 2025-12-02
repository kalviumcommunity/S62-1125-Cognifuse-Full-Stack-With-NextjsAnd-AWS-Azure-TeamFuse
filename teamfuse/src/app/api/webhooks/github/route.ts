import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { decrypt } from "@/lib/crypto/encryption";
import { githubWebhookQueue } from "@/lib/queue/queues";

function verifySignature(
  secret: string,
  rawBody: Buffer,
  signatureHeader?: string | null
): boolean {
  if (!signatureHeader) return false;
  const expected =
    "sha256=" +
    crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

  const expectedBuf = Buffer.from(expected);
  const receivedBuf = Buffer.from(signatureHeader);

  if (expectedBuf.length !== receivedBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, receivedBuf);
}

export async function POST(req: Request) {
  const raw = Buffer.from(await req.arrayBuffer());
  const sig = req.headers.get("x-hub-signature-256");
  const event = req.headers.get("x-github-event") ?? "unknown";
  const deliveryId = req.headers.get("x-github-delivery");

  if (!deliveryId) {
    return NextResponse.json(
      { ok: false, reason: "Missing delivery id" },
      { status: 400 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(raw.toString("utf8"));
  } catch {
    return NextResponse.json(
      { ok: false, reason: "Invalid JSON" },
      { status: 400 }
    );
  }

  const repo = payload.repository as
    | { id?: number; full_name?: string }
    | undefined;
  if (!repo || (!repo.id && !repo.full_name)) {
    // not a repo-related event
    return NextResponse.json({ ok: true, ignored: true });
  }

  // find project by repoId first, fallback to full_name
  const project = await prisma.project.findFirst({
    where: {
      OR: [
        { githubRepoId: repo.id ?? undefined },
        { githubRepo: `https://github.com/${repo.full_name ?? undefined}` },
      ],
    },
  });

  if (!project || !project.githubWebhookSecret) {
    // Unknown repo: just 200 so GitHub doesn't keep retrying
    return NextResponse.json({ ok: true, ignored: true });
  }

  const secret = decrypt(project.githubWebhookSecret);

  const valid = verifySignature(secret, raw, sig);
  if (!valid) {
    return NextResponse.json(
      { ok: false, reason: "Invalid signature" },
      { status: 401 }
    );
  }

  // Idempotency: if we already processed this delivery, ignore
  const existing = await prisma.webhookDelivery.findUnique({
    where: { deliveryId },
  });
  if (existing) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  // Store delivery (pending)
  await prisma.webhookDelivery.create({
    data: {
      deliveryId,
      event,
      projectId: project.id,
      payload: JSON.parse(JSON.stringify(payload)),
    },
  });

  const job = await githubWebhookQueue.add("webhook", {
    deliveryId,
    projectId: project.id,
    event,
    payload,
  });

  return NextResponse.json({
    success: true,
    message: "Webhook queued",
    jobId: job.id,
  });
}
