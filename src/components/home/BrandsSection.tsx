'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const brands = [
  { name: 'ABB', logo: '/images/brands/ABB-brand1.png' },
  { name: 'Baumer', logo: '/images/brands/Baumer-brand.png' },
  { name: 'Haulotte', logo: '/images/brands/LOGO_HAULOTTE_.png' },
  { name: 'Omron', logo: '/images/brands/Omron-Logo-brands.png' },
  { name: 'Pepperl+Fuchs', logo: '/images/brands/Pepperl+Fuchs-logo-brands.jpg' },
  { name: 'Siemens', logo: '/images/brands/Siemens-logo-brands.jpg' },
  { name: 'Schneider Electric', logo: '/images/brands/schneider-logo-brands.jpg' },
  { name: 'Semikron', logo: '/images/brands/semikron.jpg' }
];

const BrandsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        element.classList.add('animate-fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Partenaires
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes marques de l'industrie pour vous offrir des solutions d'excellence
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-0 translate-y-8 transition-all duration-1000"
        >
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/brands/${generateSlug(brand.name)}`}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-32 overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
