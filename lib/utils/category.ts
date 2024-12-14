import { ProductCategory } from "@/lib/types/product";

interface CategoryContent {
  title: string;
  description: string;
}

const categoryContent: Record<ProductCategory, CategoryContent> = {
  new: {
    title: "New Arrivals",
    description: "Discover our latest collection of premium tech products."
  },
  refurbished: {
    title: "Refurbished Products",
    description: "Quality refurbished devices at great prices."
  },
  accessory: {
    title: "Accessories",
    description: "Essential accessories to complete your setup."
  }
};

export function getCategoryContent(category: ProductCategory): CategoryContent {
  return categoryContent[category];
}

export function isValidCategory(category: string): category is ProductCategory {
  return ["new", "refurbished", "accessory"].includes(category);
}