import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// SEO Metadata for the page
export const metadata: Metadata = {
  title: 'New Patients | Town and Village Pediatrics',
  description:
    'Welcome to Town and Village Pediatrics. Learn how to join our practice and what to expect from our personal, comprehensive approach to pediatric care.',
};

const NewPatientsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background-primary)]">
      {/* --- Hero Section --- */}
      <section
        className="bg-[var(--color-background-alt)] py-16 md:py-20"
        aria-labelledby="new-patients-hero-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1
            id="new-patients-hero-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)] mb-6">
            Welcome to Town and Village Pediatrics!
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
            We are a pediatric medical group that offers comprehensive healthcare from infancy to
            young adulthood. If you are looking for exceptional, up-to-date pediatric care with a
            personal touch, we invite you to our practice.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section
        className="py-16 md:py-24 bg-[var(--color-background-primary)]"
        aria-labelledby="practice-philosophy-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Section Header */}
          <div className="mb-12">
            <h2
              id="practice-philosophy-heading"
              className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-4">
              A Personal Approach to Medicine
            </h2>
            <p className="text-lg text-[var(--color-text-primary)] leading-relaxed">
              At Town and Village Pediatrics, we place a very high premium on getting to know you
              well, something that is not easily accomplished in today&apos;s high speed,
              &quot;assembly-line&quot; approach to medicine.
            </p>
          </div>

          {/* Prose wrapper for readable text blocks */}
          <div className="prose prose-lg max-w-none text-[var(--color-text-primary)]">
            <h3 className="text-xl font-bold text-[var(--color-secondary-accent)]">
              Our practice has accomplished this by:
            </h3>

            {/* Feature List */}
            <ul className="list-none pl-0 space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--color-primary-action)] mt-1 mr-3 flex-shrink-0"
                />
                <span>Keeping an intimate practice size</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--color-primary-action)] mt-1 mr-3 flex-shrink-0"
                />
                <span>
                  Ensuring that your children will be seen exclusively by a pediatrician at every
                  visit
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--color-primary-action)] mt-1 mr-3 flex-shrink-0"
                />
                <span>Always offering same day sick visit appointments</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--color-primary-action)] mt-1 mr-3 flex-shrink-0"
                />
                <span>Maintaining a 24-hour &quot;on-call&quot; service by our pediatricians</span>
              </li>
            </ul>

            <p>
              We also feel it is important that you know us well. Anytime your child requires
              medical attention you will be attended to by a physician from Town and Village
              Pediatrics, whether it is for an office visit, an after-hours call, or during a
              hospital stay.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section
        className="py-16 md:py-20 bg-[var(--color-background-alt)]"
        aria-labelledby="join-practice-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2
            id="join-practice-heading"
            className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-6">
            Join Our &quot;Family of Families&quot;
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed">
            We encourage you to schedule a visit with one of our pediatricians to see how we can
            meet your needs. The doctors and staff at Town and Village Pediatrics would love to get
            to know you and your family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7166336988"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary-action)] px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-[#7a9136] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:ring-offset-2 w-full sm:w-auto">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call (716) 633-6988
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewPatientsPage;
