// Farmer Controller
import * as farmerService from '@/lib/services/farmerService';
import { NextApiRequest, NextApiResponse } from 'next';


export const getFarmers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const farmers = await farmerService.getFarmers();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch farmers' });
  }
};

export const getFarmerById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
    const farmer = await farmerService.getFarmerById(id);
    if (!farmer) return res.status(404).json({ error: 'Farmer not found' });
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch farmer' });
  }
};

export const createFarmer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newFarmer = await farmerService.createFarmer(req.body);
    res.status(201).json(newFarmer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create farmer' });
  }
};
