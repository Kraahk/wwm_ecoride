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

app.use(
  cors({
    origin: 'http://localhost:5173', // URL frontend
    credentials: true,
  }),
);
app.options(
  '*',
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
  }),
);

connectMongo();
console.log('userRoutes loaded:', typeof userRoutes); // doit afficher "function"

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
// Debug des routes Express
console.log('🧭 Routes Express enregistrées :');
(app._router?.stack || [])
  .filter((layer: any) => layer.route)
  .forEach((layer: any) => {
    const method = Object.keys(layer.route.methods)[0].toUpperCase();
    const path = layer.route.path;
    console.log(`- ${method} ${path}`);
  });
