import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Lukia Sophia Burbaum | Creative Producer & Director',
  description: 'Portfolio of Lukia Sophia Burbaum - Creative Producer & Director, and Project Manager. Combining paid media and art to create meaningful creatives that tell a story and perform.',
  keywords: ['Creative Producer', 'Creative Director', 'Project Manager', 'Digital Marketing', 'Editorial', 'Commercial Photography'],
  authors: [{ name: 'Lukia Sophia Burbaum' }],
  openGraph: {
    title: 'Lukia Sophia Burbaum | Creative Producer & Director',
    description: 'Creative Producer & Director, and Project Manager. Combining paid media and art to create meaningful creatives that tell a story and perform.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body>
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
