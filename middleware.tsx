import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


export async function middleware(req:NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  return res;
}

export const config = {
  matcher: ['/'], // Apply middleware to all pages
};
