"use client";

import { ProductCard } from "./product-card";
import { Product } from "@/lib/types/product";
import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
}

export function ProductGrid({ products, onLoadMore, hasMore = false, loading = false }: ProductGridProps) {
  const { targetRef, isFetching, setIsFetching } = useInfiniteScroll(() => {
    if (onLoadMore && hasMore && !loading) {
      onLoadMore();
      setIsFetching(false);
    }
  });

  return (
    <div className="space-y-8">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
      
      {(hasMore || loading) && (
        <div ref={targetRef} className="flex justify-center py-8">
          <Button variant="outline" disabled={loading || isFetching}>
            {loading || isFetching ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}