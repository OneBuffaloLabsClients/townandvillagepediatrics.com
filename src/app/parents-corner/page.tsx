import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faHospital,
  faCalendarCheck,
  faFileMedical,
  faPrescriptionBottleMedical,
  faTriangleExclamation,
  faBookMedical,
  faArrowUpRightFromSquare,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons';

const ParentsCorner = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background-primary)]">
      {/* --- Hero Section --- */}
      <section
        className="bg-[var(--color-background-alt)] py-16 md:py-20"
        aria-labelledby="parents-hero-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1
            id="parents-hero-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)] mb-6">
            Parents Corner
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
            Essential information, resources, and office policies to help you manage your
            child&apos;s health with confidence.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: GENERAL INFORMATION --- */}
      <section
        id="general-info"
        className="py-16 sm:py-24 bg-[var(--color-background-primary)]"
        aria-labelledby="general-info-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-3xl text-[var(--color-primary-action)]"
            />
            <h2
              id="general-info-heading"
              className="text-3xl font-bold text-[var(--color-secondary-accent)]">
              General Information
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Hospital Affiliations */}
              <article aria-labelledby="affiliations-heading">
                <h3
                  id="affiliations-heading"
                  className="flex items-center text-xl font-bold text-[var(--color-text-primary)] mb-4">
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="text-[var(--color-secondary-accent)] mr-3 w-6"
                  />
                  Hospital Affiliations
                </h3>
                <p className="text-[var(--color-text-muted)] mb-3">
                  We are proud to be affiliated with the following hospitals for newborn visits and
                  care:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text-primary)] ml-2">
                  <li>Women and Children&apos;s Hospital of Buffalo</li>
                  <li>Millard Fillmore Suburban Hospital</li>
                  <li>Sisters of Charity Hospital</li>
                </ul>
              </article>

              {/* Routine Schedule */}
              <article
                aria-labelledby="schedule-heading"
                className="bg-[var(--color-background-alt)] p-6 rounded-2xl border border-gray-100">
                <h3
                  id="schedule-heading"
                  className="flex items-center text-xl font-bold text-[var(--color-secondary-accent)] mb-4">
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-3 w-6" />
                  Routine Checkup Schedule
                </h3>
                <p className="text-sm text-[var(--color-text-primary)] mb-4 leading-relaxed">
                  The American Academy of Pediatrics recommends routine well-child exams to promote
                  physical, mental, and social health. We will see your child at the following ages:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-medium text-[var(--color-text-primary)]">
                  <ul className="space-y-2">
                    <li>• At birth (hospital)</li>
                    <li>• 2 weeks</li>
                    <li>• 1 month</li>
                    <li>• 2 months</li>
                    <li>• 4 months</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• 6 months</li>
                    <li>• 9 months</li>
                    <li>• 12 months</li>
                    <li>• 15 months</li>
                    <li>• 18 months</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• 24 months (2 years)</li>
                    <li>• 30 months</li>
                    <li>• 36 months (3 years)</li>
                    <li>• Yearly thereafter</li>
                  </ul>
                </div>
              </article>
            </div>

            {/* Right Column: Administrative */}
            <div className="space-y-10">
              {/* Forms */}
              <article aria-labelledby="forms-heading">
                <h3
                  id="forms-heading"
                  className="flex items-center text-xl font-bold text-[var(--color-text-primary)] mb-4">
                  <FontAwesomeIcon
                    icon={faFileMedical}
                    className="text-[var(--color-secondary-accent)] mr-3 w-6"
                  />
                  Physical Forms & Records
                </h3>
                <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                  <p>
                    You will be provided a completed physical exam form and vaccine record for your
                    child at every check-up. This form may be used for 12 months for sports, school,
                    and all related activities. You are encouraged to keep a copy of it at home for
                    these purposes. If you require additional forms, please request these forms
                    through your patient portal.
                  </p>
                  <p className="pt-2 border-t border-gray-200">
                    <strong>Need records?</strong>{' '}
                    <a
                      href="/forms/release-form.pdf"
                      target="_blank"
                      className="text-[var(--color-primary-action)] font-semibold hover:underline">
                      Click here to download our Release of Medical Information Form.
                    </a>
                  </p>
                </div>
              </article>

              {/* Policies */}
              <article aria-labelledby="policies-heading" className="space-y-6">
                <h3 id="policies-heading" className="sr-only">
                  Office Policies
                </h3>

                <div>
                  <h4 className="flex items-center text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    <FontAwesomeIcon
                      icon={faPrescriptionBottleMedical}
                      className="text-[var(--color-secondary-accent)] mr-3 w-6"
                    />
                    Prescription Refills
                  </h4>
                  <p className="text-[var(--color-text-muted)] ml-9">
                    Please call us with refill requests. Allow several days for non-urgent
                    medication requests.
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center text-lg font-bold text-red-700 mb-2">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="mr-3 w-6" />
                    Missed Appointments
                  </h4>
                  <p className="text-[var(--color-text-muted)] ml-9">
                    You will be charged <strong>$25</strong> per missed appointment or cancellation
                    made less than 24 hours before the scheduled time.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: RESOURCES --- */}
      <section
        id="resources"
        className="py-16 sm:py-24 bg-[var(--color-background-alt)] scroll-mt-16"
        aria-labelledby="resources-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <FontAwesomeIcon
              icon={faBookMedical}
              className="text-3xl text-[var(--color-primary-action)]"
            />
            <h2
              id="resources-heading"
              className="text-3xl font-bold text-[var(--color-secondary-accent)]">
              Resources
            </h2>
          </div>

          {/* Trusted Source Highlight */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[var(--color-secondary-accent)] mb-16">
            <h3 className="text-2xl font-bold text-[var(--color-secondary-accent)] mb-4">
              HealthyChildren.org
            </h3>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
              HealthyChildren.org is the only parenting Web site backed by 60,000 pediatricians
              committed to the attainment of optimal physical, mental, and social health and
              well-being for all infants, children, adolescents, and young adults. From car seat
              safety to teen nutrition and a symptom checker, you&apos;ll find easy to understand
              information.
            </p>
            <a
              href="https://www.healthychildren.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-secondary-accent)] text-white font-bold hover:bg-[#005f91] transition-colors">
              Visit HealthyChildren.org
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Dosing Guidelines
            </h3>
            <p className="text-[var(--color-text-muted)] max-w-3xl">
              Always consult the package for dosing or call our office with any questions.
            </p>
          </div>

          <div className="space-y-16">
            {/* Acetaminophen Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 bg-blue-50/50 border-b border-blue-100">
                <h3 className="text-2xl font-bold text-[var(--color-secondary-accent)] mb-2">
                  Acetaminophen (Tyleno&#0174;)
                </h3>
                <p className="text-[var(--color-text-muted)] mb-4">
                  Dosages may be repeated every four hours, but should not be given more than five
                  times in twenty-four hours.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 text-sm uppercase tracking-wider text-[var(--color-text-muted)] border-b border-gray-200">
                      <th scope="col" className="p-4 font-semibold">
                        Age
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Weight
                      </th>
                      <th scope="col" className="p-4 font-semibold bg-blue-50/30">
                        Infant Drops
                        <br />
                        <span className="normal-case text-xs">(80 mg/0.8 mL)</span>
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Children&apos;s Elixir
                        <br />
                        <span className="normal-case text-xs">(160 mg/5 mL)</span>
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Chewables
                        <br />
                        <span className="normal-case text-xs">(80 mg tabs)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[var(--color-text-primary)]">
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        0-5 mos
                      </th>
                      <td className="p-4">6-11 lbs</td>
                      <td className="p-4 bg-blue-50/30 font-medium">0.4 mL</td>
                      <td className="p-4 text-[var(--color-text-muted)]">-</td>
                      <td className="p-4 text-[var(--color-text-muted)]">-</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        6-11 mos
                      </th>
                      <td className="p-4">12-17 lbs</td>
                      <td className="p-4 bg-blue-50/30 font-medium">0.8 mL</td>
                      <td className="p-4">1/2 tsp</td>
                      <td className="p-4 text-[var(--color-text-muted)]">-</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        1-2 yrs
                      </th>
                      <td className="p-4">18-23 lbs</td>
                      <td className="p-4 bg-blue-50/30 font-medium">1.2 mL</td>
                      <td className="p-4">3/4 tsp</td>
                      <td className="p-4">1 1/2 tabs</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        2-3 yrs
                      </th>
                      <td className="p-4">24-35 lbs</td>
                      <td className="p-4 bg-blue-50/30 font-medium">1.6 mL</td>
                      <td className="p-4">1 tsp</td>
                      <td className="p-4">2 tabs</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        4-5 yrs
                      </th>
                      <td className="p-4">36-47 lbs</td>
                      <td className="p-4 bg-blue-50/30 font-medium">2.4 mL</td>
                      <td className="p-4">1 1/2 tsp</td>
                      <td className="p-4">3 tabs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-xs text-[var(--color-text-muted)]">
                * Dosing should be based on current weight. Age is provided as a convenience only.{' '}
                <br />† 5 mL equals 1 teaspoon (tsp).
              </div>
            </div>

            {/* Ibuprofen Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 bg-orange-50/50 border-b border-orange-100">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  Ibuprofen (Motrin&#0174; / Advil&#0174;)
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Dosages may be repeated every 6-8 hours, but not more than 4 times in 24 hours.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 text-sm uppercase tracking-wider text-[var(--color-text-muted)] border-b border-gray-200">
                      <th scope="col" className="p-4 font-semibold">
                        Age
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Weight
                      </th>
                      <th scope="col" className="p-4 font-semibold bg-orange-50/30">
                        Infant Drops
                        <br />
                        <span className="normal-case text-xs">(50 mg/1.25 mL)</span>
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Children&apos;s Elixir
                        <br />
                        <span className="normal-case text-xs">(100 mg/5 mL)</span>
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Chewables
                        <br />
                        <span className="normal-case text-xs">(50 mg tabs)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[var(--color-text-primary)]">
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        6-11 mos
                      </th>
                      <td className="p-4">12-17 lbs</td>
                      <td className="p-4 bg-orange-50/30 font-medium">1.25 mL</td>
                      <td className="p-4 text-[var(--color-text-muted)]">-</td>
                      <td className="p-4 text-[var(--color-text-muted)]">-</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        1-2 yrs
                      </th>
                      <td className="p-4">18-23 lbs</td>
                      <td className="p-4 bg-orange-50/30 font-medium">1.875 mL</td>
                      <td className="p-4">3.75 mL</td>
                      <td className="p-4">1 tablet</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        2-3 yrs
                      </th>
                      <td className="p-4">24-35 lbs</td>
                      <td className="p-4 bg-orange-50/30 font-medium">2.5 mL</td>
                      <td className="p-4">5 mL (1 tsp)</td>
                      <td className="p-4">2 tablets</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-medium">
                        4-5 yrs
                      </th>
                      <td className="p-4">36-47 lbs</td>
                      <td className="p-4 bg-orange-50/30 text-[var(--color-text-muted)]">-</td>
                      <td className="p-4">7.5 mL (1 1/2 tsp)</td>
                      <td className="p-4">3 tablets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: VACCINE INFO --- */}
      <section
        id="vaccine-info"
        className="py-16 sm:py-24 bg-[var(--color-background-primary)]"
        aria-labelledby="vaccine-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-10">
            <FontAwesomeIcon
              icon={faShieldVirus}
              className="text-3xl text-[var(--color-primary-action)]"
            />
            <h2
              id="vaccine-heading"
              className="text-3xl font-bold text-[var(--color-secondary-accent)]">
              Vaccine Information
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-[var(--color-text-primary)]">
            <h3 className="text-xl font-bold text-[var(--color-secondary-accent)]">
              A Statement of Support
            </h3>
            <p>
              We, the physicians of Town and Village Pediatrics, unequivocally demonstrate our
              strongest support for the vaccination of our patients. This is one of the single most
              important steps you can take in giving your child the gift of good health. Limiting
              the risk of vaccine-preventable illness is imperative to the health and safety of your
              children.
            </p>
            <p>
              We are pleased that the large majority of our patients maintain an up-to-date
              vaccination history. We offer our strongest recommendation to our patients to adhere
              to the standard immunization schedule, as developed by the American Academy of
              Pediatrics and CDC.
            </p>

            <h3 className="text-xl font-bold text-[var(--color-secondary-accent)] mt-8">
              Clarification of Misinformation
            </h3>
            <p>
              It is the collective opinion of millions of scientists and physicians worldwide that
              vaccines are both safe and effective. Yet, recently there has been considerable public
              scrutiny and misinformation regarding childhood vaccines. This can be confusing and
              distressing to parents.
            </p>
            <p>
              We, the physicians of Town and Village Pediatrics, will recommend the vaccines that we
              know are important, safe, and effective for your child; advice that we will tailor
              specifically for your child and his/her medical history. We have heard nearly every
              rumor regarding immunization; please do not trust these stories blindly. You are
              always welcome to ask us about the scientific validity of such rumors.
            </p>

            {/* Crucial Policy Highlight Box */}
            <div className="my-10 p-6 bg-gray-50 border-l-8 border-[var(--color-primary-action)] rounded-r-xl">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-0">
                Our Approach to Vaccination Refusals
              </h3>
              <p>
                It is our belief that all children need a place to seek medical care, even those
                children in families that deviate from medical and societal norms. However, we also
                have a moral and professional obligation to protect our patients and communities,
                and to take a strong stand in support of immunization.
              </p>
              <p className="font-bold text-gray-900">
                As such, we are no longer accepting any new patients whose families are not
                intending to complete the standard childhood vaccination series.
              </p>
              <p>
                We will continue to care for all patients currently under our care, but please be
                aware that we will take every measure to advise you to resume the vaccine schedule
                we have recommended to you.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-secondary-accent)]">
              Our Appeal to Vaccine-Hesitant Parents
            </h3>
            <p>
              To us, as your physicians, this is not an abstract debate on social media but an
              essential component of your child&apos;s health. The risk of vaccine-preventable
              infection is in our own neighborhoods. For those current patients with a vaccine lag,
              it is never too late to resume your recommended vaccination schedule, and we will
              never stop advising you to give your children their share of one of the greatest
              successes of modern medicine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentsCorner;
