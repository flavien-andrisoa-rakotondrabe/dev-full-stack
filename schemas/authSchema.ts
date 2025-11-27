import { z } from 'zod';

export const registerSchema = z.object({
  pseudo: z.string().trim().min(1, 'Pseudo requis'),
  email: z.string().trim().min(1, 'Email requis').email('Email invalide'),
  password: z.string().min(6, 'Minimum 6 caractères'),
});

export const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email requis').email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
});
