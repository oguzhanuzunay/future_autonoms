'use client';

import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Admin Panel',
};

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>
        <header className="p-4 flex justify-end">
          <UserButton afterSignOutUrl="/" />
        </header>
        <main className="p-4">{children}</main>
      </SignedIn>
      <SignedOut>
        <SignIn redirectUrl="/panel" />
      </SignedOut>
    </>
  );
}