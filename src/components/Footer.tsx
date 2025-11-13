'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faPhone,
  faFax,
  faUserNurse,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2025; // Year of new website launch

  return (
    <footer className="bg-[var(--color-background-alt)] pt-12 pb-6 text-[var(--color-text-primary)] border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Col 1: Branding & Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-secondary-accent)]">
              Town & Village Pediatrics
            </h2>
            <address className="not-italic space-y-3 text-sm leading-relaxed">
              <p className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 mr-3 text-[var(--color-primary-action)] fa-fw"
                  aria-hidden="true"
                />
                <span>
                  6044 Main Street, Suite 100
                  <br />
                  Williamsville, NY 14221
                </span>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-3 text-[var(--color-primary-action)] fa-fw"
                  aria-hidden="true"
                />
                <a
                  href="tel:7166336988"
                  className="hover:text-[var(--color-secondary-accent)] transition-colors">
                  (716) 633-6988
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faFax}
                  className="mr-3 text-[var(--color-primary-action)] fa-fw"
                  aria-hidden="true"
                />
                <span>(716) 631-8690</span>
              </p>
              <p className="flex items-center">
                {/* --- THIS IS THE UPDATED ICON --- */}
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mr-3 text-[var(--color-primary-action)] fa-fw"
                  aria-hidden="true"
                />
                <a
                  href="https://www.facebook.com/profile.php?id=100063700055587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-secondary-accent)] transition-colors"
                  aria-label="Visit our Facebook page (opens in a new tab)">
                  Follow us on Facebook
                </a>
              </p>
            </address>
          </div>

          {/* Col 2: Winter Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-secondary-accent)] mb-4">
              Winter Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="font-medium">Mon - Fri:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>8:30 AM - 12:00 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[var(--color-text-muted)] bg-white/50 p-2 rounded-md inline-block">
              <FontAwesomeIcon icon={faUserNurse} className="mr-1.5 fa-fw" aria-hidden="true" />
              Nurse call-in starts at 7:30 AM (M-F)
            </p>
          </div>

          {/* Col 3: Summer Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-secondary-accent)] mb-4">
              Summer Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="font-medium">Mon - Fri:</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-[var(--color-text-muted)]">
                <span className="font-medium">Saturday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Portal */}
          <div className="flex flex-col lg:items-end">
            <a
              href="https://www.medentmobile.com/portal/index.php?practice_id=Ji6KGx7c"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex w-full lg:w-auto items-center justify-center rounded-md bg-[var(--color-secondary-accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#005f91] hover:shadow-md">
              <FontAwesomeIcon icon={faLock} className="mr-2 fa-fw" aria-hidden="true" />
              Secure Patient Portal
            </a>
            <nav
              className="grid grid-cols-2 gap-2 text-sm lg:text-right w-full"
              aria-label="Footer Navigation">
              <Link href="/" className="hover:text-[var(--color-secondary-accent)] hover:underline">
                Home
              </Link>
              <Link
                href="/physicians"
                className="hover:text-[var(--color-secondary-accent)] hover:underline">
                Our Team
              </Link>
              <Link
                href="/new-patients"
                className="hover:text-[var(--color-secondary-accent)] hover:underline">
                New Patients
              </Link>
              <Link
                href="/parents-corner"
                className="hover:text-[var(--color-secondary-accent)] hover:underline">
                Parents Corner
              </Link>
              <Link
                href="/expectant-parents"
                className="hover:text-[var(--color-secondary-accent)] hover:underline">
                Expectant Parents
              </Link>
              <Link
                href="/downloads"
                className="hover:text-[var(--color-secondary-accent)] hover:underline">
                Downloads
              </Link>
              <Link
                href="/contact"
                className="hover:text-[var(--color-secondary-accent)] hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright / Legal */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-[var(--color-text-muted)]">
          <p>
            &copy; {startYear}
            {currentYear > startYear ? ` - ${currentYear}` : ''} Town & Village Pediatrics, L.L.C.
            All Rights Reserved.
          </p>
          <p className="mt-2">
            Website by{' '}
            <a
              href="https://onebuffalolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary-action)] cursor-pointer">
              One Buffalo Labs
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs">
            <Link
              href="/privacy-statement"
              className="hover:text-[var(--color-text-primary)] transition-colors">
              Privacy Statement
            </Link>
            <Link
              href="/privacy-practice-notice"
              className="hover:text-[var(--color-text-primary)] transition-colors">
              Privacy Practice Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
