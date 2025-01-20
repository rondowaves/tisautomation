'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const stats = [
  {
    number: "15+",
    labelKey: "about.stats.years"
  },
  {
    number: "500+",
    labelKey: "about.stats.projects"
  },
  {
    number: "50+",
    labelKey: "about.stats.partners"
  }
];

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[700px] flex items-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/about.jpg"
          alt="TIS Automation Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-primary mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-gray-300 mb-8">
              {t('about.description')}
            </p>
            <Link
              href="/about"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              {t('about.cta')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
