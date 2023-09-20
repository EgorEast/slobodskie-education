import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const inter = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Академия Слободских',
  description: 'My App is a...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
