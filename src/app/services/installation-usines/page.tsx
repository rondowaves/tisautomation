'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceSection from '@/components/services/ServiceSection';
import FeatureCard from '@/components/services/FeatureCard';

const InstallationUsinesPage = () => {
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
            src="/images/services/factory-installation.jpg"
            alt="Installation d'Usines"
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
            Installation d'Usines
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Solutions Clés en Main pour vos Installations Industrielles
          </motion.p>
        </div>
      </section>

      {/* Content Sections avec Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ServiceSection title="Conception et étude préalable">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Analyse des besoins"
                  description="Études détaillées de vos processus industriels pour concevoir une usine répondant parfaitement à vos exigences de production."
                  delay={0.2}
                />
                <FeatureCard
                  title="Ingénierie et planification"
                  description="Conception de plans d'implantation et de schémas techniques pour chaque aspect de l'usine (électrique, mécanique, automatisation)."
                  delay={0.4}
                />
                <FeatureCard
                  title="Études de faisabilité"
                  description="Évaluation de la viabilité du projet, analyse des coûts et du calendrier de réalisation."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Installation de vos équipements">
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Montage mécanique"
                  description="Installation de machines, équipements de production, lignes de convoyage et systèmes de manutention."
                  delay={0.2}
                />
                <FeatureCard
                  title="Installation électrique"
                  description="Mise en place de réseaux électriques, armoires de distribution, câblage et équipements de contrôle."
                  delay={0.4}
                />
                <FeatureCard
                  title="Automatisation"
                  description="Installation des systèmes automatisés, programmation des automates, mise en place des systèmes SCADA et HMI."
                  delay={0.6}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Mise en service et tests">
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Essais de fonctionnement"
                  description="Tests sur site pour valider le bon fonctionnement des équipements installés et optimisation des performances."
                  delay={0.2}
                />
                <FeatureCard
                  title="Formation du personnel"
                  description="Sessions de formation pour vos équipes afin d'assurer une prise en main efficace des installations."
                  delay={0.4}
                />
              </div>
            </ServiceSection>

            <ServiceSection title="Secteurs d'application">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FeatureCard
                  title="Industrie chimique"
                  description="Solutions adaptées aux exigences spécifiques de l'industrie chimique et pétrochimique."
                  delay={0.2}
                />
                <FeatureCard
                  title="Agro-industrie"
                  description="Installations optimisées pour les processus de transformation alimentaire."
                  delay={0.3}
                />
                <FeatureCard
                  title="Cimenteries et mines"
                  description="Équipements robustes pour les environnements industriels exigeants."
                  delay={0.4}
                />
                <FeatureCard
                  title="Énergies renouvelables"
                  description="Solutions innovantes pour les installations d'énergie verte."
                  delay={0.5}
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
                <span className="mr-2">Contactez-nous pour votre projet</span>
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

export default InstallationUsinesPage;
