import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';
import request from 'supertest';
import type { Request, Response, NextFunction } from 'express';

// Mock the auth middleware so tests never hit the network for JWKS/JWT.
// The middleware replicates the real header-presence check (so the 401 test
// without a header still works), then injects the test user identity when a
// Bearer token is present.
vi.mock('../../src/server/src/middleware/auth-middleware', () => ({
  authMiddleware: (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Missing or invalid Authorization header' });
      return;
    }
    (req as Request & { user: unknown }).user = {
      oid: 'items-test-oid',
      email: 'items@example.com',
      displayName: 'Items User',
    };
    next();
  },
}));

import app from '../../src/server/src/index';
import { initDatabase } from '../../src/server/src/database';
import db from '../../src/server/src/database';

const BEARER = 'Bearer valid.mock.token';

beforeAll(() => {
  initDatabase();
  // Auto-provision the test user so the items foreign-key constraint is satisfied
  db.prepare(
    'INSERT OR IGNORE INTO users (entra_oid, email, display_name) VALUES (?, ?, ?)',
  ).run('items-test-oid', 'items@example.com', 'Items User');
});

afterEach(() => {
  // Clear items between tests to keep state predictable
  db.prepare('DELETE FROM items WHERE user_oid = ?').run('items-test-oid');
});

describe('GET /api/items', () => {
  it('returns 401 when no Authorization header is provided', async () => {
    const res = await request(app).get('/api/items');

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error');
  });

  it('returns an empty array for a new user with no items', async () => {
    const res = await request(app).get('/api/items').set('Authorization', BEARER);

    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});

describe('POST /api/items', () => {
  it('returns 400 when the text field is missing from the request body', async () => {
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', BEARER)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('returns 400 when the text field is an empty string', async () => {
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', BEARER)
      .send({ text: '' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('returns 201 with the created item when text is valid', async () => {
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', BEARER)
      .send({ text: 'My first item' });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      text: 'My first item',
      user_oid: 'items-test-oid',
    });
    expect(res.body.id).toBeDefined();
    expect(res.body.created_at).toBeDefined();
  });

  it('returns 400 when text exceeds 500 characters', async () => {
    const longText = 'a'.repeat(501);
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', BEARER)
      .send({ text: longText });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

describe('GET /api/items after creation', () => {
  it('returns the item that was just created', async () => {
    await request(app)
      .post('/api/items')
      .set('Authorization', BEARER)
      .send({ text: 'Persisted item' });

    const res = await request(app).get('/api/items').set('Authorization', BEARER);

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toMatchObject({
      text: 'Persisted item',
      user_oid: 'items-test-oid',
    });
  });
});
