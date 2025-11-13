import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faLocationDot,
  faPhone,
  faFax,
  faClock,
  faUserNurse,
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Contact | Town and Village Pediatrics',
  description:
    'Contact Town and Village Pediatrics in Williamsville, NY. Find our office address, phone number, and hours. We look forward to hearing from you.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background-alt)]">
      {/* Page Header */}
      <section className="bg-[var(--color-secondary-accent)] py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg opacity-90">
          We&apos;re here to help. Reach out to us with any questions.
        </p>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Centered content container */}
        <div className="max-w-4xl mx-auto">
          {/* --- Contact Information & Hours --- */}
          <div className="space-y-12">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-2xl font-bold text-[var(--color-secondary-accent)] mb-6 flex items-center">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-3 fa-fw" aria-hidden="true" />
                Contact Information
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-[var(--color-text-primary)]">
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[var(--color-primary-action)] mt-1 mr-4 text-xl fa-fw"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block text-lg mb-1">Address</strong>
                    <p>
                      6044 Main Street, Suite 100
                      <br />
                      Williamsville, NY 14221
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[var(--color-primary-action)] mt-1 mr-4 text-xl fa-fw"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block text-lg mb-1">Phone</strong>
                    <a
                      href="tel:7166336988"
                      className="hover:text-[var(--color-secondary-accent)] transition-colors text-lg">
                      (716) 633-6988
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faFax}
                    className="text-[var(--color-primary-action)] mt-1 mr-4 text-xl fa-fw"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block text-lg mb-1">Fax</strong>
                    <p className="text-lg">(716) 631-8690</p>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="hours-heading">
              <h2
                id="hours-heading"
                className="text-2xl font-bold text-[var(--color-secondary-accent)] mb-6 flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-3 fa-fw" aria-hidden="true" />
                Office Hours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Winter Hours */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[var(--color-primary-action)] mb-4 uppercase tracking-wider">
                    Winter Hours
                  </h3>
                  <ul className="space-y-2 text-[var(--color-text-primary)]">
                    <li className="flex justify-between">
                      <span className="font-medium">Mon - Fri:</span> 9:00 AM - 5:00 PM
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday:</span> 8:30 AM - 12:00 PM
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-[var(--color-text-muted)] bg-gray-50 p-2 rounded">
                    <FontAwesomeIcon icon={faUserNurse} className="mr-2 fa-fw" aria-hidden="true" />
                    Nurse call-in starts at 7:30 AM (M-F)
                  </p>
                </div>
                {/* Summer Hours */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[var(--color-secondary-accent)] mb-4 uppercase tracking-wider">
                    Summer Hours
                  </h3>
                  <ul className="space-y-2 text-[var(--color-text-primary)]">
                    <li className="flex justify-between">
                      <span className="font-medium">Mon - Fri:</span> 8:00 AM - 4:00 PM
                    </li>
                    <li className="flex justify-between text-[var(--color-text-muted)]">
                      <span className="font-medium">Saturday:</span> Closed
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* --- Interactive Map --- */}
      <section aria-label="Office Location Map" className="h-96 w-full bg-gray-200">
        <iframe
          title="Town and Village Pediatrics Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.766248764093!2d-78.7295239234675!3d42.96222697114325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3736255555555%3A0x9c9c9c9c9c9c9c9c!2s6044%20Main%20St%20%23100%2C%20Williamsville%2C%20NY%2014221!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}
