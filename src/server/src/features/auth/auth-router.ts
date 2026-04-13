import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth-middleware';
import { AuthRequest } from '../../types';
import { upsertUser } from './user-repository';

const router = Router();

// GET /api/auth/me — validates token, auto-provisions user on first login, returns DB identity
router.get('/me', authMiddleware, (req, res) => {
  const { oid, email, displayName } = (req as AuthRequest).user;
  try {
    const user = upsertUser(oid, email, displayName);
    res.json({ oid: user.entra_oid, email: user.email, displayName: user.display_name });
  } catch {
    res.status(500).json({ error: 'Failed to provision user' });
  }
});

export default router;
