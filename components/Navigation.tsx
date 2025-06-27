'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Future Autonoms"
            width={180}
            height={40}
            className="h-10 w-auto invert"
            priority
          />
        </Link>
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
