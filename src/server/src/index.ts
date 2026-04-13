import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { initDatabase } from './database';
import authRouter from './features/auth/auth-router';
import itemsRouter from './features/items/items-router';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
    credentials: false,
  })
);

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/items', itemsRouter);

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const port = parseInt(process.env.PORT ?? '3001');

// Only bind the TCP port and initialise the database when this file is the
// entry-point (i.e. run directly by Node/tsx).  When imported by tests, the
// app is exported as-is so supertest can drive it without opening a port.
const isMain =
  process.env.VITEST !== 'true' &&
  process.env.NODE_ENV !== 'test';

if (isMain) {
  initDatabase();
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;
