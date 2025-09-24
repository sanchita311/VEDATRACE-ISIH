// Consumer Controller
import * as consumerService from '@/lib/services/consumerService';
import { NextApiRequest, NextApiResponse } from 'next';


export const getConsumers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const consumers = await consumerService.getConsumers();
    res.status(200).json(consumers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch consumers' });
  }
};

export const getConsumerById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
    const consumer = await consumerService.getConsumerById(id);
    if (!consumer) return res.status(404).json({ error: 'Consumer not found' });
    res.status(200).json(consumer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch consumer' });
  }
};

export const createConsumer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newConsumer = await consumerService.createConsumer(req.body);
    res.status(201).json(newConsumer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create consumer' });
  }
};
