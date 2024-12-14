import Link from "next/link";
import { ProductMenu } from "./product-menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks() {
  return (
    <nav className="mx-6 hidden items-center space-x-6 lg:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
      <ProductMenu />
    </nav>
  );
}