import { handleRouteError } from "@/lib/errors/handleRouteError";
import { prisma } from "../../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

// GET /api/users/[id]
export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = params.id;

    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        memberships: { include: { project: true } },
        projectsCreated: true,
        tasks: true,
      },
    });

    if (!user) {
      return sendError("User not found", "NOT_FOUND", 404);
    }

    return sendSuccess(user, "User fetched successfully");
  } catch (err) {
    console.log("Error in GET users", err);
    return handleRouteError(err);
  }
}

// PUT /api/users/[id]
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = params.id;

    const data = await req.json();

    const updated = await prisma.user.update({
      where: { id },
      data,
    });

    return sendSuccess(updated, "User updated successfully");
  } catch (err) {
    console.error("Error in PUT users", err);
    return handleRouteError(err);
  }
}

// DELETE /api/users/[id]
export async function DELETE(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.user.delete({ where: { id } });

    return sendSuccess(null, "User deleted successfully");
  } catch (err) {
    console.error("Error in DELETE user", err);
    return handleRouteError(err);
  }
}
