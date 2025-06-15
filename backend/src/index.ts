import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import connectMongo from './db/mongo';
import userRoutes from './routes/users.routes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connectMongo();

app.use('/api/users', userRoutes);

app.get('/', (_req, res) => {
  res.send('🌍 EcoRide API with TypeScript is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})
