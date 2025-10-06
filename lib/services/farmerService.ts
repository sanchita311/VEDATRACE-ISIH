// Farmer Service
import { prisma } from '../prisma';

export const getFarmers = async (): Promise<any[]> => {
  return prisma.user.findMany({ where: { User_type: 'farmer' } });
};

export const getFarmerById = async (UserName: string): Promise<any | null> => {
  return prisma.user.findUnique({ where: { UserName, User_type: 'farmer' } });
};

export const createFarmer = async (data: any): Promise<any> => {
  return prisma.user.create({ data: { ...data, User_type: 'farmer' } });
};
