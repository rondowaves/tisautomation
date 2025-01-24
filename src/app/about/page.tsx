'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/automation-2.jpg"
            alt="TIS Automation"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary/80 to-primary/70" />
        </motion.div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              À Propos de Nous
            </h1>
            <div className="h-1 w-32 bg-white/30 mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            Expert en automatisation industrielle et solutions technologiques innovantes
          </motion.p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis notre création, TIS Automation s'est engagé à fournir des solutions d'automatisation 
                industrielle de pointe. Notre expertise et notre engagement envers l'excellence nous ont 
                permis de devenir un leader reconnu dans le secteur.
              </p>
            </motion.div>

            {/* Statistiques */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { number: "15+", label: "Années d'expérience" },
                { number: "500+", label: "Projets réalisés" },
                { number: "50+", label: "Partenaires de confiance" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Notre Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl mb-16"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre mission est d'accompagner les industries dans leur transformation technologique 
                en fournissant des solutions d'automatisation innovantes et sur mesure. Nous nous 
                engageons à optimiser les processus industriels tout en garantissant fiabilité, 
                sécurité et performance.
              </p>
            </motion.div>

            {/* Nos Valeurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Innovation",
                  description: "Nous restons à la pointe de la technologie pour offrir les meilleures solutions."
                },
                {
                  title: "Excellence",
                  description: "Nous visons l'excellence dans chaque projet et chaque interaction."
                },
                {
                  title: "Engagement",
                  description: "Nous nous engageons pleinement dans la réussite de nos clients."
                },
                {
                  title: "Expertise",
                  description: "Notre équipe possède une expertise approfondie dans l'automatisation industrielle."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Prêt à transformer votre industrie ?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="mr-2">Contactez-nous</span>
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

export default AboutPage;
