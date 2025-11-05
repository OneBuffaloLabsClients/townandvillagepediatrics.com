'use client';

import { useState, FormEvent } from 'react';

// No metadata export here because this is a client component.
// You should add metadata in a separate layout.tsx or page.tsx server component if needed for SEO on this specific route.

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(event.currentTarget);
    // Web3Forms Access Key
    // TODO: Replace with your actual access key
    formData.append('access_key', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          message: 'Thank you! Your message has been sent. We will be in touch shortly.',
          type: 'success',
        });
        (event.target as HTMLFormElement).reset();
      } else {
        console.error('Form Error:', data);
        setFormStatus({
          message: 'Something went wrong. Please try again later or call us directly.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('Network Error:', error);
      setFormStatus({
        message: 'Network error. Please check your connection and try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background-alt)]">
      {/* Page Header */}
      <section className="bg-[var(--color-secondary-accent)] py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg opacity-90">
          We're here to help. Reach out to us with any questions.
        </p>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* --- Contact Information & Hours --- */}
          <div className="space-y-12">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-2xl font-bold text-[var(--color-secondary-accent)] mb-6 flex items-center">
                <i className="fa-solid fa-circle-info mr-3"></i>
                Contact Information
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-[var(--color-text-primary)]">
                <div className="flex items-start">
                  <i className="fa-solid fa-location-dot text-[var(--color-primary-action)] mt-1 mr-4 text-xl"></i>
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
                  <i className="fa-solid fa-phone text-[var(--color-primary-action)] mt-1 mr-4 text-xl"></i>
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
                  <i className="fa-solid fa-fax text-[var(--color-primary-action)] mt-1 mr-4 text-xl"></i>
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
                <i className="fa-solid fa-clock mr-3"></i>
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
                    <i className="fa-solid fa-user-nurse mr-2"></i>
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

          {/* --- Contact Form --- */}
          <section
            aria-labelledby="form-heading"
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary-action)]">
            <h2
              id="form-heading"
              className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-6">
              Send Us a Message
            </h2>
            <p className="mb-8 text-[var(--color-text-muted)]">
              For non-urgent inquiries, please fill out the form below. For medical emergencies,
              please call 911.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden Honeypot Field for Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
              />

              {formStatus && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    formStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                  {formStatus.type === 'success' ? (
                    <i className="fa-solid fa-circle-check mr-2"></i>
                  ) : (
                    <i className="fa-solid fa-circle-exclamation mr-2"></i>
                  )}
                  {formStatus.message}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-secondary-accent)] focus:border-transparent transition-all outline-none"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-secondary-accent)] focus:border-transparent transition-all outline-none"
                  placeholder="(716) 555-0123"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-secondary-accent)] focus:border-transparent transition-all outline-none resize-y"
                  placeholder="How can we help you?"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-primary-action)] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#7a9136] transition-all focus:outline-none focus:ring-4 focus:ring-[var(--color-primary-action)]/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fa-solid fa-paper-plane ml-2"></i>
                  </>
                )}
              </button>
              <p className="text-xs text-center text-[var(--color-text-muted)] mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </section>
        </div>
      </div>

      {/* --- Interactive Map --- */}
      <section aria-label="Office Location Map" className="h-96 w-full bg-gray-200">
        <iframe
          title="Town and Village Pediatrics Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6044%20Main%20Street,%20Suite%20100,%20Williamsville,%20NY%2014221+(Town%20and%20Village%20Pediatrics)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}
