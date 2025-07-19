'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Bot, Calculator, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const menuItems = [
  { href: '#features', label: 'Özellikler' },
  { href: '#products', label: 'Çözümler' },
  { href: '#brands', label: 'Test Sonuçları' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll handler for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    menuItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-blue-500/10 py-2'
          : 'bg-transparent py-4',
      )}
    >
      <nav className="container flex items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 relative z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Future Autonoms"
              width={180}
              height={40}
              className="h-10 w-auto dark:invert"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-400',
                  activeSection === item.href.slice(1) ? 'text-blue-500' : 'text-foreground/60',
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="ghost"
                className="border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5 text-violet-500"
              >
                <Link href="/panel">
                  <Menu className="mr-2 h-4 w-4" />
                  Panel
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                className="border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 text-blue-500"
              >
                <Link href="#contact">
                  <Calculator className="mr-2 h-4 w-4" />
                  Ücretsiz Analiz
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Pulse Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />

              <Button
                asChild
                className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#contact">
                  <Bot className="mr-2 h-4 w-4" />
                  Hemen Başlayın
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative z-50 hover:bg-blue-500/10"
              >
                <Menu className="h-5 w-5 text-foreground/60" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs bg-background/95 backdrop-blur-lg border-blue-500/10"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Menü</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    asChild
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-blue-400 py-2',
                        activeSection === item.href.slice(1)
                          ? 'text-blue-500'
                          : 'text-foreground/60',
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <SheetClose asChild>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5 text-violet-500"
                    >
                      <Link href="/panel">
                        <Menu className="mr-2 h-4 w-4" />
                        Panel
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 text-blue-500"
                    >
                      <Link href="#contact">
                        <Calculator className="mr-2 h-4 w-4" />
                        Ücretsiz Analiz
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg relative group"
                    >
                      <Link href="#contact">
                        <Bot className="mr-2 h-4 w-4" />
                        Hemen Başlayın
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
