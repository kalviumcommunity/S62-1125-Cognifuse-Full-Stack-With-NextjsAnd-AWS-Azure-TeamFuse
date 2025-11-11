// src/app/project/[id]/page.tsx
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProjectIndex({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // redirect to overview tab
  redirect(`/project/${id}/overview`);
}
