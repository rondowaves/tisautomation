'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

const slides = [
  {
    image: '/images/hero/automation-1.jpg',
    titleKey: 'hero.slide1.title',
    descriptionKey: 'hero.slide1.description'
  },
  {
    image: '/images/hero/automation-2.jpg',
    titleKey: 'hero.slide2.title',
    descriptionKey: 'hero.slide2.description'
  },
  {
    image: '/images/hero/automation-3.jpg',
    titleKey: 'hero.slide3.title',
    descriptionKey: 'hero.slide3.description'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
        >
          <Image
            src={slide.image}
            alt={t(slide.titleKey)}
            fill
            className="object-cover transform transition-transform duration-[2000ms]"
            priority={index === 0}
          />
          {/* Overlay sombre avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-6xl mx-auto">
              <div className={`transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  {t(slide.titleKey)}
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                  {t(slide.descriptionKey)}
                </p>
                <Link
                  href="/services"
                  className="group inline-flex items-center bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] relative overflow-hidden"
                >
                  <span className="relative z-10">En savoir plus</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <svg
                    className="w-5 h-5 ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="group p-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 pointer-events-auto"
          aria-label="Previous slide"
        >
          <svg 
            className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="group p-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 pointer-events-auto"
          aria-label="Next slide"
        >
          <svg 
            className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 relative ${
              index === currentSlide 
                ? 'w-8 bg-amber-400' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            } h-2 rounded-full overflow-hidden`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 animate-shimmer" />
            )}
          </button>
        ))}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
