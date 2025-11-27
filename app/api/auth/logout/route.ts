import { NextResponse } from 'next/server';
import { authTokenName } from '@/lib/constants';

export async function GET() {
  const response = NextResponse.json({ loggedOut: true });

  response.cookies.set(authTokenName, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
