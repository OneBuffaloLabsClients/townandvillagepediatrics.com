'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faArrowUpRightFromSquare,
  faXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Team', href: '/physicians' },
    { name: 'New Patients', href: '/new-patients' },
    { name: 'Parents Corner', href: '/parents-corner' },
    // { name: 'News', href: '/news' }, // Uncomment if News page is ready
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-background-primary)]/95 backdrop-blur-smOX shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8ZC">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Town and Village Pediatrics Home">
              {/* Replace with actual Next.js Image when available */}
              <span className="text-2xl font-bold text-[var(--color-secondary-accent)] tracking-tight">
                Town & Village{' '}
                <span className="text-[var(--color-primary-action)]">Pediatrics</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-secondary-accent)] ${
                  pathname === item.href
                    ? 'text-[var(--color-secondary-accent)] font-semibold'
                    : 'text-[var(--color-text-primary)]'
                }`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons Area */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7166336988"
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-secondary-accent)]">
              <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" aria-hidden="true" />
              (716) 633-6988
            </a>
            <a
              href="https://www.medentmobile.com/portal/index.php?practice_id=Ji6KGx7c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary-action)] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#7a9136] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:ring-offset-2"
              aria-label="Open Patient Portal in a new tab">
              Patient Portal
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-2 text-xs fa-fw"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text-primary)] hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle main menu">
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-2xl fa-fw" aria-hidden="true" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl fa-fw" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? 'bg-[var(--color-background-alt)] text-[var(--color-secondary-accent)]'
                    : 'text-[var(--color-text-primary)] hover:bg-gray-50 hover:text-[var(--color-secondary-accent)]'
                }`}>
                {item.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
              <a
                href="tel:7166336988"
                className="flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-base font-medium text-[var(--color-text-primary)] transition hover:bg-gray-200">
                <FontAwesomeIcon icon={faPhone} className="mr-2 fa-fw" aria-hidden="true" /> Call Us
              </a>
              <a
                href="https://www.medentmobile.com/portal/index.php?practice_id=Ji6KGx7c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md bg-[var(--color-primary-action)] px-4 py-2 text-base font-bold text-white transition hover:bg-[#7a9136]">
                Patient Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
