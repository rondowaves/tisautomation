'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceSection from '@/components/services/ServiceSection';
import FeatureCard from '@/components/services/FeatureCard';

const ElectriciteIndustriellePage = () => {
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
            src="/images/services/automation.jpg"
            alt="Électricité Industrielle"
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
            Électricité Industrielle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Solutions électriques complètes pour l'industrie moderne
          </motion.p>
        </div>
      </section>

      {/* Content Sections avec Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ServiceSection title="Installation électrique">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Câblage industriel"
                  description="Installation et maintenance de réseaux électriques industriels conformes aux normes de sécurité."
                  delay={0.2}
                />
                <FeatureCard
                  title="Armoires électriques"
                  description="Conception et installation d'armoires de distribution et de commande sur mesure."
                  delay={0.4}
                />
                <FeatureCard
                  title="Éclairage industriel"
                  description="Solutions d'éclairage LED économiques et performantes pour les environnements industriels."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Distribution électrique">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Postes MT/BT"
                  description="Installation et maintenance de postes de transformation moyenne tension/basse tension."
                  delay={0.2}
                />
                <FeatureCard
                  title="Compensation d'énergie"
                  description="Solutions pour l'optimisation du facteur de puissance et la réduction des coûts énergétiques."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Maintenance et sécurité">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Maintenance préventive"
                  description="Programmes de maintenance régulière pour prévenir les pannes et optimiser la durée de vie des installations."
                  delay={0.2}
                />
                <FeatureCard
                  title="Dépannage 24/7"
                  description="Service d'intervention rapide disponible 24h/24 et 7j/7 pour tous types de pannes électriques."
                  delay={0.4}
                />
                <FeatureCard
                  title="Mise aux normes"
                  description="Audit et mise en conformité de vos installations selon les dernières normes en vigueur."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Solutions innovantes">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Gestion intelligente"
                  description="Systèmes de gestion intelligente de l'énergie et supervision à distance."
                  delay={0.2}
                />
                <FeatureCard
                  title="Efficacité énergétique"
                  description="Solutions pour réduire votre consommation électrique et optimiser vos coûts."
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
                <span className="mr-2">Contactez nos experts</span>
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

export default ElectriciteIndustriellePage;
