export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  mainFeature?: string;
  category: 'new' | 'refurbished' | 'accessory';
  availability: 'inStock' | 'lowStock' | 'outOfStock';
  specs?: {
    [key: string]: string;
  };
}

export type ProductCategory = 'new' | 'refurbished' | 'accessory';