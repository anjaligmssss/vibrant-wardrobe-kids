import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-kids-clothing.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-[80vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute top-10 left-10 animate-float">
        <Star className="h-8 w-8 text-accent fill-current" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce-soft">
        <Sparkles className="h-6 w-6 text-secondary" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{animationDelay: '1s'}}>
        <Star className="h-6 w-6 text-primary fill-current" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Happy Kids</span>
              <br />
              <span className="text-foreground">Stylish Clothes</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
              Discover our magical collection of colorful, comfortable, and trendy clothing 
              that makes every kid shine bright! ✨
            </p>
          </div>


          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-2 flex items-center justify-center">
                <Star className="h-6 w-6 text-white fill-current" />
              </div>
              <p className="text-sm font-medium">Quality First</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl mx-auto mb-2 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium">Fun Designs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-success rounded-xl mx-auto mb-2 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium">Fast Shipping</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 scale-110"></div>
          <img 
            src={heroImage} 
            alt="Colorful kids clothing collection" 
            className="w-full h-auto rounded-3xl shadow-soft relative z-10 animate-bounce-soft"
          />
          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold animate-bounce-soft shadow-accent">
            New Arrival!
          </div>
          <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-bold animate-float shadow-lg">
            Free Shipping
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;