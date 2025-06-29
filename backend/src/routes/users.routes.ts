import { Router } from 'express';
import { createUser } from '../controllers/users.controller';

const router = Router();

// POST /api/users
router.post('/', createUser);

export default router;
