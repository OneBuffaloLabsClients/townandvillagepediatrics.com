import Link from 'next/link';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faHouse, faCompass, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Page Not Found',
  description: "Oops! It seems you've wandered off the path. Let's get you back on track.",
  robots: {
    index: false,
    follow: true,
  },
});

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[var(--color-background-alt)] px-4 py-16">
      <div className="text-center max-w-lg mx-auto">
        {/* Fun Icon Animation */}
        <div className="relative inline-block mb-8">
          <FontAwesomeIcon
            icon={faCompass}
            className="text-8xl text-[var(--color-secondary-accent)] opacity-20 animate-pulse"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="text-6xl text-[var(--color-primary-action)] rotate-12"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)] mb-4">
          Uh-oh! Page Not Found
        </h1>
        <p className="text-xl text-[var(--color-text-primary)] font-medium mb-4">
          It looks like this page needs a check-up!
        </p>
        <p className="text-[var(--color-text-muted)] mb-10 leading-relaxed">
          We can't seem to find the page you're looking for. You might have typed the address
          incorrectly, or the page may have moved. Don't worry, we can help you find your way back.
        </p>

        {/* Primary Action */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary-action)] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#7a9136] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:ring-offset-2 mb-12">
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          Return to Homepage
        </Link>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 pt-10">
          <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-6">
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/physicians"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-[var(--color-secondary-accent)] font-semibold shadow-sm hover:shadow-md transition-all border border-gray-100">
              <FontAwesomeIcon icon={faUserDoctor} className="mr-2" />
              Meet Our Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-[var(--color-secondary-accent)] font-semibold shadow-sm hover:shadow-md transition-all border border-gray-100">
              <FontAwesomeIcon icon={faCompass} className="mr-2" />
              Contact & Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
