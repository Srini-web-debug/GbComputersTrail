"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Laptop, RefreshCw, Package } from "lucide-react";

const categories = [
  {
    title: "New Products",
    href: "/products/new",
    description: "Browse our latest arrivals in laptops and computers",
    icon: Laptop,
  },
  {
    title: "Refurbished",
    href: "/products/refurbished",
    description: "Quality refurbished devices at great prices",
    icon: RefreshCw,
  },
  {
    title: "Accessories",
    href: "/products/accessories",
    description: "Essential accessories for your devices",
    icon: Package,
  },
];

export function ProductMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <li key={category.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={category.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">
                          {category.title}
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {category.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}