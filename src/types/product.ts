export interface Product {
  id: string;
  name: string;
  reference?: string;
  category: string;
  subCategory: string;
  specs?: Record<string, string | number>;
  image?: string; // Chemin de l'image relatif à /public/images/products
}

export interface ProductWithImage extends Product {
  imageUrl: string; // URL complète de l'image
}
