import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import BrandsSection from '@/components/home/BrandsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <main>
      {/* 1. Slider principal */}
      <HeroSlider />
      
      {/* 2. Nos partenaires/marques */}
      <BrandsSection />
      
      {/* 3. Nos services */}
      <ServicesSection />
      
      {/* 4. À propos */}
      <AboutSection />
      
      {/* 5. Contact */}
      <ContactSection />
    </main>
  );
}
