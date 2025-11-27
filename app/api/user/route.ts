import { authMiddleware } from '@/middleware/auth';
import { supabaseServer } from '@/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const authResult = await authMiddleware(req);

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const userId = authResult.decoded.id;

  const { data, error } = await supabaseServer
    .from('users')
    .select('id, pseudo, email, created_at, updated_at')
    .eq('id', userId)
    .single();

  if (error || !data) {
    return NextResponse.json({ userNotFound: true });
  }

  return NextResponse.json({ user: data });
}
