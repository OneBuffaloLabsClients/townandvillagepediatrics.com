import Image from 'next/image';

export const metadata = {
  title: 'Our Team | Town and Village Pediatrics',
  description:
    'Meet the dedicated pediatricians at Town and Village Pediatrics in Williamsville, NY.',
};

const physicians = [
  {
    name: 'Dr. Lisa Samuels - M.D., F.A.A.P.',
    bio: "Raised in the Buffalo area, Dr. Samuels graduated from University at Buffalo and went on to pursue a masters degree in Biochemistry and ultimately her medical degree from UB. She trained in pediatrics as a Generalist Scholar at Oishei Children's Hospital where she was honored by induction to the Gold Humanism Honor Society. Dr. Samuels joined the Town & Pediatrics practice in 2024. In her free time, Dr. Samuels and her family enjoy nature and cooking together.",
    imageUrl: '/images/team/samuels.webp',
  },
  {
    name: 'Dr. Erin Watson, M.D., F.A.A.P.',
    bio: 'After growing up in nearby Bradford, Pennsylvania, Dr. Watson completed her undergraduate degree with a major in chemistry at Haverford College, where she became a Phi Beta Kappa member and was awarded the Howard Hughes Medical Institute Scholarship. She went on to medical school at the University of Pennsylvania in Philadelphia, where she was awarded the Marian Wettrick Scholarship. Dr. Watson then completed her pediatrics residency at Johns Hopkins Hospital in Baltimore, Maryland. She joined Town & Village Pediatrics in 2004. Dr. Watson and her husband reside in Williamsville with their sons.',
    imageUrl: '/images/team/watson.webp',
  },
  {
    name: 'Dr. Jennifer Trask, M.D., M.S., F.A.A.P.',
    bio: 'Born and raised in the Buffalo area, Dr. Trask graduated magna cum laude from SUNYAB where she went on to get her M.S. while doing research at Roswell Park Cancer Institute. She remained at SUNYAB for her M.D. degree and was awarded the Children’s Hospital Prize for Excellence in Understanding Disease in Children. She completed her residency at Buffalo Women and Children’s hospital, where she received the Resident Teaching Award in 2006 and was selected and served as Pediatric Chief Resident. Dr. Trask joined our practice in August 2006 and enjoys spending time with her family hiking, skiing and seeing live music.',
    imageUrl: '/images/team/trask.webp',
  },
  {
    name: 'Dr. Amos Moberg, M.D., F.A.A.P.',
    bio: 'Originating from Central New York, Dr. Moberg was drawn to Buffalo for his education. After graduating magna cum laude from the University at Buffalo and receiving his medical degree, he trained in pediatrics as a Generalist Scholar at The Women and Children’s Hospital of Buffalo. Along the way, Dr. Moberg has developed a particular interest in issues involving adolescent health and childhood nutrition and obesity. He is a member of several medical organizations and is currently involved in the American Academy of Pediatrics. He joined Town & Village Pediatrics in 2010 and dedicates his free time to his family and his community.',
    imageUrl: '/images/team/moberg.webp',
  },
];

export default function PhysiciansPage() {
  return (
    <div className="bg-[var(--color-background-alt)] min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[var(--color-secondary-accent)] sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mt-6 text-xl text-[var(--color-text-muted)] leading-relaxed">
            Our experienced pediatricians are dedicated to providing compassionate, high-quality
            care for your children. We are proud to be your partners in their health and
            development.
          </p>
        </div>

        {/* Physician List */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {physicians.map((physician, index) => (
            <section
              key={physician.name}
              aria-labelledby={`physician-${index}`}
              className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              {/* Image Container */}
              <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:h-72 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={physician.imageUrl}
                  alt={`Portrait of ${physician.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Text Content */}
              <div className="flex-grow space-y-4">
                <h2
                  id={`physician-${index}`}
                  className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {physician.name}
                </h2>
                {/* Decorative seperator */}
                <div className="w-12 h-1 bg-[var(--color-primary-action)] rounded-full opacity-80"></div>
                <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {physician.bio}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
