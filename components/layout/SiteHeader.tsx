'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { navItems } from '@/lib/content';

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          onClick={closeMenu}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-200 transition hover:text-white"
        >
          Tobias
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-slate-300 transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-brand-400 hover:text-white lg:inline-flex"
          >
            Neem contact op
          </a>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-brand-400 hover:text-white lg:hidden"
            aria-label={isOpen ? 'Sluit navigatie' : 'Open navigatie'}
            aria-expanded={isOpen}
          >
            {isOpen ? <RiCloseLine className="h-5 w-5" /> : <RiMenuLine className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'lg:hidden',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="border-b border-white/10 bg-slate-950/95 px-4 pb-6 pt-2 shadow-lg shadow-black/40 backdrop-blur sm:px-6">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
