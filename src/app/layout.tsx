import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Provider } from '@/components/Provider';

const fontStyle = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel With Ai',
  description: 'Travel with AI, your personal travel assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontStyle.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
