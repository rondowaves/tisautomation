'use client';

import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const allServices = [
    {
      title: 'Installation d\'Usines',
      description: 'Solutions clés en main pour l\'installation complète d\'usines industrielles',
      image: '/images/services/factory-installation.jpg',
      features: [
        'Conception et étude préalable',
        'Installation d\'équipements',
        'Mise en service et tests',
        'Maintenance post-installation'
      ],
      link: '/services/installation-usines'
    },
    {
      title: 'Systèmes Intelligents',
      description: 'Solutions de contrôle d\'accès et systèmes intelligents pour l\'industrie',
      image: '/images/services/smart-systems.jpeg',
      features: [
        'Automatisation avancée',
        'Gestion énergétique',
        'Maintenance prédictive',
        'Contrôle d\'accès'
      ],
      link: '/services/systemes-intelligents'
    },
    {
      title: 'Mécanique Générale',
      description: 'Expertise multisectorielle en mécanique industrielle',
      image: '/images/services/mechanical.jpg',
      features: [
        'Cimenteries',
        'Agro-industrie',
        'Industrie portuaire',
        'Mines et carrières'
      ],
      link: '/services/mecanique-generale'
    },
    {
      title: 'Énergie Industrielle',
      description: 'Solutions complètes pour la production et maintenance d\'énergie',
      image: '/images/services/energy.jpg',
      features: [
        'Groupes électrogènes',
        'Énergie solaire',
        'Maintenance 24/7',
        'Solutions hybrides'
      ],
      link: '/services/energie-industrielle'
    },
    {
      title: 'Électricité Industrielle',
      description: 'Excellence technique en solutions électriques industrielles',
      image: '/images/services/energy.jpg',
      features: [
        'Installation électrique',
        'Distribution électrique',
        'Maintenance préventive',
        'Mise en conformité'
      ],
      link: '/services/electricite-industrielle'
    },
    {
      title: 'Automatisme Industriel',
      description: 'Expertise avancée en automatisation industrielle',
      image: '/images/services/automation.jpg',
      features: [
        'Programmation API/PLC',
        'Systèmes SCADA',
        'Motion control',
        'Cyber-sécurité'
      ],
      link: '/services/automatisme-industriel'
    },
    {
      title: 'Bureau d\'Études',
      description: 'Solutions d\'ingénierie sur mesure pour vos projets industriels',
      image: '/images/services/engineering.png',
      features: [
        'Études techniques',
        'Ingénierie sur mesure',
        'Assistance projet',
        'Innovation industrielle'
      ],
      link: '/services/bureau-etudes'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/automation.jpg"
            alt="Services Industriels"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-primary/70 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Nos Services
            </h1>
            <div className="h-1 w-32 bg-white/30 mx-auto rounded-full" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Des solutions d'automatisation innovantes pour l'industrie moderne
            </p>
          </div>
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
                      href={service.link}
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
