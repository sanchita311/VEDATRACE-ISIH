import { GET_harvests, POST_harvest } from "@/lib/controllers/harvestController";

export async function GET() {
  return GET_harvests();
}

export async function POST(req: Request) {
  return POST_harvest(req);
}
