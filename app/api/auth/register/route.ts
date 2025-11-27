import { hashPassword } from '@/lib/auth';
import { supabaseServer } from '@/supabase/server';
import { registerSchema } from '@/schemas/authSchema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const parseRes = registerSchema.safeParse(body);

  if (!parseRes.success) {
    const firstIssue = parseRes.error.issues[0];
    const field = firstIssue.path[0] as string;
    const message = firstIssue.message;

    return NextResponse.json({ error: message, field }, { status: 400 });
  }

  const { pseudo, email, password } = parseRes.data;

  const hashedPassword = await hashPassword(password);

  const { data, error } = await supabaseServer
    .from('users')
    .insert([{ pseudo, email, password: hashedPassword }])
    .select()
    .single();

  if (error) {
    if (error.code === '23505' && error.details?.includes('email')) {
      return NextResponse.json({ alreadyExist: true });
    }
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({
    user: { id: data.id },
  });
}
