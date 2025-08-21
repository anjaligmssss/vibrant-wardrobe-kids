import { Product } from "@/types/product";
import blueHoodie from "@/assets/products/blue-hoodie.jpg";
import pinkDress from "@/assets/products/pink-dress.jpg";
import yellowTshirt from "@/assets/products/yellow-tshirt.jpg";
import greenShorts from "@/assets/products/green-shorts.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Cozy Blue Hoodie",
    price: 29.99,
    originalPrice: 39.99,
    image: blueHoodie,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Blue", "Navy", "Gray"],
    rating: 4.8,
    reviews: 127,
    description: "Super soft and cozy hoodie perfect for playground adventures. Made with organic cotton for ultimate comfort.",
    inStock: true
  },
  {
    id: "2", 
    name: "Princess Pink Dress",
    price: 34.99,
    image: pinkDress,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Pink", "Purple", "White"],
    rating: 4.9,
    reviews: 89,
    description: "Magical princess dress with sparkly details. Perfect for parties, special occasions, or everyday princess play!",
    inStock: true
  },
  {
    id: "3",
    name: "Sunny Yellow T-Shirt",
    price: 19.99,
    image: yellowTshirt,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Yellow", "Orange", "Green"],
    rating: 4.7,
    reviews: 156,
    description: "Bright and cheerful t-shirt with fun cartoon character. Made from breathable cotton for all-day comfort.",
    inStock: true
  },
  {
    id: "4",
    name: "Adventure Green Shorts",
    price: 24.99,
    originalPrice: 29.99,
    image: greenShorts,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Green", "Blue", "Khaki"],
    rating: 4.6,
    reviews: 93,
    description: "Durable and comfortable shorts perfect for outdoor adventures. Features elastic waistband for easy wearing.",
    inStock: true
  },
  {
    id: "5",
    name: "Rainbow Stripe Dress",
    price: 32.99,
    image: pinkDress, // Reusing for demo
    category: "Girls",
    size: ["2T", "3T", "4T", "5T"],
    colors: ["Rainbow", "Pink", "Purple"],
    rating: 4.8,
    reviews: 67,
    description: "Colorful rainbow stripe dress that brings joy to any day. Twirl-worthy design with comfortable fit.",
    inStock: true
  },
  {
    id: "6",
    name: "Cool Denim Jacket",
    price: 39.99,
    image: blueHoodie, // Reusing for demo
    category: "Boys",
    size: ["3T", "4T", "5T", "6T"],
    colors: ["Denim", "Black", "White"],
    rating: 4.5,
    reviews: 45,
    description: "Stylish denim jacket that adds coolness to any outfit. Perfect for layering in cooler weather.",
    inStock: true
  },
  {
    id: "7",
    name: "Butterfly Wings Tutu",
    price: 27.99,
    image: pinkDress, // Reusing for demo
    category: "Girls",
    size: ["2T", "3T", "4T", "5T"],
    colors: ["Pink", "Purple", "Blue"],
    rating: 4.9,
    reviews: 234,
    description: "Magical butterfly-inspired tutu with shimmery wings detail. Perfect for dress-up and dance.",
    inStock: false
  },
  {
    id: "8",
    name: "Superhero Cape Set",
    price: 22.99,
    image: yellowTshirt, // Reusing for demo
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Red", "Blue", "Yellow"],
    rating: 4.7,
    reviews: 178,
    description: "Transform into a superhero with this amazing cape and shirt set. Unleash your child's imagination!",
    inStock: true
  }
];