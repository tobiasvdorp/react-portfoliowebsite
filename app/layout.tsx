import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tobias van Dorp · Portfolio',
  description:
    'Portfolio van Tobias van Dorp: derdejaars OpenICT-student met focus op toegankelijke en performante front-end ervaringen.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="nl">
    <body className="bg-slate-950 font-sans text-slate-100 antialiased">{children}</body>
  </html>
);

export default RootLayout;
