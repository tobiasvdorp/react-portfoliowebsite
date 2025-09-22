'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavigationItem } from '@/lib/content';

type HeaderProps = {
  items: NavigationItem[];
};

const Header = ({ items }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold text-emerald-300" onClick={closeMenu}>
          Tobias van Dorp
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition hover:bg-white/5 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 md:hidden"
          aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen ? (
        <nav className="space-y-1 border-t border-white/5 bg-slate-950/95 px-4 pb-6 pt-4 text-base text-slate-100 md:hidden">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 transition hover:bg-white/5 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
