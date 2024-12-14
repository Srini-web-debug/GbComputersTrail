"use client";

import { Product, ProductCategory } from "@/lib/types/product";
import { ProductGrid } from "./product-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { getInitialProducts } from "@/lib/utils/product";

interface ProductSectionProps {
  title: string;
  products: Product[];
  category: ProductCategory;
  showMoreLink: string;
}

export function ProductSection({ title, products, category, showMoreLink }: ProductSectionProps) {
  const displayProducts = getInitialProducts(products);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <Button variant="ghost" asChild>
          <Link href={showMoreLink}>View All</Link>
        </Button>
      </div>
      
      <ProductGrid products={displayProducts} />
    </motion.section>
  );
}