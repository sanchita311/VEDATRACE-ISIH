// Consumer Service
import { prisma } from '../prisma';

export const getConsumers = async (): Promise<any[]> => {
  return prisma.user.findMany({ where: { User_type: 'consumer' } });
};

export const getConsumerById = async (UserName: string): Promise<any | null> => {
  return prisma.user.findUnique({ where: { UserName, User_type: 'consumer' } });
};

export const createConsumer = async (data: any): Promise<any> => {
  return prisma.user.create({ data: { ...data, User_type: 'consumer' } });
};
