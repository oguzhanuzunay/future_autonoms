import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default authMiddleware({
  beforeAuth: (req) => {
    // Get the hostname
    const hostname = req.headers.get("host") || "";
    
    // For localhost development
    const isLocalhost = hostname.includes("localhost");
    
    if (isLocalhost) {
      // Check if it's panel.localhost:3000
      if (hostname.startsWith("panel.localhost")) {
        // Clone the URL
        const url = req.nextUrl.clone();
        
        // Rewrite to /panel path
        url.pathname = `/panel${url.pathname}`;
        
        return NextResponse.rewrite(url);
      }
    } else {
      // For production, check for panel subdomain
      const currentHost = hostname.replace(":3000", "");
      
      if (currentHost.startsWith("panel.")) {
        const url = req.nextUrl.clone();
        url.pathname = `/panel${url.pathname}`;
        return NextResponse.rewrite(url);
      }
    }
    
    return NextResponse.next();
  },
  publicRoutes: [
    "/",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/kvkk",
    "/panel/sign-in",
    "/panel/sign-up",
  ],
  ignoredRoutes: [
    "/api/webhook",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};