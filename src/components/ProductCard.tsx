import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted?: boolean;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isWishlisted }: ProductCardProps) => {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-primary transition-all duration-300 transform hover:scale-105">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discountPercent > 0 && (
              <Badge className="bg-gradient-secondary border-none text-white font-bold">
                -{discountPercent}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="destructive">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            size="sm"
            variant="ghost"
            className={`absolute top-3 right-3 rounded-full w-8 h-8 p-0 ${
              isWishlisted ? 'bg-secondary text-white' : 'bg-white/80 hover:bg-white'
            }`}
            onClick={() => onToggleWishlist(product.id)}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Add Button - appears on hover */}
          <div className="absolute inset-x-4 bottom-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button 
              className="w-full bg-gradient-primary hover:shadow-primary"
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg line-clamp-2 hover:text-primary cursor-pointer transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-accent fill-current' 
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Colors:</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color) => (
                <div 
                  key={color}
                  className="w-4 h-4 rounded-full border-2 border-border"
                  style={{ 
                    backgroundColor: color.toLowerCase() === 'rainbow' 
                      ? 'var(--gradient-hero)' 
                      : color.toLowerCase() 
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;