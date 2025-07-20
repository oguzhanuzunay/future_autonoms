import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 
const isProtectedRoute = createRouteMatcher(['/panel/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  // Only protect if Clerk keys are configured
  if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'pk_test_YOUR_PUBLISHABLE_KEY_HERE') {
    if (isProtectedRoute(req)) auth().protect();
  }
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};