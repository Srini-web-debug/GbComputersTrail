"use client";

import { ProductImage } from './product-image';
import { ProductPrice } from './product-price';
import { ProductBadge } from './product-badge';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { scaleUp } from '@/components/ui/animations';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  mainFeature?: string;
  availability?: 'inStock' | 'lowStock' | 'outOfStock';
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleUp}
      layout
    >
      <Card className="h-full flex flex-col">
        <ProductImage
          src={product.image}
          alt={product.name}
        />
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
            <ProductBadge variant={product.availability || 'inStock'}>
              {product.availability === 'outOfStock' ? 'Out of Stock' :
               product.availability === 'lowStock' ? 'Low Stock' : 'In Stock'}
            </ProductBadge>
          </div>
          {product.mainFeature && (
            <p className="text-sm text-muted-foreground mb-2">
              {product.mainFeature}
            </p>
          )}
          <ProductPrice price={product.price} />
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={product.availability === 'outOfStock'}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}