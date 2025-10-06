// Contact Controller
import * as contactService from '@/lib/services/contactService';
import { NextApiRequest, NextApiResponse } from 'next';

export const createContact = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newContact = await contactService.createContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
};
