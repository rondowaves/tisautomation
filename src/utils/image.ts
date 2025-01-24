/**
 * Génère l'URL complète d'une image de produit
 * @param imagePath Chemin relatif de l'image dans le dossier products
 * @returns URL complète de l'image ou URL d'une image par défaut
 */
export const getProductImageUrl = (imagePath?: string): string => {
  if (!imagePath) {
    return '/images/products/default-product.jpg';
  }
  return `/images/products/${imagePath}`;
};

/**
 * Génère un nom de fichier sécurisé pour une image de produit
 * @param productName Nom du produit
 * @param extension Extension du fichier (par défaut .jpg)
 * @returns Nom de fichier sécurisé
 */
export const generateSafeImageName = (productName: string, extension: string = '.jpg'): string => {
  return productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') + extension;
};
