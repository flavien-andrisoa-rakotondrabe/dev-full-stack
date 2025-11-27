import { verifyToken } from '@/lib/auth';
import { authTokenName } from '@/lib/constants';
import { supabaseServer } from '@/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(authTokenName)?.value;

    if (!token) {
      return NextResponse.json({ notAuthenticated: true });
    }

    const decoded: any = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ notAuthenticated: true });
    }

    const { data, error } = await supabaseServer
      .from('users')
      .select('id, pseudo, email')
      .eq('id', decoded.id)
      .single();

    if (error || !data) {
      return NextResponse.json({ userNotFound: true });
    }

    return NextResponse.json({ user: { id: data.id } });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Erreur serveur' },
      { status: 500 },
    );
  }
}
