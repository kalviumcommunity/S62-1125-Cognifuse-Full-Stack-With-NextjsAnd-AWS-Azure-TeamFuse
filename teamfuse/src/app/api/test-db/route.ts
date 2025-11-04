import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Connected successfully!", users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
