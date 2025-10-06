import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { getCurrentUser } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const harvest = await prisma.harvest.findFirst({
    where: { cid_of_harvest: params.id },
  });

  if (!harvest) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(harvest);
}

// Blockchain immutability → block updates/deletes
export async function PUT() {
  return NextResponse.json({ error: "Not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Not allowed" }, { status: 405 });
}
