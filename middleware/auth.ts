import { verifyToken } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function authMiddleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.json({ notAuthenticated: true });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ notAuthenticated: true });
  }

  return { decoded };
}
