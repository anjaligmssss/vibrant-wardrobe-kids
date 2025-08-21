import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">KC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">KidsCloset</h3>
                <p className="text-xs text-muted-foreground">Happy Kids, Happy Clothes</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making childhood more colorful with high-quality, comfortable, and stylish clothing 
              that lets kids be kids while looking absolutely adorable! 🌈
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-secondary/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-accent/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Boys Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Girls Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Newborn Essentials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-success transition-colors">
                  Sale Items
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>1-800-KIDS-FUN</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-secondary" />
                <span>hello@kidscloset.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest news about new arrivals, sales, and parenting tips! 📧
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="text-sm"
                />
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:shadow-primary whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, just awesome deals and parenting tips! 🎁
              </p>
            </div>

            {/* Store Location */}
            <div className="pt-2">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div className="text-muted-foreground">
                  <p>123 Happy Street</p>
                  <p>Kids Town, KT 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 KidsCloset. All rights reserved.</span>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-secondary fill-current animate-pulse" />
            <span>for happy families</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-3">We accept</p>
          <div className="flex justify-center gap-4 text-xs text-muted-foreground">
            <div className="px-3 py-2 bg-card rounded border">VISA</div>
            <div className="px-3 py-2 bg-card rounded border">MASTERCARD</div>
            <div className="px-3 py-2 bg-card rounded border">PAYPAL</div>
            <div className="px-3 py-2 bg-card rounded border">APPLE PAY</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;