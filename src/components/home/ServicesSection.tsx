'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredServices = [
  {
    title: 'Automatisation Industrielle',
    description: 'Solutions complètes d\'automatisation pour optimiser vos processus industriels',
    image: '/images/services/automation.jpg',
    link: '/automation'
  },
  {
    title: 'Contrôle de Processus',
    description: 'Systèmes de contrôle avancés pour une gestion précise de vos processus',
    image: '/images/services/process-control.jpg',
    link: '/process-control'
  },
  {
    title: 'Maintenance Industrielle',
    description: 'Services de maintenance préventive et corrective pour vos équipements',
    image: '/images/services/maintenance.jpg',
    link: '/maintenance'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Nos Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Une gamme complète de services pour répondre à tous vos besoins en automatisation industrielle
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredServices.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-[400px]"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-primary/90 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 opacity-90">{service.description}</p>
                <Link 
                  href={`/services${service.link}`}
                  className="inline-flex items-center text-sm font-semibold hover:underline"
                >
                  En savoir plus
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2
          }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 group hover:shadow-lg"
          >
            <span>Découvrir tous nos services</span>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
