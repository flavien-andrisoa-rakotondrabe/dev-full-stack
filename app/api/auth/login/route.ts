import { comparePassword, generateToken } from '@/lib/auth';
import { authTokenName } from '@/lib/constants';
import { supabaseServer } from '@/supabase/server';
import { loginSchema } from '@/schemas/authSchema';
import { NextResponse } from 'next/server';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
};

export async function POST(req: Request) {
  const body = await req.json();

  const parseRes = loginSchema.safeParse(body);

  if (!parseRes.success) {
    const firstIssue = parseRes.error.issues[0];
    const field = firstIssue.path[0] as string;
    const message = firstIssue.message;

    return NextResponse.json({ error: message, field }, { status: 400 });
  }

  const { email, password } = parseRes.data;

  const { data, error } = await supabaseServer
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) return NextResponse.json({ userNotFound: true });

  const valid = await comparePassword(password, data.password);
  if (!valid) return NextResponse.json({ invalidPassword: true });

  const token = generateToken({ id: data.id, email: data.email });

  const response = NextResponse.json({ user: { id: data.id } });
  response.cookies.set(authTokenName, token, cookieOptions);

  return response;
}
