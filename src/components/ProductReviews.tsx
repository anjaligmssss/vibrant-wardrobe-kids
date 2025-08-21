import { Review } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ProductReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const ProductReviews = ({ reviews, averageRating, totalReviews }: ProductReviewsProps) => {
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(review => Math.floor(review.rating) === rating).length;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-primary">{averageRating.toFixed(1)}</div>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(averageRating) 
                    ? 'text-accent fill-current' 
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Based on {totalReviews} reviews</p>
        </div>

        <div className="space-y-2">
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <div key={rating} className="flex items-center gap-3">
              <span className="text-sm w-8">{rating}★</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-8">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Button */}
      <div className="text-center">
        <Button variant="outline" className="border-primary/50 hover:bg-primary/5">
          Write a Review
        </Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Customer Reviews</h3>
        {reviews.slice(0, 5).map((review) => (
          <Card key={review.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-primary text-white">
                    {review.userName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{review.userName}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(review.rating) 
                                  ? 'text-accent fill-current' 
                                  : 'text-muted-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {reviews.length > 5 && (
          <div className="text-center">
            <Button variant="outline">
              Show More Reviews
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;