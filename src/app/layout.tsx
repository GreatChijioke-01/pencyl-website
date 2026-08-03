import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { AnimatedBackground } from '@/components/AnimatedBackground'; // <-- 1. Import it

export const metadata: Metadata = {
  title: 'Pencyl - Lightweight local-first development workspace',
  description: 'The lightweight, local-first development workspace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <Providers>
          <AnimatedBackground /> {/* <-- 2. Add it inside Providers */}
          {children}
        </Providers>
      </body>
    </html>
  );
}