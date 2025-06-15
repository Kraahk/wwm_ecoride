import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        pseudo,
        email,
        password // ⚠️ à chiffrer avec bcrypt en production
      }
    });

    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
