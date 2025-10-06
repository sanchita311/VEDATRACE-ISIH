import { NextResponse } from "next/server";
import { fetchFromIPFS } from "@/lib/ipfs";

export async function GET(req: Request, { params }: { params: { cid: string } }) {
  const { cid } = params;
  try {
    const data = await fetchFromIPFS(cid);
    return NextResponse.json(data);
  } catch (error) {
    const errMsg = (error instanceof Error) ? error.message : "Failed to fetch from IPFS";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
