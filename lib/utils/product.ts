import { Product, ProductCategory } from "@/lib/types/product";

export function filterProductsByCategory(products: Product[], category: ProductCategory): Product[] {
  return products.filter(product => product.category === category);
}

export function getInitialProducts(products: Product[], limit: number = 3): Product[] {
  return products.slice(0, limit);
}

export function formatPrice(price: number, currency: string = "USD"): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}