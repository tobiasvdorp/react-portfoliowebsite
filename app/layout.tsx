import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Tobias van Dorp | Front-end developer',
  description:
    'Portfolio van Tobias van Dorp: front-end developer en OpenICT student met focus op toegankelijke en speelse digitale ervaringen.',
  openGraph: {
    title: 'Tobias van Dorp | Front-end developer',
    description:
      'Portfolio van Tobias van Dorp met projecten, ervaring en vaardigheden in React, Next.js en toegankelijke interfaces.',
    siteName: 'Tobias van Dorp',
    locale: 'nl_NL',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="nl">
    <body className="bg-slate-950 font-sans text-slate-100">
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
