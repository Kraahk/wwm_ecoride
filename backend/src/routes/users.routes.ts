import { Router } from 'express';
import { createUser } from '../controllers/users.controller.js';
console.log('createUser is', typeof createUser); // doit afficher "function"
const router = Router();

// POST /api/users
router.post('/', createUser);

export default router;
