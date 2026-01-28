import type { Metadata } from 'next';
import Script from "next/script";
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Lukia Sophia Burbaum | Creative Director & Producer',
  description: 'Portfolio of Lukia Sophia Burbaum - Creative Project Manager, Creative Director, and Creative Producer specializing in editorial, commercial, and digital projects.',
  keywords: ['Creative Director', 'Producer', 'Project Manager', 'Editorial', 'Commercial Photography', 'Fashion'],
  authors: [{ name: 'Lukia Sophia Burbaum' }],
  openGraph: {
    title: 'Lukia Sophia Burbaum | Creative Director & Producer',
    description: 'Creative Project Manager, Creative Director, and Creative Producer specializing in editorial, commercial, and digital projects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
