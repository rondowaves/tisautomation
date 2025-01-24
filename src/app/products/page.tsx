'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, Mail, X, Box, Package2, 
         Cpu, Wrench, Zap, Cable, Settings, Shield } from 'lucide-react';
import { type Product, cleanedCategories } from '@/data/products';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getProductImageUrl } from '@/utils/image';

interface SubCategory {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<string[]>([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedSubCategory(null);
    }
  };

  const selectSubCategory = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
  };

  const addToQuote = (productId: string) => {
    if (!cart.includes(productId)) {
      setCart(prev => [...prev, productId]);
    }
  };

  // Obtenir tous les produits actifs
  const getAllProducts = () => {
    const products: Product[] = [];
    
    // Parcourir les catégories (ex: motorisation)
    Object.values(cleanedCategories).forEach(categoryData => {
      // Parcourir les sous-catégories (ex: moteurs)
      Object.values(categoryData).forEach(subcategoryData => {
        // Parcourir les types de produits (ex: aluminium) et leurs produits
        Object.values(subcategoryData).forEach(productsArray => {
          if (Array.isArray(productsArray)) {
            products.push(...productsArray.filter(p => p.active));
          }
        });
      });
    });
    
    return products;
  };

  // Filtrer les produits selon la recherche et les catégories sélectionnées
  const getFilteredProducts = () => {
    let products: Product[] = [];

    if (selectedCategory && cleanedCategories[selectedCategory]) {
      if (selectedSubCategory && cleanedCategories[selectedCategory][selectedSubCategory]) {
        // Récupérer tous les produits de la sous-catégorie sélectionnée
        Object.values(cleanedCategories[selectedCategory][selectedSubCategory]).forEach(productsArray => {
          if (Array.isArray(productsArray)) {
            products.push(...productsArray.filter(p => p.active));
          }
        });
      } else {
        // Récupérer tous les produits de la catégorie sélectionnée
        Object.values(cleanedCategories[selectedCategory]).forEach(subcategoryData => {
          Object.values(subcategoryData).forEach(productsArray => {
            if (Array.isArray(productsArray)) {
              products.push(...productsArray.filter(p => p.active));
            }
          });
        });
      }
    } else {
      products = getAllProducts();
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      products = products.filter(product => 
        product.name.toLowerCase().includes(search) ||
        (product.reference?.toLowerCase() || '').includes(search) ||
        Object.entries(product.specs || {}).some(([_, value]) => 
          value && value.toString().toLowerCase().includes(search)
        )
      );
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/automation-3.jpg"
            alt="TIS Automation Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </motion.div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Catalogue des équipements
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 
                       rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-primary/50 focus:border-transparent shadow-lg"
                placeholder="Rechercher par nom, référence ou spécification..."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="flex flex-1 bg-gray-50">
        {/* Menu de gauche */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-primary">Catégories</h3>
          </div>
          <nav className="p-2">
            <div className="space-y-1">
              {Object.entries(cleanedCategories).map(([categoryId, subCategories]) => {
                let CategoryIcon = Box;
                switch(categoryId.toLowerCase()) {
                  case 'commande_controle':
                    CategoryIcon = Cpu;
                    break;
                  case 'composants_mecaniques':
                    CategoryIcon = Wrench;
                    break;
                  case 'installation_electrique':
                    CategoryIcon = Zap;
                    break;
                  case 'cables':
                    CategoryIcon = Cable;
                    break;
                  case 'equipement_electronique':
                    CategoryIcon = Settings;
                    break;
                  case 'protection_electrique':
                    CategoryIcon = Shield;
                    break;
                }

                return (
                  <motion.div 
                    key={categoryId} 
                    className="rounded-lg overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => toggleCategory(categoryId)}
                      className={`w-full text-left flex items-center justify-between p-2.5 rounded-lg transition-colors ${
                        selectedCategory === categoryId 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CategoryIcon className={selectedCategory === categoryId ? 'text-primary' : 'text-gray-500'} size={18} />
                        <span className="capitalize text-sm">{categoryId.replace(/_/g, ' ')}</span>
                      </div>
                      <ChevronDown
                        className={`transform transition-transform duration-200 ${
                          selectedCategory === categoryId ? 'rotate-180 text-primary' : 'text-gray-400'
                        }`}
                        size={14}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        selectedCategory === categoryId ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {Object.keys(subCategories).map((subCategoryId) => (
                        <button
                          key={subCategoryId}
                          onClick={() => selectSubCategory(subCategoryId)}
                          className={`w-full text-left flex items-center px-4 py-2 ml-3 text-sm ${
                            selectedSubCategory === subCategoryId
                              ? 'text-primary bg-primary/5 font-medium'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          } rounded-md transition-colors capitalize`}
                        >
                          <span>{subCategoryId.replace(/_/g, ' ')}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 overflow-auto">
          {/* Info nombre de produits */}
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Nombre de produits filtrés : <span className="font-medium text-primary">{filteredProducts.length}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Grille de produits */}
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={getProductImageUrl(product.image)}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <Package2 size={24} className="text-primary/60 group-hover:text-primary transition-colors duration-200" />
                      {product.reference && (
                        <span className="text-sm text-gray-500">Réf: {product.reference}</span>
                      )}
                    </div>
                    <h3 className="font-medium text-lg text-primary mb-2 group-hover:text-primary/80 transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    {/* Spécifications */}
                    {product.specs && Object.entries(product.specs).length > 0 && (
                      <div className="space-y-1.5 mb-4">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <p key={key} className="text-sm text-gray-600">
                            <span className="font-medium capitalize">{key.replace(/_/g, ' ')}</span>: {value}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <button 
                      onClick={() => addToQuote(product.id)}
                      disabled={cart.includes(product.id)}
                      className={`w-full py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                        cart.includes(product.id)
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary/90 text-white hover:shadow-md'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      {cart.includes(product.id) ? 'Déjà dans le devis' : 'Demander un devis'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Panier flottant */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg p-5 z-50 border border-gray-200">
          <div className="flex items-center justify-between gap-6">
            <span className="font-medium text-[#0B1C33]">Produits sélectionnés: {cart.length}</span>
            <button 
              onClick={() => setShowQuoteForm(true)}
              className="bg-[#0B1C33] hover:bg-[#1E3A5F] text-white px-6 py-2.5 rounded-lg transition-colors"
            >
              Demander un devis
            </button>
          </div>
        </div>
      )}

      {/* Modal formulaire de devis */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8">
            <h2 className="text-2xl font-bold mb-4">Demande de devis</h2>
            <p className="text-gray-600 mb-6">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour les produits sélectionnés.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0B1C33] focus:ring-1 focus:ring-[#0B1C33] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0B1C33] focus:ring-1 focus:ring-[#0B1C33] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input type="tel" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0B1C33] focus:ring-1 focus:ring-[#0B1C33] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0B1C33] focus:ring-1 focus:ring-[#0B1C33] outline-none h-32"></textarea>
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
                  className="px-6 py-2 rounded bg-[#0B1C33] hover:bg-[#1E3A5F] text-white transition-colors"
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
};

export default ProductPage;
