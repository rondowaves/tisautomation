'use client';

import Image from 'next/image';

const AboutPage = () => {
  const stats = [
    { value: '15+', label: 'Années d\'expérience' },
    { value: '200+', label: 'Projets réalisés' },
    { value: '50+', label: 'Clients satisfaits' },
    { value: '24/7', label: 'Support client' },
  ];

  const team = [
    {
      name: 'Jean Dupont',
      role: 'Directeur Technique',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    },
    {
      name: 'Marie Martin',
      role: 'Ingénieure Automatisation',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    },
    {
      name: 'Pierre Dubois',
      role: 'Expert en Robotique',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Industrial Automation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Leader en automatisation industrielle au Cameroun, nous innovons pour l'avenir de l'industrie
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Depuis notre création, TIS Automation s'est engagée à fournir des solutions d'automatisation 
                innovantes qui transforment l'industrie camerounaise. Notre expertise technique, combinée 
                à notre connaissance approfondie du marché local, nous permet de proposer des solutions 
                sur mesure qui répondent aux besoins spécifiques de nos clients.
              </p>
              <p className="text-gray-600">
                Notre mission est de contribuer à la modernisation du secteur industriel en Afrique 
                en introduisant des technologies de pointe tout en formant la prochaine génération 
                de professionnels de l'automatisation.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Notre Histoire"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Transformer Votre Industrie ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment nos solutions d'automatisation peuvent optimiser vos opérations
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contactez-nous
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
