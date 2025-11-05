'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

// Define your redirects here
// Old Path : New Path
const redirects: Record<string, string> = {
  '/expectant-parents.php': '/expectant-parents',
  '/index.php': '/',
  '/contact.php': '/contact',
  '/location.php': '/contact',
  '/about.php': '/physicians',
  '/parents-corner.php': '/parents-corner',
  // Add more as needed
};

export default function ClientRedirect({ children }: { children: React.ReactNode }) {
  // Start in a checking state so we don't render the 404 immediately
  const [isChecking, setIsChecking] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // If pathname is null (rare initial server render state), don't do anything yet
    if (!pathname) return;

    // Check if the current path exists in our redirects map
    if (redirects[pathname]) {
      router.replace(redirects[pathname]);
      // Keep isChecking true while we navigate away to prevent flash of 404 content
    } else {
      // No redirect found, it's a real 404. Show the content.
      // Small timeout to smooth out the transition
      const timer = setTimeout(() => setIsChecking(false), 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, router]);

  // If we are currently checking, ONLY show the spinner.
  // The 'else' rendering of {children} happens only after isChecking becomes false.
  if (isChecking) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center opacity-70">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="text-4xl text-[var(--color-primary-action)] animate-spin mb-4"
        />
        <p className="text-lg font-medium text-[var(--color-secondary-accent)] animate-pulse">
          Checking for moved page...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
