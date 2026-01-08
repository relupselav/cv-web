import "./globals.css";
import type { Metadata } from "next";
import { Unbounded } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-unbounded'
});

export const metadata: Metadata = {
  title: "Valentina Spuler",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
 <html lang="es" className={unbounded.variable}>
      <body>
        <Navbar />
        <main style={{ marginTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
