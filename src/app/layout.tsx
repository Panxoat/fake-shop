import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fake Shop',
  description: 'This is Fake Shop. Not a real',
  openGraph: {
    title: 'Fake Shop',
    description: 'This is Fake Shop. Not a real',
    images: 'images/openGraph/root/og.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories',
  ).then((res) => res.json());

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header categories={categories} />
        {children}
      </body>
    </html>
  );
}
