'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const brands = [
  {
    name: 'ABB',
    image: '/images/brands/ABB-brand1.png',
    slug: 'abb'
  },
  {
    name: 'Baumer',
    image: '/images/brands/Baumer-brand.png',
    slug: 'baumer'
  },
  {
    name: 'Haulotte',
    image: '/images/brands/LOGO_HAULOTTE_.png',
    slug: 'haulotte'
  },
  {
    name: 'Omron',
    image: '/images/brands/Omron-Logo-brands.png',
    slug: 'omron'
  },
  {
    name: 'Pepperl+Fuchs',
    image: '/images/brands/Pepperl+Fuchs-logo-brands.jpg',
    slug: 'pepperl-fuchs'
  },
  {
    name: 'Siemens',
    image: '/images/brands/Siemens-logo-brands.jpg',
    slug: 'siemens'
  },
  {
    name: 'Schneider Electric',
    image: '/images/brands/schneider-logo-brands.jpg',
    slug: 'schneider-electric'
  },
  {
    name: 'Semikron',
    image: '/images/brands/semikron.jpg',
    slug: 'semikron'
  }
];

const BrandsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#5C2C21] py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Marques Partenaires</h1>
            <p className="text-lg md:text-xl opacity-90">
              Découvrez notre sélection de marques leaders dans l'automatisation industrielle
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une marque..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-lg shadow-sm border-0 focus:ring-2 focus:ring-primary text-lg"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBrands.map((brand, index) => (
              <Link 
                href={`/brands/${brand.slug}`} 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] relative flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    width={200}
                    height={150}
                    className="object-contain max-h-full w-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandsPage;
