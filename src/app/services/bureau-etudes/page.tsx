'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceSection from '@/components/services/ServiceSection';
import FeatureCard from '@/components/services/FeatureCard';

const BureauEtudesPage = () => {
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
            src="/images/services/engineering.png"
            alt="Bureau d'Études"
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
            Bureau d'Études
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            De la conception à la réalisation de vos projets industriels
          </motion.p>
        </div>
      </section>

      {/* Content Sections avec Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ServiceSection title="Études et conception">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Études de faisabilité"
                  description="Analyse approfondie de la viabilité technique et économique de vos projets industriels."
                  delay={0.2}
                />
                <FeatureCard
                  title="Conception 3D"
                  description="Modélisation et conception 3D détaillée de vos installations avec les derniers outils CAO."
                  delay={0.4}
                />
                <FeatureCard
                  title="Plans d'exécution"
                  description="Élaboration des plans détaillés et documents techniques nécessaires à la réalisation."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Ingénierie électrique">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Schémas électriques"
                  description="Conception de schémas électriques complets et détaillés selon les normes en vigueur."
                  delay={0.2}
                />
                <FeatureCard
                  title="Dimensionnement"
                  description="Calculs et dimensionnement des installations électriques et systèmes de protection."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Automatisation">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Programmation"
                  description="Développement de programmes automates et interfaces de supervision sur mesure."
                  delay={0.2}
                />
                <FeatureCard
                  title="Architecture contrôle"
                  description="Conception d'architectures de contrôle-commande adaptées à vos besoins."
                  delay={0.4}
                />
                <FeatureCard
                  title="Solutions IoT"
                  description="Intégration de solutions IoT pour la collecte et l'analyse des données."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Gestion de projet">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Suivi de projet"
                  description="Coordination et suivi complet de vos projets, de la conception à la mise en service."
                  delay={0.2}
                />
                <FeatureCard
                  title="Documentation"
                  description="Élaboration de la documentation technique complète et des manuels d'utilisation."
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
                <span className="mr-2">Démarrer votre projet</span>
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

export default BureauEtudesPage;
