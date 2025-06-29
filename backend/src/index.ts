import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';
import connectMongo from './db/mongo.js';
import userRoutes from './routes/users.routes.js';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './trpc/index.js';

dotenv.config();

const app = express();

// const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // URL frontend
    credentials: true,
  }),
);

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
  }),
);

connectMongo();

app.use('/api/users', userRoutes);

app.get('/', (_req, res) => {
  res.send('🌍 EcoRide API with TypeScript is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
