import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/data";

export default async function ProductsPage() {
  const products = await getFeaturedProducts();

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Products</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our selection of premium laptops, computers, and accessories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}