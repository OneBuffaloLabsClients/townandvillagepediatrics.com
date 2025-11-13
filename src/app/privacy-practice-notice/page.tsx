import React from 'react';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

// SEO Metadata for the Privacy Practice Notice page
export const metadata: Metadata = {
  title: 'Notice of Privacy Practices (HIPAA) | Town and Village Pediatrics',
  description:
    'Our official Notice of Privacy Practices as required by HIPAA. Learn how your health information may be used and disclosed.',
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPracticeNoticePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* --- Page Header Section --- */}
      <section
        className="bg-[var(--color-background-alt)] py-16 md:py-20"
        aria-labelledby="notice-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          {/* Decorative Icon */}
          <FontAwesomeIcon
            icon={faFileContract}
            className="mb-4 text-6xl text-[var(--color-primary-action)] opacity-80"
            aria-hidden="true"
          />
          <h1
            id="notice-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary-accent)]">
            Privacy Practice Notice
          </h1>
          <p className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Town and Village Pediatrics, LLC
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
            Notice of Privacy Practices
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section
        className="py-16 md:py-24 bg-[var(--color-background-primary)]"
        aria-label="Privacy Practice Details">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Constrain text width for readability */}
          <div
            className="prose prose-lg max-w-3xl mx-auto text-[var(--color-text-primary)]
                       prose-headings:font-bold prose-headings:text-[var(--color-secondary-accent)]
                       prose-h2:text-3xl prose-h2:mt-16 prose-h2:border-t prose-h2:border-gray-200 prose-h2:pt-12
                       prose-h3:text-xl prose-h3:font-semibold prose-h3:text-[var(--color-text-primary)]
                       prose-ul:list-disc prose-ul:ml-6
                       prose-ol:list-decimal prose-ol:ml-6
                       prose-p:leading-relaxed
                       prose-strong:text-[var(--color-text-primary)]">
            <p className="text-center text-sm font-medium text-[var(--color-text-muted)]">
              As Required by the Privacy Regulations Created as a Result of the Health Insurance
              Portability and Accountability Act of 1996 (HIPAA)
            </p>
            <p className="text-center font-bold text-lg text-[var(--color-text-primary)]">
              THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU (AS A PATIENT OF THIS PRACTICE
              ) MAY BE USED AND DISCLOSED, AND HOW YOU CAN GET ACCESS TO YOUR INDIVIDUALLY
              IDENTIFIABLE HEALTH INFORMATION.
            </p>
            <p className="text-center font-bold text-[var(--color-secondary-accent)]">
              PLEASE REVIEW THIS NOTICE CAREFULLY.
            </p>

            {/* --- Section A --- */}
            <h2>A. OUR COMMITMENT TO YOUR PRIVACY</h2>
            <p>
              Our practice is dedicated to maintaining the privacy of your individually identifiable
              health information (IIHI). In conducting our business, we will create records
              regarding you and the treatment and services we provide to you. We are required by law
              to maintain the confidentiality of health information that identifies you. We also are
              required by law to provide you with this notice of our legal duties and the privacy
              practices that we maintain in our practice concerning your IIHI. By federal and state
              law, we must follow the terms of the notice of privacy practices that we have in
              effect at the time.
            </p>
            <p>
              We realize that these laws are complicated, but we must provide you with the following
              important information:
            </p>
            <ul>
              <li>How we may use and disclose your IIHI</li>
              <li>Your privacy rights in your IIHI</li>
              <li>Our obligations concerning the use and disclosure of your IIHI</li>
            </ul>
            <p>
              The terms of this notice apply to all records containing your IIHI that are created or
              retained by our practice. We reserve the right to revise or amend this Notice of
              Privacy Practices. Any revision or amendment to this notice will be effective for all
              of your records that our practice has created or maintained in the past, and for any
              of your records that we may create or maintain in the future. Our practice will post a
              copy of our current Notice in our offices in a visible location at all times, and you
              may request a copy of our most current Notice at any time.
            </p>

            {/* --- Section B --- */}
            <h2>B. IF YOU HAVE QUESTIONS ABOUT THIS NOTICE, PLEASE CONTACT:</h2>
            <address className="not-italic bg-[var(--color-background-alt)] p-6 rounded-lg border border-gray-200">
              <strong className="block text-lg text-[var(--color-text-primary)]">
                Erin Watson, MD or Charlene Cleary
              </strong>
              <br />
              Town and Village Pediatrics, LLC
              <br />
              6044 Main Street. Suite 100
              <br />
              Williamsville, NY 14221
              <br />
              <a
                href="tel:7166336988"
                className="text-[var(--color-primary-action)] font-semibold hover:underline">
                (716) 633-6988
              </a>
            </address>

            {/* --- Section C --- */}
            <h2>
              C. WE MAY USE AND DISCLOSE YOUR INDIVIDUALLY IDENTIFIABLE HEALTH INFORMATION (IIHI) IN
              THE FOLLOWING WAYS
            </h2>
            <p>
              The following categories describe the different ways in which we may use and disclose
              your IIHI.
            </p>
            <ol className="space-y-4">
              <li>
                <strong>Treatment.</strong> Our practice may use your IIHI to treat you. For
                example, we may ask you to have laboratory tests (such as blood or urine tests), and
                we may use the results to help us reach a diagnosis. We might use your IIHI in order
                to write a prescription for you, or we might disclose your IIHI to a pharmacy when
                we order a prescription for you. Many of the people who work for our practice –
                including, but not limited to, our doctors and nurses – may use or disclose your
                IIHI in order to treat you or to assist others in your treatment. Additionally, we
                may disclose your IIHI to others who may assist in your care, such as your spouse,
                children or parents. Finally, we may also disclose your IIHI to other health care
                providers for purposes related to your treatment.
              </li>
              <li>
                <strong>Payment.</strong> Our practice may use and disclose your IIHI in order to
                bill and collect payment for the services and items you may receive from us. For
                example, we may contact your health insurer to certify that you are eligible for
                benefits (and for what range of benefits), and we may provide your insurer with
                details regarding your treatment to determine if your insurer will cover, or pay
                for, your treatment. We also may use and disclose your IIHI to obtain payment from
                third parties that may be responsible for such costs, such as family members. Also,
                we may use your IIHI to bill you directly for services and items. We may disclose
                your IIHI to other health care providers and entities to assist in their billing and
                collection efforts.
              </li>
              <li>
                <strong>Health Care Operations.</strong> Our practice may use and disclose your IIHI
                to operate our business. As examples of the ways in which we may use and disclose
                your information for our operations, our practice may use your IIHI to evaluate the
                quality of care you received from us, or to conduct cost-management and business
                planning activities for our practice. We may disclose your IIHI to other health care
                providers and entities to assist in their health care operations.
              </li>
              <li>
                <strong>Appointment Reminders.</strong> Our practice may use and disclose your IIHI
                to contact you and remind you of an appointment.
              </li>
              <li>
                <strong>Treatment Options.</strong> Our practice may use and disclose your IIHI to
                inform you of potential treatment options or alternatives.
              </li>
              <li>
                <strong>Health-Related Benefits and Services.</strong> Our practice may use and
                disclose your IIHI to inform you of health-related benefits or services that may be
                of interest to you.
              </li>
              <li>
                <strong>Release of Information to Family/Friends.</strong> Our practice may release
                your IIHI to a friend or family member that is involved in your care, or who assists
                in taking care of you. For example, a parent or guardian may ask that a babysitter
                take their child to the pediatrician’s office for treatment of a cold. In this
                example, the babysitter may have access to this child’s medical information.
              </li>
              <li>
                <strong>Disclosures Required By Law.</strong> Our practice will use and disclose
                your IIHI when we are required to do so by federal, state or local law.
              </li>
            </ol>

            {/* --- Section D --- */}
            <h2>D. USE AND DISCLOSURE OF YOUR IIHI IN CERTAIN SPECIAL CIRCUMSTANCES</h2>
            <p>
              The following categories describe unique scenarios in which we may use or disclose
              your identifiable health information:
            </p>
            <ol className="space-y-4">
              <li>
                <strong>Public Health Risks.</strong> Our practice may disclose your IIHI to public
                health authorities that are authorized by law to collect information for the purpose
                of:
                <ul>
                  <li>maintaining vital records, such as births and deaths</li>
                  <li>reporting child abuse or neglect</li>
                  <li>preventing or controlling disease, injury or disability</li>
                  <li>notifying a person regarding potential exposure to a communicable disease</li>
                  <li>
                    notifying a person regarding a potential risk for spreading or contracting a
                    disease or condition
                  </li>
                  <li>reporting reactions to drugs or problems with products or devices</li>
                  <li>
                    notifying individuals if a product or device they may be using has been recalled
                  </li>
                  <li>
                    notifying appropriate government agency(ies) and authority(ies) regarding the
                    potential abuse or neglect of an adult patient (including domestic violence);
                    however, we will only disclose this information if the patient agrees or we are
                    required or authorized by law to disclose this information
                  </li>
                  <li>
                    notifying your employer under limited circumstances related primarily to
                    workplace injury or illness or medical surveillance.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Health Oversight Activities.</strong> Our practice may disclose your IIHI to
                a health oversight agency for activities authorized by law. Oversight activities can
                include, for example, investigations, inspections, audits, surveys, licensure and
                disciplinary actions; civil, administrative, and criminal procedures or actions; or
                other activities necessary for the government to monitor government programs,
                compliance with civil rights laws and the health care system in general.
              </li>
              <li>
                <strong>Lawsuits and Similar Proceedings.</strong> Our practice may use and disclose
                your IIHI in response to a court or administrative order, if you are involved in a
                lawsuit or similar proceeding. We also may disclose your IIHI in response to a
                discovery request, subpoena, or other lawful process by another party involved in
                the dispute, but only if we have made an effort to inform you of the request or to
                obtain an order protecting the information the party has requested.
              </li>
              <li>
                <strong>Law Enforcement.</strong> We may release IIHI if asked to do so by a law
                enforcement official:
                <ul>
                  <li>
                    Regarding a crime victim in certain situations, if we are unable to obtain the
                    person’s agreement
                  </li>
                  <li>Concerning a death we believe has resulted from criminal conduct</li>
                  <li>Regarding criminal conduct at our offices</li>
                  <li>
                    In response to a warrant, summons, court order, subpoena or similar legal
                    process
                  </li>
                  <li>
                    To identify/locate a suspect, material witness, fugitive or missing person
                  </li>
                  <li>
                    In an emergency, to report a crime (including the location or victim(s) of the
                    crime, or the description, identity or location of the perpetrator)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Serious Threats to Health or Safety.</strong> Our practice may use and
                disclose your IIHI when necessary to reduce or prevent a serious threat to your
                health and safety or the health and safety of another individual or the public.
                Under these circumstances, we will only make disclosures to a person or organization
                able to help prevent the threat.
              </li>
              <li>
                <strong>Military.</strong> Our practice may disclose your IIHI if you are a member
                of U.S. or foreign military forces (including veterans) and if required by the
                appropriate authorities.
              </li>
              <li>
                <strong>Workers’ Compensation.</strong> Our practice may release your IIHI for
                workers’ compensation and similar programs.
              </li>
            </ol>

            {/* --- Section E --- */}
            <h2>E. YOUR RIGHTS REGARDING YOUR IIHI</h2>
            <p>You have the following rights regarding the IIHI that we maintain about you:</p>
            <ol className="space-y-4">
              <li>
                <strong>Confidential Communications.</strong> You have the right to request that our
                practice communicate with you about your health and related issues in a particular
                manner or at a certain location. For instance, you may ask that we contact you at
                home, rather than work. In order to request a type of confidential communication,
                you must make a written request to Charlene Cleary (633-6988) specifying the
                requested method of contact, or the location where you wish to be contacted. Our
                practice will accommodate reasonable requests. You do not need to give a reason for
                your request.
              </li>
              <li>
                <strong>Requesting Restrictions.</strong> You have the right to request a
                restriction in our use or disclosure of your IIHI for treatment, payment or health
                care operations. Additionally, you have the right to request that we restrict our
                disclosure of your IIHI to only certain individuals involved in your care or the
                payment for your care, such as family members and friends. We are not required to
                agree to your request; however, if we do agree, we are bound by our agreement except
                when otherwise required by law, in emergencies, or when the information is necessary
                to treat you. In order to request a restriction in our use or disclosure of your
                IIHI, you must make your request in writing to Charlene Cleary (633-6988). Your
                request must describe in a clear and concise fashion: (a) the information you wish
                restricted; (b) whether you are requesting to limit our practice’s use, disclosure
                or both; and (c) to whom you want the limits to apply.
              </li>
              <li>
                <strong>Inspection and Copies.</strong> You have the right to inspect and obtain a
                copy of the IIHI that may be used to make decisions about you, including patient
                medical records and billing records, but not including psychotherapy notes. You must
                submit your request in writing to Charlene Cleary (633-6988) in order to inspect
                and/or obtain a copy of your IIHI. Our practice may charge a fee for the costs of
                copying, mailing, labor and supplies associated with your request. Our practice may
                deny your request to inspect and/or copy in certain limited circumstances; however,
                you may request a review of our denial. Another licensed health care professional
                chosen by us will conduct reviews.
              </li>
              <li>
                <strong>Amendment.</strong> You may ask us to amend your health information if you
                believe it is incorrect or incomplete, and you may request an amendment for as long
                as the information is kept by or for our practice. To request an amendment, your
                request must be made in writing and submitted to Charlene Cleary (633-6988). You
                must provide us with a reason that supports your request for amendment. Our practice
                will deny your request if you fail to submit your request (and the reason supporting
                your request) in writing. Also, we may deny your request if you ask us to amend
                information that is in our opinion: (a) accurate and complete; (b) not part of the
                IIHI kept by or for the practice; (c) not part of the IIHI which you would be
                permitted to inspect and copy; or (d) not created by our practice, unless the
                individual or entity that created the information is not available to amend the
                information.
              </li>
              <li>
                <strong>Accounting of Disclosures.</strong> All of our patients have the right to
                request an “accounting of disclosures.” An “accounting of disclosures” is a list of
                certain non-routine disclosures our practice has made of your IIHI for
                non-treatment, non-payment or non-operations purposes. Use of your IIHI as part of
                the routine patient care in our practice is not required to be documented. For
                example, the doctor sharing information with the nurse; or the billing department
                using your information to file your insurance claim. In order to obtain an
                accounting of disclosures, you must submit your request in writing to Charlene
                Cleary (633-6988). All requests for an “accounting of disclosures” must state a time
                period, which may not be longer than six (6) years from the date of disclosure and
                may not include dates before April 14, 2003. The first list you request within a
                12-month period is free of charge, but our practice may charge you for additional
                lists within the same 12-month period. Our practice will notify you of the costs
                involved with additional requests, and you may withdraw your request before you
                incur any costs.
              </li>
              <li>
                <strong>Right to a Paper Copy of This Notice.</strong> You are entitled to receive a
                paper copy of our notice of privacy practices. You may ask us to give you a copy of
                this notice at any time. To obtain a paper copy of this notice, contact Charlene
                Cleary (633-6988).
              </li>
              <li>
                <strong>Right to File a Complaint.</strong> If you believe your privacy rights have
                been violated, you may file a complaint with our practice or with the Secretary of
                the Department of Health and Human Services. To file a complaint with our practice,
                contact Charlene Cleary (633-6988). All complaints must be submitted in writing. You
                will not be penalized for filing a complaint.
              </li>
              <li>
                <strong>Right to Provide an Authorization for Other Uses and Disclosures.</strong>
                Our practice will obtain your written authorization for uses and disclosures that
                are not identified by this notice or permitted by applicable law. Any authorization
                you provide to us regarding the use and disclosure of your IIHI may be revoked at
                any time in writing. After you revoke your authorization, we will no longer use or
                disclose your IIHI for the reasons described in the authorization. Please note, we
                are required to retain records of your care.
              </li>
            </ol>
            <p className="mt-8">
              Again, if you have any questions regarding this notice or our health information
              privacy policies, please contact Charlene Cleary (633-6988).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPracticeNoticePage;
