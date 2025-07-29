import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: 'Future Autonoms | Enterprise AI Transformation Platform',
  description:
    'Transform your business with AI-powered automation. Future Autonoms delivers end-to-end AI transformation with custom agents, data fabric integration, and ROI-focused implementation.',
  keywords: [
    'AI Transformation',
    'Enterprise AI',
    'Business Automation',
    'AI Agents',
    'Digital Transformation',
    'Process Optimization',
    'AI Integration',
    'Business Intelligence',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPublishableKey) {
    // Fallback without Clerk for development/preview
    return (
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
