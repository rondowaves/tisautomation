'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec fond marron */}
      <section className="relative bg-[#5C2C21] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg md:text-xl opacity-90">
              Notre équipe est là pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Section principale avec formulaire et carte */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Cartes d'information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Notre Adresse</h3>
                </div>
                <p className="text-gray-600">
                  Maison blanche Bepanda<br />
                  24019 DOUALA-AKWA<br />
                  Immeuble MAGOUKA, Douala
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <a href="mailto:info@tisautomation.com" className="text-gray-600 hover:text-primary">
                  info@tisautomation.com
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Téléphone</h3>
                </div>
                <a href="tel:+237655696304" className="text-gray-600 hover:text-primary">
                  (+237) 655 69 63 04
                </a>
                <p className="text-sm text-gray-500 mt-1">Standard</p>
              </div>
            </div>

            {/* Formulaire et Carte */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formulaire */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Nom complet"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Carte */}
              <div className="h-[500px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0325088554365!2d9.7141675!3d4.0220556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610de90a4d1acf%3A0x2b4e0b89d2e1784c!2sBepanda%2C%20Douala!5e0!3m2!1sfr!2scm!4v1705273418000!5m2!1sfr!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
