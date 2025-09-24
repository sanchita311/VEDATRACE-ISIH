import { prisma } from "@/lib/prisma";

export const harvestService = {
  async findByFarmer(userName: string) {
    return prisma.harvest.findMany({
      where: { farmerUserName: userName },
      orderBy: { timestamp: "desc" },
    });
  },

  async create(data: any) {
    return prisma.harvest.create({
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
        Batch_id: crypto.randomUUID(),
        farmerUserName: data.farmerUserName,
      },
    });
  },
};
