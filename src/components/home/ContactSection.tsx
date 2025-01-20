'use client';

import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">Contactez-nous</h2>
          <p className="text-gray-600 text-lg mb-12">
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets d'automatisation industrielle.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Adresse */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-primary">Notre adresse</h3>
              </div>
              <p className="text-gray-600">
                Rond point 4e, avant marché sandaga,<br />
                IMMEUBLE VIOLET 2e etage porte 206<br />
                Douala - 23700 - Cameroun
              </p>
            </div>

            {/* Téléphone */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-primary">Téléphone</h3>
              </div>
              <p className="text-gray-600">(+237) 655 69 63 04 Standard</p>
            </div>

            {/* Heures d'ouverture */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-primary">Heures d'ouverture</h3>
              </div>
              <p className="text-gray-600">
                Lundi - Vendredi: 8h00 - 18h00<br />
                Samedi: 9h00 - 13h00
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Nous contacter
              <svg
                className="w-5 h-5 ml-2"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
