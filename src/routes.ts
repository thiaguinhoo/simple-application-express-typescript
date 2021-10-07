import { Router } from 'express';

const router = Router();

router.route('/')
  .get(async (request, response) => response.json({ Hello: 'World!' }));

export default router;

