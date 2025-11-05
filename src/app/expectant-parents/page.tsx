import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ExpectantParents = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background-primary)]">
      {/* --- Hero Section --- */}
      <section
        className="bg-[var(--color-background-alt)] py-16 md:py-24"
        aria-labelledby="expectant-hero-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1
                id="expectant-hero-heading"
                className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)] leading-tight">
                Expectant Parents
              </h1>
              <p className="text-xl text-[var(--color-text-primary)] font-medium">
                Congratulations on your growing family!
              </p>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Your path to parenthood is one of the most exciting times in your life, and we would
                love to be part of it. An important step in providing for the health of your child
                will be the selection of a pediatrician.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary-action)] px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-[#7a9136] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:ring-offset-2">
                  Schedule a Free Prenatal Visit
                </Link>
              </div>
            </div>
            {/* Image - Using a placeholder for now, replace with actual image */}
            <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/800x600/e2e8f0/1e293b?text=Expectant+Parents"
                alt="Comfortable waiting area with children's books"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- What to Expect Section --- */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="what-to-expect-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2
            id="what-to-expect-heading"
            className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-8 text-center">
            Your Free Prenatal Visit
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-text-primary)]">
            <p>
              We welcome you to schedule a free prenatal visit at Town and Village Pediatrics. During
              your visit, you will meet one of our board-certified pediatricians for an individual
              family meeting.
            </p>
            <p>
              We will speak with you about important decisions you will be making, such as newborn
              feeding and circumcision, and you will be able to ask questions you may have about
              caring for your newborn.
            </p>
            <h3 className="text-xl font-bold text-[var(--color-secondary-accent)] mt-8 mb-4">
              A prenatal visit also gives you the chance to:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              {[
                'Meet our friendly staff',
                'View our modern facilities',
                'Become familiar with our location',
                'Discuss any health concerns from your pregnancy',
                'Review important family health history',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-[var(--color-primary-action)] mt-1 mr-3 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section
        className="py-16 bg-[var(--color-background-alt)] text-center"
        aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2
            id="cta-heading"
            className="text-2xl md:text-3xl font-bold text-[var(--color-secondary-accent)] mb-6">
            Let's Get Acquainted
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
            The prenatal visit is a wonderful opportunity for you and your pediatrician to become
            acquainted before your baby's birth. We hope to be a familiar face when we come to visit
            you and your baby at one of our affiliated hospitals!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7166336988"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-bold text-[var(--color-secondary-accent)] shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call (716) 633-6988
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary-action)] px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-[#7a9136]">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpectantParents;