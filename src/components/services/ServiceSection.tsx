'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

const ServiceSection = ({ title, children, className = '', animate = true }: ServiceSectionProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={variants}
      className={`mb-16 ${className}`}
    >
      <h2 className="text-3xl font-bold mb-8 text-primary relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
};

export default ServiceSection;
