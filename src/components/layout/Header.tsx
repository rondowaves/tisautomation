'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
    setLangMenuOpen(false);
  };

  const navigation = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/products', label: t('nav.products') },
    { href: '/join-us', label: t('nav.join') },
    { href: '/contact', label: t('nav.contact') }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? scrolled 
            ? 'bg-primary/90 backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
          : 'bg-primary shadow-lg'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="TIS Automation"
              width={150}
              height={40}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white hover:text-secondary text-sm tracking-wider font-medium transition-colors duration-300 relative group ${
                    isActive ? 'text-secondary' : ''
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/contact"
              className="bg-secondary hover:bg-accent text-primary hover:text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Callback</span>
            </Link>

            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 hover:bg-white/10 rounded-full px-3 py-1.5 transition-colors duration-300"
              >
                <Image
                  src={language === 'fr' ? '/images/fr-flag.svg' : '/images/en-flag.svg'}
                  alt={language.toUpperCase()}
                  width={24}
                  height={16}
                  className="rounded shadow-sm"
                />
                <span className="text-white text-sm font-medium">{language.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 text-white transition-transform duration-300 ${
                    langMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                  langMenuOpen
                    ? 'transform opacity-100 scale-100'
                    : 'transform opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Image
                      src={language === 'fr' ? '/images/en-flag.svg' : '/images/fr-flag.svg'}
                      alt={language === 'fr' ? 'EN' : 'FR'}
                      width={24}
                      height={16}
                      className="rounded shadow-sm"
                    />
                    <span>{language === 'fr' ? 'English' : 'Français'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Menu principal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-4 bg-primary/95 backdrop-blur-sm rounded-lg px-4 mb-4">
            {navigation.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-white hover:text-secondary transition-colors duration-300 ${
                    isActive ? 'text-secondary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-secondary text-primary hover:bg-accent hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 text-center flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Callback</span>
              </Link>

              {/* Mobile Language Selector */}
              <div className="mt-4 flex flex-col space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <Image
                    src={language === 'fr' ? '/images/en-flag.svg' : '/images/fr-flag.svg'}
                    alt={language === 'fr' ? 'EN' : 'FR'}
                    width={24}
                    height={16}
                    className="rounded shadow-sm"
                  />
                  <span>{language === 'fr' ? 'English' : 'Français'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
