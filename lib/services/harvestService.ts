import { prisma } from "@/lib/prisma";
import { uploadToIPFS } from "@/lib/ipfs";

export const harvestService = {
  async findByFarmer(userName: string) {
    return prisma.harvest.findMany({
      where: { farmerUserName: userName },
      orderBy: { timestamp: "desc" },
    });
  },

  async create(data: any, user: any) {
    // Insert into DB first
    const batchId = crypto.randomUUID();
    const city = user.City || user.city || null;
    const state = user.state || null;
    const harvest = await prisma.harvest.create({
      data: {
        Herb_type: data.Herb_type,
        scientific_name: data.scientific_name,
        quantity_magnitude: data.quantity_magnitude,
        quantity_unit: data.quantity_unit,
        color_name: data.color_name,
        longitude: data.longitude,
        latitude: data.latitude,
        date_of_sending_harvest: data.date_of_sending_harvest
          ? new Date(data.date_of_sending_harvest)
          : null,
        Batch_id: batchId,
        farmerUserName: data.farmerUserName,
        city,
        state,
      },
    });

    // Upload to IPFS
    const ipfsData = {
      ...harvest,
      city,
      state,
    };
    const cid = await uploadToIPFS(ipfsData);

    // Update harvest with CID
    const updatedHarvest = await prisma.harvest.update({
      where: { Harvest_id: harvest.Harvest_id },
      data: { cid_of_harvest: cid },
    });
    return updatedHarvest;
  },
};
