import React from 'react';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// SEO Metadata for the Privacy Statement page
export const metadata: Metadata = {
  title: 'Privacy Statement | Town and Village Pediatrics',
  description:
    'Learn about the privacy assurances and policies for the Town & Village Pediatrics website.',
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyStatementPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* --- Page Header Section --- */}
      <section
        className="bg-[var(--color-background-alt)] py-16 md:py-20"
        aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          {/* Decorative Icon */}
          <FontAwesomeIcon
            icon={faShieldHalved}
            className="mb-4 text-6xl text-[var(--color-primary-action)] opacity-80"
            aria-hidden="true"
          />
          <h1
            id="privacy-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)]">
            Our Privacy Statement
          </h1>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section className="py-16 md:py-24 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Constrain text width for readability */}
          <div className="max-w-3xl mx-auto">
            {/* Main Privacy Policy Content */}
            <div
              className="space-y-6 text-lg text-[var(--color-text-primary)] leading-relaxed"
              aria-labelledby="privacy-heading">
              <p>We make the following assurances of privacy for visitors to our Web site:</p>
              <p>
                The Town & Village Pediatrics Web site is designed to provide useful information
                about our organization and to connect users with information.
              </p>
              <p>
                Our Web site does not promote or sell products of any kind. We do hope that the
                information provided encourages the visitor to consider using Town & Village
                Pediatrics for medical care.
              </p>
              <p>
                We keep track of visits to our Web site via an automatic monitoring program that
                tells us, among other things, how many visits are made to the site; the time of day
                and date of those visits; and the areas visited. This information is used to
                evaluate the effectiveness of our site and the effectiveness of any promotion of our
                site. It helps us answer questions such as these: Are we providing information on
                our Web site that is useful? Which information is most useful? How have we made you
                aware that our Web site exists?
              </p>
              <p>
                The monitoring program does not provide us with any personal information about a
                visitor. We cannot discern the name, address or any other personal information about
                visitors to our site.
              </p>
            </div>

            {/* External Links Section */}
            <div
              className="mt-16 pt-12 border-t border-gray-200"
              aria-labelledby="external-links-heading">
              <h2
                id="external-links-heading"
                className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-6 flex items-center">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mr-3 text-2xl"
                  aria-hidden="true"
                />
                External Links
              </h2>
              <div className="space-y-6 text-lg text-[var(--color-text-primary)] leading-relaxed">
                <p>
                  Links to other Internet pages are provided for information purpose only. These
                  links are not intended to be comprehensive. Inclusion of external sources on these
                  pages does not imply endorsement by Town & Village Pediatrics of any products,
                  services or information presented in these external sites, nor does Town & Village
                  Pediatrics guarantee the accuracy of the information contained on them.
                </p>
                <p>
                  In addition, Town & Village Pediatrics has no control over the privacy practices
                  of external Web sites. The user should read and understand the policies of all Web
                  sites with respect to their privacy practices.
                </p>
                <p>
                  These links are provided for your general information and education only, it is
                  not intended to diagnose personal physical conditions and is not a substitute for
                  consultant with one&apos;s own personal health care provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyStatementPage;
