import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reading Adventure',
  description: 'A fun reading app for children to improve their reading skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}