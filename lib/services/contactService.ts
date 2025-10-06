// Contact Service
import { prisma } from '../prisma';

export const createContact = async (data: any): Promise<any> => {
  return prisma.contact_Us.create({ data });
};
