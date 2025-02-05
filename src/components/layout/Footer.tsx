'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary relative">
      {/* Overlay avec motif subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo et Description */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="TIS Automation Logo"
                width={180}
                height={72}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-200">
              Expert en automatisation industrielle et fourniture d'équipements
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-[#FFA500] font-semibold mb-6 text-lg">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'À propos', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Installation d\'Usines', path: '/services/installation-usines' },
                { name: 'Systèmes Intelligents', path: '/services/systemes-intelligents' },
                { name: 'Bureau d\'Études', path: '/services/bureau-etudes' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path}
                    className="text-gray-200 hover:text-[#40E0D0] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#40E0D0]/20 group-hover:bg-[#40E0D0] mr-2 transition-colors duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FFA500] font-semibold mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              {/* Adresse */}
              <div className="flex items-start space-x-3">
                <div className="bg-[#40E0D0]/10 p-2 rounded-lg mt-1">
                  <svg className="w-4 h-4 text-[#40E0D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-200 text-sm">
                  Maison blanche Bepanda<br />
                  24019 DOUALA-AKWA<br />
                  Immeuble MAGOUKA, Douala
                </p>
              </div>

              {/* Email */}
              <a 
                href="mailto:info@tisautomation.com"
                className="flex items-center space-x-3 group hover:bg-[#40E0D0]/5 p-2 rounded-lg transition-colors duration-300"
              >
                <div className="bg-[#40E0D0]/10 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-[#40E0D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-200 group-hover:text-[#40E0D0] transition-colors duration-300">
                  info@tisautomation.com
                </span>
              </a>

              {/* Téléphone */}
              <a 
                href="tel:+237655696304"
                className="flex items-center space-x-3 group hover:bg-[#40E0D0]/5 p-2 rounded-lg transition-colors duration-300"
              >
                <div className="bg-[#40E0D0]/10 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-[#40E0D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-200 group-hover:text-[#40E0D0] transition-colors duration-300">
                    (+237) 655 69 63 04
                  </span>
                  <span className="text-gray-400 text-sm">
                    Standard
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-[#FFA500] font-semibold mb-6 text-lg">Horaires d'ouverture</h3>
            <div className="space-y-3">
              {[
                { jour: 'Lun - Ven', heures: '8h00 - 18h00' },
                { jour: 'Sam', heures: '9h00 - 13h00' }
              ].map((horaire, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-[#40E0D0]/10 p-2 rounded-lg">
                    <svg className="w-4 h-4 text-[#40E0D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">{horaire.jour}</p>
                    <p className="text-gray-300 text-sm">{horaire.heures}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            {new Date().getFullYear()} TIS Automation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
