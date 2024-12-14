import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { getFeaturedProducts } from "@/lib/data";
import { ProductCategory } from "@/lib/types/product";
import { getCategoryContent } from "@/lib/utils/category";

interface Props {
  params: {
    category: string;
  };
}

// Required for static site generation with dynamic routes
export function generateStaticParams() {
  return [
    { category: 'new' },
    { category: 'refurbished' },
    { category: 'accessory' }
  ];
}

export default async function ProductCategoryPage({ params }: Props) {
  // Validate category
  if (!["new", "refurbished", "accessory"].includes(params.category)) {
    notFound();
  }

  const category = params.category as ProductCategory;
  const { title, description } = getCategoryContent(category);
  
  const products = await getFeaturedProducts();
  const categoryProducts = products.filter(p => p.category === category);

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <ProductGrid products={categoryProducts} />
    </div>
  );
}