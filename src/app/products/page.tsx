'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiMail } from 'react-icons/fi';

interface Category {
  name: string;
  subcategories: string[];
}

interface Product {
  id: string;
  name: string;
  reference: string;
  image: string;
  inStock: boolean;
  description: string;
}

const categories: Category[] = [
  {
    name: 'ABB',
    subcategories: []
  },
  {
    name: 'Baumer',
    subcategories: []
  },
  {
    name: 'Burkert',
    subcategories: []
  },
  {
    name: 'SMC',
    subcategories: [
      'Air cylinders',
      'Air preparation equipment',
      'Directional control valves',
      'Electric linear actuators'
    ]
  },
  {
    name: 'Siemens',
    subcategories: []
  }
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'SMC TBR 4',
    reference: 'TBR-4',
    image: '/images/products/placeholder.jpg',
    inStock: true,
    description: 'Régulateur de pression pour air comprimé'
  },
  {
    id: '2',
    name: 'SMC AR40-F04 B',
    reference: 'AR40-F04B',
    image: '/images/products/placeholder.jpg',
    inStock: true,
    description: 'Régulateur avec filtre intégré'
  },
  {
    id: '3',
    name: 'SMC CQ2B20-20DM',
    reference: 'CQ2B20-20DM',
    image: '/images/products/placeholder.jpg',
    inStock: true,
    description: 'Vérin compact double effet'
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{id: string, quantity: number}[]>([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const addToQuote = (productId: string) => {
    const exists = cart.find(item => item.id === productId);
    if (exists) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section avec barre de recherche */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center mb-8">Catalogue de Produits</h1>
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Panier flottant */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Produits sélectionnés: {cart.length}</span>
            <button 
              onClick={() => setShowQuoteForm(true)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              Demander un devis
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Menu de catégories à gauche */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {categories.map((category) => (
                <div key={category.name}>
                  <button
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                      selectedCategory === category.name 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : ''
                    }`}
                  >
                    {category.name}
                  </button>
                  {selectedCategory === category.name && category.subcategories.length > 0 && (
                    <div className="bg-gray-50">
                      {category.subcategories.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setSelectedSubcategory(sub)}
                          className={`w-full text-left px-6 py-2 text-sm hover:bg-gray-100 transition-colors ${
                            selectedSubcategory === sub 
                              ? 'text-primary font-medium' 
                              : 'text-gray-600'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Grille de produits */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                    {product.inStock && (
                      <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        IN STOCK
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">Réf: {product.reference}</p>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => addToQuote(product.id)}
                        className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                      >
                        <FiMail className="w-4 h-4" />
                        Ajouter au devis
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal formulaire de devis */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Demande de devis</h2>
            <p className="text-gray-600 mb-6">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour les produits sélectionnés.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input type="tel" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none h-32"></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="px-6 py-2 rounded border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-primary text-white hover:bg-primary-dark transition-colors"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
