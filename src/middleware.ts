import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, type NextRequest } from 'next/server';
import { Database } from '@/lib/database.types';

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    res.cookies.delete('sb-localhost-auth-token:Array');
    return res;
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
