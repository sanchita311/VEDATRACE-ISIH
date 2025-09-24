import { NextResponse } from "next/server";
import { harvestService } from "@/lib/services/harvestService";
import { getCurrentUser } from "@/lib/auth";


export async function GET_harvests() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    console.log("HARVEST DEBUG: fetching for user", user.UserName);
    const harvests = await harvestService.findByFarmer(user.UserName);
    console.log("HARVEST DEBUG: found harvests", harvests);
    return NextResponse.json(harvests);
  } catch (error) {
    console.error("Error fetching harvests:", error);
    return NextResponse.json({ error: "Failed to fetch harvests" }, { status: 500 });
  }
}


export async function POST_harvest(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    console.log("HARVEST DEBUG: creating for user", user.UserName, "with body", body);
    const newHarvest = await harvestService.create({
      ...body,
      farmerUserName: user.UserName,
    });
    console.log("HARVEST DEBUG: created", newHarvest);
    return NextResponse.json(newHarvest);
  } catch (error) {
    console.error("Error creating harvest:", error);
    return NextResponse.json({ error: "Failed to create harvest" }, { status: 500 });
  }
}
