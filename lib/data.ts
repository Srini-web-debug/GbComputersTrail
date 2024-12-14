export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  mainFeature?: string;
  category: 'new' | 'refurbished' | 'accessory';
  availability: 'inStock' | 'lowStock' | 'outOfStock';
}

const products: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 16-inch",
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    category: "new",
    availability: "inStock",
    mainFeature: "M2 Pro chip for exceptional performance"
  },
  {
    id: "2",
    name: "Custom Gaming PC",
    description: "RTX 4080, Intel i9, 32GB RAM, 2TB NVMe",
    price: 3299,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b",
    category: "new",
    availability: "inStock",
    mainFeature: "RTX 4080 for ultimate gaming performance"
  },
  {
    id: "3",
    name: "Dell XPS 15 (Refurbished)",
    description: "Intel i7, 16GB RAM, 1TB SSD, 4K OLED",
    price: 1499,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    category: "refurbished",
    availability: "lowStock",
    mainFeature: "Premium 4K OLED Display"
  },
  {
    id: "4",
    name: "Premium Gaming Monitor",
    description: "27-inch 4K 144Hz HDR Display",
    price: 799,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    category: "accessory",
    availability: "inStock",
    mainFeature: "144Hz refresh rate for smooth gaming"
  },
  {
    id: "5",
    name: "MacBook Air (Refurbished)",
    description: "M1 chip, 8GB RAM, 256GB SSD",
    price: 899,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
    category: "refurbished",
    availability: "inStock",
    mainFeature: "All-day battery life with M1 chip"
  },
  {
    id: "6",
    name: "Wireless Gaming Mouse",
    description: "20K DPI, RGB lighting, 100hr battery",
    price: 149,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    category: "accessory",
    availability: "inStock",
    mainFeature: "Ultra-precise 20K DPI sensor"
  }
];

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return products;
}