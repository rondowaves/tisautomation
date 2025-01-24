'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceSection from '@/components/services/ServiceSection';
import FeatureCard from '@/components/services/FeatureCard';

const SystemesIntelligentsPage = () => {
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
            src="/images/services/smart-systems.jpeg"
            alt="Systèmes Intelligents"
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
            Systèmes Intelligents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Solutions de pointe pour l'automatisation et la sécurité de vos installations
          </motion.p>
        </div>
      </section>

      {/* Content Sections avec Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ServiceSection title="Automatisation et contrôle avancé">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Systèmes SCADA et HMI"
                  description="Conception et mise en œuvre de solutions de supervision pour le suivi en temps réel et le contrôle centralisé de vos installations industrielles."
                  delay={0.2}
                />
                <FeatureCard
                  title="Automatisation des processus"
                  description="Intégration de solutions automatisées pour l'optimisation des chaînes de production et la gestion des flux industriels."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Gestion de l'énergie">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Smart Grids"
                  description="Mise en place de réseaux électriques intelligents pour une gestion optimale de la production et de la consommation d'énergie."
                  delay={0.2}
                />
                <FeatureCard
                  title="Solutions hybrides"
                  description="Intégration des énergies renouvelables avec des systèmes intelligents pour une gestion plus durable."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Contrôle d'accès et sécurité">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Systèmes de contrôle d'accès"
                  description="Installation de solutions de contrôle d'accès pour sécuriser vos sites industriels et protéger les zones sensibles."
                  delay={0.2}
                />
                <FeatureCard
                  title="Identification biométrique"
                  description="Implémentation de technologies avancées pour un contrôle d'accès fluide et sécurisé."
                  delay={0.4}
                />
                <FeatureCard
                  title="Suivi en temps réel"
                  description="Systèmes de gestion des accès en temps réel, avec enregistrement des données et alertes en cas d'anomalies."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Intelligence artificielle">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Optimisation des processus"
                  description="Utilisation de l'IA et du machine learning pour l'analyse des données et l'optimisation des opérations en temps réel."
                  delay={0.2}
                />
                <FeatureCard
                  title="Prise de décision autonome"
                  description="Développement de solutions intelligentes capables de prendre des décisions basées sur l'analyse de données complexes."
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
                <span className="mr-2">Demander une consultation</span>
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

export default SystemesIntelligentsPage;
