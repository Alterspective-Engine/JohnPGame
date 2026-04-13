import { describe, it, expect, vi, beforeAll } from 'vitest';
import request from 'supertest';
import type { Request, Response, NextFunction } from 'express';

// Mock the auth middleware module so tests never hit the network for JWKS/JWT.
// The mock is hoisted before any imports by Vitest, so the routers pick up the
// mock when the app module is first evaluated.
//
// For tests that need an authenticated user we rely on the BEARER_TOKEN sentinel;
// for unauthenticated tests we send no header and rely on the real auth header check
// that lives above the mock (we override the whole middleware, so the 401 tests
// need to be driven by a separate, real middleware path).
//
// Strategy: export a controllable mock that defaults to "authenticated" and can be
// toggled per-test to simulate the unauthenticated path.

let mockAuthEnabled = true;

vi.mock('../../src/server/src/middleware/auth-middleware', () => ({
  authMiddleware: (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Missing or invalid Authorization header' });
      return;
    }
    if (!mockAuthEnabled) {
      res.status(401).json({ error: 'Invalid or expired token' });
      return;
    }
    (req as Request & { user: unknown }).user = {
      oid: 'test-oid-123',
      email: 'test@example.com',
      displayName: 'Test User',
    };
    next();
  },
}));

import app from '../../src/server/src/index';
import { initDatabase } from '../../src/server/src/database';
import { findUser } from '../../src/server/src/features/auth/user-repository';

beforeAll(() => {
  initDatabase();
});

describe('GET /api/auth/me', () => {
  it('returns 401 when no Authorization header is provided', async () => {
    const res = await request(app).get('/api/auth/me');

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error');
  });

  it('returns 401 when Authorization header is not a Bearer token', async () => {
    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', 'Basic dXNlcjpwYXNz');

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error');
  });

  it('returns 200 with user identity when a valid Bearer token is provided', async () => {
    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', 'Bearer valid.mock.token');

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      oid: 'test-oid-123',
      email: 'test@example.com',
      displayName: 'Test User',
    });
  });

  it('auto-provisions the user in the database on first call', async () => {
    await request(app)
      .get('/api/auth/me')
      .set('Authorization', 'Bearer valid.mock.token');

    const user = findUser('test-oid-123');
    expect(user).toBeDefined();
    expect(user?.entra_oid).toBe('test-oid-123');
    expect(user?.email).toBe('test@example.com');
    expect(user?.display_name).toBe('Test User');
  });
});
