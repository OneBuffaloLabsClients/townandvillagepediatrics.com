import Image from 'next/image';
import Link from 'next/link';
import { getHomePageData } from '@/lib/cms';

export const metadata = {
  title: 'Home | Town and Village Pediatrics',
  description:
    'Compassionate, comprehensive healthcare for children from infancy through adolescence in Williamsville, NY.',
};

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <div className="flex flex-col">
      {/* --- Hero Section --- */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-[var(--color-background-alt)] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-4xl font-extrabold tracking-tight text-[var(--color-secondary-accent)] sm:text-5xl md:text-6xl">
                Compassionate Care for Your Little Ones
              </h1>
              <p className="text-lg text-[var(--color-text-primary)] leading-relaxed max-w-xl">
                Welcome to Town & Village Pediatrics. We are dedicated to providing comprehensive,
                personalized healthcare for your children from birth through adolescence. Our team
                is here to partner with you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary-action)] px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-[#7a9136] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)] focus:ring-offset-2">
                  Schedule an Appointment
                </Link>
                <Link
                  href="/new-patients"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-bold text-[var(--color-secondary-accent)] shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50">
                  New Patient Info
                </Link>
              </div>
            </div>
            {/* Hero Image Placeholder */}
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-xl sm:h-80 md:h-[500px]">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-[var(--color-text-muted)]">
                {/* Replace with: <Image src="/path/to/physician-group-photo.jpg" alt="Town and Village Pediatrics Physicians" fill className="object-cover" priority /> */}
                <span className="text-center px-4">
                  <i className="fa-solid fa-user-doctor text-6xl mb-4 opacity-50"></i>
                  <br />
                  [New Picture of Physicians]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- News Section (Dynamic Text) --- */}
      <section aria-labelledby="news-heading" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2
            id="news-heading"
            className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-8">
            {data.news_title}
          </h2>
          {/* whitespace-pre-wrap preserves line breaks from the CMS textarea */}
          <div className="prose prose-lg mx-auto text-[var(--color-text-primary)] whitespace-pre-wrap">
            {data.news_content}
          </div>
        </div>
      </section>

      {/* --- About the Practice (PCMH) --- */}
      <section aria-labelledby="about-heading" className="py-16 bg-[var(--color-background-alt)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2
                id="about-heading"
                className="text-3xl font-bold text-[var(--color-secondary-accent)] mb-6">
                A Patient-Centered Medical Home
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-primary)] leading-relaxed">
                <p>
                  A Medical Home is not just a place; it is the way care is provided to children,
                  youth, and their families. It is the kind of care we all want and deserve.
                </p>
                <p>
                  Our goal is to have a <strong>trusting partnership</strong> between a child/youth,
                  their family, and the primary care pediatric team who oversees their health and
                  well-being.
                </p>
                <p className="font-medium">
                  In 2017, Town and Village Pediatrics LLC was recognized as a Patient-Centered
                  Medical Home by the National Committee for Quality Assurance.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              {/* NCQA Logo Placeholder - Replace with actual image */}
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-md p-8">
                <div className="text-center">
                  <i className="fa-solid fa-award text-6xl text-[var(--color-primary-action)] mb-4"></i>
                  <p className="text-sm font-bold text-[var(--color-secondary-accent)]">
                    NCQA RECOGNIZED PRACTICE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Expectant Parents Teaser --- */}
      <section
        aria-labelledby="expectant-heading"
        className="py-20 bg-[var(--color-secondary-accent)] text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <i className="fa-solid fa-baby text-[400px] absolute -top-20 -left-20"></i>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 id="expectant-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Expecting a New Addition?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Congratulations! Choosing a pediatrician is an important first step. We invite you to
            learn more about our practice and how we can support your growing family.
          </p>
          <Link
            href="/parents-corner"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[var(--color-secondary-accent)] shadow-lg transition-all hover:bg-gray-100 hover:scale-105">
            Visit Parents Corner
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
