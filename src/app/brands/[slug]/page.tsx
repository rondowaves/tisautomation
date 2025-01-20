'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const brandData = {
  'abb': {
    name: 'ABB',
    image: '/images/brands/ABB-brand1.png',
    description: `ABB est un leader mondial dans les technologies de l'électrification et de l'automatisation.`,
    products: ['Robots industriels', 'Moteurs électriques', 'Variateurs de fréquence', 'Automates programmables']
  },
  'baumer': {
    name: 'Baumer',
    image: '/images/brands/Baumer-brand.png',
    description: 'Baumer est un leader dans le développement de capteurs et solutions de vision industrielle.',
    products: ['Capteurs', 'Encodeurs', 'Capteurs de vision', 'Instruments de mesure']
  },
  'haulotte': {
    name: 'Haulotte',
    image: '/images/brands/LOGO_HAULOTTE_.png',
    description: 'Haulotte est un fabricant leader d\'équipements d\'élévation et de manutention.',
    products: ['Nacelles élévatrices', 'Plateformes télescopiques', 'Chariots télescopiques', 'Équipements de maintenance']
  },
  'omron': {
    name: 'Omron',
    image: '/images/brands/Omron-Logo-brands.png',
    description: 'Omron est spécialisé dans l\'automatisation industrielle et les composants électroniques.',
    products: ['Automates', 'Capteurs', 'Systèmes de vision', 'Composants de sécurité']
  },
  'pepperl-fuchs': {
    name: 'Pepperl+Fuchs',
    image: '/images/brands/Pepperl+Fuchs-logo-brands.jpg',
    description: 'Pepperl+Fuchs est un leader mondial dans le développement de solutions d\'automatisation industrielle et de protection antidéflagrante.',
    products: ['Capteurs industriels', 'Solutions ATEX', 'Systèmes de positionnement', 'Interfaces de communication']
  },
  'siemens': {
    name: 'Siemens',
    image: '/images/brands/Siemens-logo-brands.jpg',
    description: 'Siemens est un géant mondial de l\'automatisation industrielle et des solutions numériques.',
    products: ['Automates programmables', 'Solutions IoT', 'Systèmes d\'entraînement', 'Solutions de contrôle']
  },
  'schneider-electric': {
    name: 'Schneider Electric',
    image: '/images/brands/schneider-logo-brands.jpg',
    description: 'Schneider Electric est un leader mondial de la transformation numérique de la gestion de l\'énergie et des automatismes.',
    products: ['Solutions d\'automatisation', 'Gestion de l\'énergie', 'Systèmes de contrôle', 'Solutions IoT']
  },
  'semikron': {
    name: 'Semikron',
    image: '/images/brands/semikron.jpg',
    description: 'Semikron est un leader dans le domaine des semiconducteurs de puissance et des systèmes d\'électronique de puissance.',
    products: ['Modules de puissance', 'Drivers', 'Systèmes de refroidissement', 'Solutions personnalisées']
  }
};

export default function BrandPage() {
  const { slug } = useParams();
  const brand = brandData[slug as keyof typeof brandData];

  if (!brand) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Marque non trouvée</h1>
            <p className="text-gray-600 mb-8">
              Désolé, la marque que vous recherchez n'est pas disponible.
            </p>
            <Link 
              href="/brands" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Retour aux marques
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#5C2C21] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-12">
              <div className="flex flex-col items-center">
                <div className="w-64 h-32 relative mb-8">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-center">{brand.name}</h1>
                <p className="text-lg text-center text-gray-600 max-w-2xl">
                  {brand.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Nos produits {brand.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brand.products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <p className="text-lg text-gray-800">{product}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Intéressé par les produits {brand.name} ?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contactez-nous
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
