export interface ProductData {
  code: string;
  name: string;
  description: string;
  details: string;
  category: string;
  subcategory: string;
  price: number;
  active: boolean;
  unit: string;
}

export async function getProducts(): Promise<ProductData[]> {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products: ProductData[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export function organizeProductsByCategory(products: ProductData[]) {
  const categories: { [key: string]: { 
    name: string;
    subcategories: { [key: string]: ProductData[] };
  }} = {};

  products.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = {
        name: product.category,
        subcategories: {}
      };
    }

    if (!categories[product.category].subcategories[product.subcategory]) {
      categories[product.category].subcategories[product.subcategory] = [];
    }

    categories[product.category].subcategories[product.subcategory].push(product);
  });

  return categories;
}

export const productsData: ProductData[] = [
  {
    code: "PR001",
    name: "Produit Test 1",
    description: "Description du produit 1",
    details: "Détails du produit 1",
    category: "Catégorie 1",
    subcategory: "Sous-catégorie 1",
    price: 100,
    active: true,
    unit: "pièce"
  },
  {
    code: "PR002",
    name: "Produit Test 2",
    description: "Description du produit 2",
    details: "Détails du produit 2",
    category: "Catégorie 1",
    subcategory: "Sous-catégorie 2",
    price: 200,
    active: true,
    unit: "pièce"
  },
  {
    code: "PR003",
    name: "Produit Test 3",
    description: "Description du produit 3",
    details: "Détails du produit 3",
    category: "Catégorie 2",
    subcategory: "Sous-catégorie 1",
    price: 300,
    active: true,
    unit: "pièce"
  }
];

export function getLocalProducts(): ProductData[] {
  return productsData;
}
