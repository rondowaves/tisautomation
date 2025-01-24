'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceSection from '@/components/services/ServiceSection';
import FeatureCard from '@/components/services/FeatureCard';

const MecaniqueGeneralePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section avec Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/services/mechanical.jpg"
            alt="Mécanique Générale"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </motion.div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Mécanique Générale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Solutions complètes en mécanique industrielle et maintenance
          </motion.p>
        </div>
      </section>

      {/* Content Sections avec Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ServiceSection title="Services de maintenance">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Maintenance préventive"
                  description="Programmes personnalisés de maintenance préventive pour optimiser la durée de vie de vos équipements."
                  delay={0.2}
                />
                <FeatureCard
                  title="Maintenance corrective"
                  description="Intervention rapide et efficace pour réparer les pannes et dysfonctionnements."
                  delay={0.4}
                />
                <FeatureCard
                  title="Maintenance prédictive"
                  description="Utilisation de technologies avancées pour anticiper les besoins de maintenance."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Fabrication et usinage">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Usinage de précision"
                  description="Fabrication de pièces sur mesure avec une précision maximale grâce à nos machines-outils de dernière génération."
                  delay={0.2}
                />
                <FeatureCard
                  title="Assemblage mécanique"
                  description="Montage et assemblage de sous-ensembles et d'équipements complets selon vos spécifications."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Services spécialisés">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Soudure industrielle"
                  description="Services de soudure qualifiés pour tous types de métaux et d'applications industrielles."
                  delay={0.2}
                />
                <FeatureCard
                  title="Réparation d'équipements"
                  description="Expertise en réparation de machines et d'équipements industriels de toutes marques."
                  delay={0.4}
                />
                <FeatureCard
                  title="Retrofit"
                  description="Modernisation et mise à niveau de machines existantes pour améliorer leurs performances."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Support technique">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Conseil technique"
                  description="Expertise et recommandations pour l'optimisation de vos équipements et processus mécaniques."
                  delay={0.2}
                />
                <FeatureCard
                  title="Formation technique"
                  description="Formation de vos équipes à l'utilisation et à la maintenance de base des équipements."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="mr-2">Discuter de vos besoins</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MecaniqueGeneralePage;
