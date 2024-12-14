import { ProductSection } from "@/components/product/product-section";
import { HeroCarousel } from "@/components/hero-carousel";
import { getFeaturedProducts } from "@/lib/data";

export default async function Home() {
  const products = await getFeaturedProducts();
  
  const newProducts = products.filter(p => p.category === 'new');
  const refurbishedProducts = products.filter(p => p.category === 'refurbished');
  const accessories = products.filter(p => p.category === 'accessory');

  return (
    <div>
      <HeroCarousel />
      
      <div className="container py-16 space-y-16">
        <ProductSection
          title="New Arrivals"
          products={newProducts}
          category="new"
          showMoreLink="/products/new"
        />
        
        <ProductSection
          title="Refurbished Products"
          products={refurbishedProducts}
          category="refurbished"
          showMoreLink="/products/refurbished"
        />
        
        <ProductSection
          title="Accessories"
          products={accessories}
          category="accessory"
          showMoreLink="/products/accessories"
        />
      </div>
    </div>
  );
}