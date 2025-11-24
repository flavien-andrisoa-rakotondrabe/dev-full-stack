import { Router, Request, Response } from 'express';
import { supabase } from '../supabase';

const router = Router();

// GET all users
router.get('/', async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('users').select('*');

  if (error) return res.status(400).json({ error });
  return res.json(data);
});

// POST create a user
router.post('/', async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert({ name, email })
    .select()
    .single();

  if (error) return res.status(400).json({ error });
  return res.json(data);
});

export default router;
