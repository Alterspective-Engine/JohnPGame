import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { authMiddleware } from '../../middleware/auth-middleware';
import { AuthRequest } from '../../types';
import { listItemsForUser, addItemForUser } from './item-service';

const router = Router();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

const createItemSchema = z.object({
  text: z.string().min(1, 'Text is required').max(500, 'Text too long'),
});

router.use(limiter);
router.use(authMiddleware);

// GET /api/items — list this user's items
router.get('/', (req, res) => {
  const { oid } = (req as AuthRequest).user;
  const items = listItemsForUser(oid);
  res.json(items);
});

// POST /api/items — create a new item
router.post('/', (req, res) => {
  const parsed = createItemSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0].message });
    return;
  }
  const { oid } = (req as AuthRequest).user;
  try {
    const item = addItemForUser(oid, parsed.data.text);
    res.status(201).json(item);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create item';
    res.status(400).json({ error: message });
  }
});

export default router;
