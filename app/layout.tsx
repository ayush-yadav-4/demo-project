import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RupeSafe - Technology Solutions Company',
  description: 'RupeSafe is a technology solutions company that helps businesses build, grow, and scale in the digital world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ...existing head contents... */}
        {/* Lucide icons CDN so <i data-lucide="..."> renders */}
        <script src="https://unpkg.com/lucide@latest"></script>
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
