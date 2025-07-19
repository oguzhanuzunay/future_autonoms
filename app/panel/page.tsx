'use client';

import { SignedIn } from '@clerk/nextjs';

export default function PanelHome() {
  return (
    <SignedIn>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome to the Admin Panel</h1>
        <p className="mt-2 text-muted-foreground">You are signed in with Clerk.</p>
      </div>
    </SignedIn>
  );
}