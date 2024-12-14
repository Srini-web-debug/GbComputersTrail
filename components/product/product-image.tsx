"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className }: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn(
      "aspect-square relative overflow-hidden rounded-t-lg bg-muted",
      className
    )}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "object-cover w-full h-full transition-all duration-300",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0",
          "hover:scale-105 transition-transform duration-300"
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}