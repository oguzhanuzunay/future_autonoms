import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  // If no Clerk key is available, bypass auth completely
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.next();
  }

  // Import Clerk middleware dynamically when needed
  const { clerkMiddleware, createRouteMatcher } = require('@clerk/nextjs/server');
  const isProtectedRoute = createRouteMatcher(['/panel(.*)']);
  
  return clerkMiddleware((auth: any, request: any) => {
    if (isProtectedRoute(request)) {
      auth.protect();
    }
  })(req, {} as any);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
