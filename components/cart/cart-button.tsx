"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  itemCount?: number;
}

export function CartButton({ itemCount = 0 }: CartButtonProps) {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  );
}