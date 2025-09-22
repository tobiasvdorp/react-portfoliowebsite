'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWOW from '@/hooks/useWOW';
import LanguageSwitcher from './LanguageSwitcher';

type MenuItem = {
  textKey: string;
  link: string;
  animation: string;
};

const scrollOffset = 83;

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { textKey: 'home', link: '#home', animation: 'fadeInLeftBig' },
    { textKey: 'aboutMe', link: '#aboutme', animation: 'fadeInDownBig' },
    { textKey: 'projects', link: '#projects', animation: 'fadeInDownBig' },
    { textKey: 'skills', link: '#skills', animation: 'fadeInUpBig' },
    { textKey: 'contact', link: '#contact', animation: 'fadeInRightBig' },
  ];

  useWOW();

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      const anchor = event.currentTarget as HTMLAnchorElement | null;
      const href = anchor?.getAttribute('href');

      if (!href) {
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const top =
          window.pageYOffset +
          targetElement.getBoundingClientRect().top -
          scrollOffset;
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }

      setIsMenuOpen(false);
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinkClasses =
    "relative block px-5 py-3 text-base font-medium text-text transition-colors duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:origin-bottom-right before:scale-x-0 before:bg-accent before:content-[''] before:transition-transform before:duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-bottom-left after:scale-x-0 after:bg-accent after:content-[''] after:transition-transform after:duration-300 hover:text-accent hover:before:scale-x-100 hover:after:scale-x-100";

  return (
    <header className="relative inset-x-0 top-0 z-[9999] bg-background/95 shadow-[0_12px_20px_0_rgba(0,0,0,0.6)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          className="animate__animated animate__fadeInRightBig font-heading text-3xl font-extrabold text-text transition-colors duration-300 hover:text-accent"
        >
          Tobias
        </a>

        <button
          type="button"
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-text shadow-[0_0_4px_0_var(--accent)] transition-all duration-200 ease-in-out hover:scale-105 hover:bg-secondary hover:text-text hover:shadow-[0_0_10px_1px_var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span
            className={`absolute h-[2px] w-7 -translate-y-2.5 rounded-full bg-text transition-all duration-200 ${isMenuOpen ? 'translate-y-0 rotate-45' : ''}`}
          />
          <span
            className={`absolute h-[2px] w-7 rounded-full bg-text transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`absolute h-[2px] w-7 translate-y-2.5 rounded-full bg-text transition-all duration-200 ${isMenuOpen ? 'translate-y-0 -rotate-45' : ''}`}
          />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className={`absolute left-0 right-0 top-full overflow-hidden border-t border-accent/20 bg-background/95 shadow-[0_12px_20px_0_rgba(0,0,0,0.6)] transition-[max-height] duration-300 ease-in-out lg:static lg:flex lg:max-h-none lg:border-t-0 lg:bg-transparent lg:shadow-none ${
            isMenuOpen ? 'max-h-[400px]' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-1 py-2 lg:flex-row lg:items-center lg:gap-2 lg:py-0">
            {menuItems.map((item) => (
              <li key={item.textKey} className="w-full text-center lg:w-auto">
                <a
                  href={item.link}
                  className={`${navLinkClasses} animate__animated animate__${item.animation}`}
                >
                  {t(item.textKey)}
                </a>
              </li>
            ))}
            <li className="w-full px-5 py-2 text-center lg:w-auto lg:px-0 lg:py-0 lg:pl-4">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
