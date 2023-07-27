import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { Database } from '@/lib/database.types';
import createIntlMiddleware from 'next-intl/middleware';

export default async function middleware(req: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'is'],
    defaultLocale: 'is',
  });
  const res = handleI18nRouting(req);

  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  return res;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
