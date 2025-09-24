import { NextRequest, NextResponse } from "next/server";

export function requireAuth(req: NextRequest) {
  const session = req.cookies.get("sessionToken");

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null; // ✅ means auth passed
}
