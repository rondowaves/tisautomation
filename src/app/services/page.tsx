'use client';

import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const allServices = [
    {
      title: 'Automatisation Industrielle',
      description: 'Solutions complètes d\'automatisation pour optimiser vos processus industriels',
      image: '/images/services/automation.jpg',
      features: [
        'Programmation PLC',
        'Systèmes SCADA',
        'Contrôle de processus',
        'Integration IoT'
      ]
    },
    {
      title: 'Contrôle de Processus',
      description: 'Systèmes de contrôle avancés pour une gestion précise de vos processus',
      image: '/images/services/process-control.jpg',
      features: [
        'Contrôle de température',
        'Régulation de pression',
        'Contrôle de débit',
        'Monitoring en temps réel'
      ]
    },
    {
      title: 'Maintenance Industrielle',
      description: 'Services de maintenance préventive et corrective pour vos équipements',
      image: '/images/services/maintenance.jpg',
      features: [
        'Maintenance prédictive',
        'Réparation d\'urgence',
        'Inspection régulière',
        'Optimisation des performances'
      ]
    },
    {
      title: 'Intégration de Systèmes',
      description: 'Solutions d\'intégration complètes pour vos systèmes industriels',
      image: '/images/services/integration.jpeg',
      features: [
        'Intégration de systèmes',
        'Communication industrielle',
        'Réseaux industriels',
        'Solutions sur mesure'
      ]
    },
    {
      title: 'Vente d\'Équipements',
      description: 'Fourniture d\'équipements industriels de haute qualité',
      image: '/images/services/sales.jpg',
      features: [
        'Équipements d\'automatisation',
        'Composants électriques',
        'Pièces de rechange',
        'Conseil technique'
      ]
    },
    {
      title: 'Support Technique',
      description: 'Support technique et formation pour vos équipes',
      image: '/images/services/Support.webp',
      features: [
        'Support 24/7',
        'Formation technique',
        'Assistance à distance',
        'Documentation technique'
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section avec image de fond d'automatisation */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services/automation.jpg"
            alt="Services Industriels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des solutions d'automatisation innovantes pour l'industrie moderne
          </p>
        </div>
      </section>

      {/* Services Grid avec background images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="group relative h-[500px] rounded-xl overflow-hidden"
              >
                {/* Background Image avec overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-primary/90 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500"></div>
                </div>

                {/* Contenu */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2 text-white/80">
                          <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300"
                    >
                      <span className="mr-2">En savoir plus</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action avec background de process-control */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/services/process-control.jpg"
            alt="Process Control"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une Solution Sur Mesure ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous accompagner dans votre projet d'automatisation
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 group hover:shadow-lg"
          >
            <span>Contactez-nous</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
