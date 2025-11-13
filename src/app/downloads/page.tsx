import React from 'react';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faFileLines,
  faFileWord,
  faCircleDown,
} from '@fortawesome/free-solid-svg-icons';

// SEO Metadata for the Downloads page
export const metadata: Metadata = {
  title: 'Practice Downloads & Forms | Town and Village Pediatrics',
  description:
    'Access and download important patient forms, dosing charts, and practice information from Town and Village Pediatrics.',
};

// Define the list of downloadable items
const downloadItems = [
  {
    title: 'NCQA Recognition',
    href: '/forms/ncqa-recognition.pdf',
    icon: faFileLines,
  },
  {
    title: 'Office Visit and Immunization Schedule',
    href: '/forms/visit-immunization-schedule.pdf',
    icon: faFileLines,
  },
  {
    title: 'New Patient History Form',
    href: '/forms/new-patient-history-form.pdf',
    icon: faFileLines,
  },
  {
    title: 'Release of Medical Information',
    href: '/forms/release-form.pdf', // Path from context
    icon: faFileWord, // Specific icon for DOCX
  },
  {
    title: 'Vaccine Schedule',
    href: '/forms/vaccine-schedule.pdf',
    icon: faFileLines,
  },
  {
    title: 'Vaccine Statement',
    href: '/forms/vaccine-statement.pdf',
    icon: faFileLines,
  },
  {
    title: 'Tylenol Dose Chart',
    href: '/forms/tylenol-dose-chart.jpg',
    icon: faFileLines,
  },
  {
    title: 'Motrin Chart',
    href: '/forms/motrin-chart.jpg',
    icon: faFileLines,
  },
];

const DownloadsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* --- Page Header Section --- */}
      <section
        className="bg-[var(--color-background-alt)] py-16 md:py-20"
        aria-labelledby="downloads-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          {/* Decorative Icon */}
          <FontAwesomeIcon
            icon={faDownload}
            className="mb-4 text-6xl text-[var(--color-primary-action)] opacity-80"
            aria-hidden="true"
          />
          <h1
            id="downloads-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)]">
            Practice Downloads
          </h1>
          <p className="mt-4 text-xl text-[var(--color-text-muted)] leading-relaxed">
            Access important patient forms, dosing charts, and practice information here.
          </p>
        </div>
      </section>

      {/* --- Downloads List Section --- */}
      <section
        className="py-16 md:py-24 bg-[var(--color-background-primary)]"
        aria-labelledby="forms-list-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 id="forms-list-heading" className="sr-only">
            Available Forms and Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank" // Open in new tab
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--color-secondary-accent)] transition-all duration-300 group"
                aria-label={`Download ${item.title}`}>
                {/* Icon and Title */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-3xl text-[var(--color-primary-action)] mr-5"
                    aria-hidden="true"
                  />
                  <span className="text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary-accent)] transition-colors">
                    {item.title}
                  </span>
                </div>

                {/* Download Action Icon */}
                <FontAwesomeIcon
                  icon={faCircleDown}
                  className="text-2xl text-[var(--color-text-muted)] opacity-60 group-hover:text-[var(--color-secondary-accent)] group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadsPage;
