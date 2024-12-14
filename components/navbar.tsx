import Link from "next/link";
import { Input } from "@/components/ui/input";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";
import { CartButton } from "@/components/cart/cart-button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MobileNav />

        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">GB Computers</span>
          </Link>

          <NavLinks />

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] lg:w-[300px]"
              />
            </div>
            <CartButton itemCount={0} />
          </div>
        </div>
      </div>
    </header>
  );
}