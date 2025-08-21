import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistedItems: Set<string>;
}

const ProductGrid = ({ products, onAddToCart, onToggleWishlist, wishlistedItems }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-32 h-32 bg-gradient-to-br from-muted/50 to-muted/20 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">🎈</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or browse all categories.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={wishlistedItems.has(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;