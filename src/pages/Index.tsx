import { useState, useMemo } from "react";
import { Product, CartItem } from "@/types/product";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";
import ProductReviews from "@/components/ProductReviews";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(new Set());

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  // Calculate cart stats
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Handle adding product to cart
  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently out of stock.",
        variant: "destructive"
      });
      return;
    }

    const defaultSize = product.size[0];
    const defaultColor = product.colors[0];
    const cartItemId = `${product.id}-${defaultSize}-${defaultColor}`;

    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === defaultSize && 
        item.selectedColor === defaultColor
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && 
          item.selectedSize === defaultSize && 
          item.selectedColor === defaultColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const newCartItem: CartItem = {
        ...product,
        quantity: 1,
        selectedSize: defaultSize,
        selectedColor: defaultColor
      };

      return [...prev, newCartItem];
    });

    toast({
      title: "Added to Cart! 🎉",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Handle updating cart item quantity
  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(itemId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Handle removing item from cart
  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart.",
    });
  };

  // Handle wishlist toggle
  const handleToggleWishlist = (productId: string) => {
    setWishlistedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        toast({
          title: "Removed from Wishlist",
          description: "Item removed from your wishlist.",
        });
      } else {
        newSet.add(productId);
        toast({
          title: "Added to Wishlist! ❤️",
          description: "Item added to your wishlist.",
        });
      }
      return newSet;
    });
  };

  // Handle checkout
  const handleCheckout = () => {
    toast({
      title: "Checkout Coming Soon! 🚀",
      description: "Payment integration will be available soon. Thank you for shopping!",
    });
  };

  // Get product reviews
  const getProductReviews = (productId: string) => {
    return reviews.filter(review => review.productId === productId);
  };

  const calculateAverageRating = (productReviews: any[]) => {
    if (productReviews.length === 0) return 0;
    return productReviews.reduce((sum, review) => sum + review.rating, 0) / productReviews.length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <Hero />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Featured Products Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Shop by Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing clothes for your little ones! Quality, comfort, and style in every piece. 🌟
            </p>
          </div>

          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistedItems={wishlistedItems}
          />
        </section>

        {/* Reviews Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Happy Parents & Kids</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what families are saying about their KidsCloset experience! 💝
            </p>
          </div>

          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="reviews">All Reviews</TabsTrigger>
              <TabsTrigger value="hoodie">Blue Hoodie</TabsTrigger>
              <TabsTrigger value="dress">Pink Dress</TabsTrigger>
              <TabsTrigger value="tshirt">Yellow T-Shirt</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProductReviews
                    reviews={reviews}
                    averageRating={calculateAverageRating(reviews)}
                    totalReviews={reviews.length}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hoodie" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cozy Blue Hoodie Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProductReviews
                    reviews={getProductReviews("1")}
                    averageRating={calculateAverageRating(getProductReviews("1"))}
                    totalReviews={getProductReviews("1").length}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dress" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Princess Pink Dress Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProductReviews
                    reviews={getProductReviews("2")}
                    averageRating={calculateAverageRating(getProductReviews("2"))}
                    totalReviews={getProductReviews("2").length}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tshirt" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sunny Yellow T-Shirt Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProductReviews
                    reviews={getProductReviews("3")}
                    averageRating={calculateAverageRating(getProductReviews("3"))}
                    totalReviews={getProductReviews("3").length}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose KidsCloset?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Only the softest, safest materials for your little ones. Every piece is tested for comfort and durability.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl mx-auto flex items-center justify-center mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold">Fast & Free Shipping</h3>
              <p className="text-muted-foreground">
                Free shipping on orders over $50. Fast delivery right to your doorstep with love and care.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-success rounded-2xl mx-auto flex items-center justify-center mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-bold">Happy Guarantee</h3>
              <p className="text-muted-foreground">
                30-day return policy. If your little one isn't happy, we'll make it right - that's our promise!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;