import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const harvest = await prisma.harvest.findFirst({
    where: { Harvest_id: params.id, farmerUserName: user.UserName },
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
