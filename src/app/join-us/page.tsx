'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import ApplicationForm from '@/components/forms/ApplicationForm';
import { motion } from 'framer-motion';

const JoinUsPage = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section avec Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero/automation-2.jpg"
            alt="Rejoignez notre équipe"
            fill
            className="object-cover transform scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-[#FFA500]/80" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              Rejoignez Notre Équipe
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Envoyez-nous votre candidature spontanée et faites partie de notre aventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation Continue</h3>
              <p className="text-gray-600">
                Rejoignez une équipe passionnée par l'innovation et les nouvelles technologies
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Développement Personnel</h3>
              <p className="text-gray-600">
                Nous investissons dans votre croissance professionnelle et personnelle
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Esprit d'Équipe</h3>
              <p className="text-gray-600">
                Travaillez dans un environnement collaboratif et bienveillant
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Formulaire */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Formulaire de Candidature
                </h2>
                <ApplicationForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default JoinUsPage;
