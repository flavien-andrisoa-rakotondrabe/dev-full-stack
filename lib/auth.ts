import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { TokenInterface } from '@/types/tokenInterface';

const jwtSecret = process.env.JWT_SECRET!;

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (payload: any) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: '7d' });
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, jwtSecret) as TokenInterface;
    return decoded;
  } catch {
    return null;
  }
};
