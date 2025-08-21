import { Product } from "@/types/product";
import blueHoodie from "@/assets/products/blue-hoodie.jpg";
import pinkDress from "@/assets/products/pink-dress.jpg";
import yellowTshirt from "@/assets/products/yellow-tshirt.jpg";
import greenShorts from "@/assets/products/green-shorts.jpg";
import babyOnesie from "@/assets/products/baby-onesie.jpg";
import babyBlanket from "@/assets/products/baby-blanket.jpg";
import redShirt from "@/assets/products/red-shirt.jpg";
import blueJeans from "@/assets/products/blue-jeans.jpg";
import unicornDress from "@/assets/products/unicorn-dress.jpg";
import floralSkirt from "@/assets/products/floral-skirt.jpg";
import babySleepsuit from "@/assets/products/baby-sleepsuit.jpg";
import sportsJersey from "@/assets/products/sports-jersey.jpg";

export const products: Product[] = [
  // Boys Section
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
    id: "6",
    name: "Cool Denim Jacket",
    price: 39.99,
    image: blueHoodie,
    category: "Boys",
    size: ["3T", "4T", "5T", "6T"],
    colors: ["Denim", "Black", "White"],
    rating: 4.5,
    reviews: 45,
    description: "Stylish denim jacket that adds coolness to any outfit. Perfect for layering in cooler weather.",
    inStock: true
  },
  {
    id: "8",
    name: "Superhero Cape Set",
    price: 22.99,
    image: yellowTshirt,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Red", "Blue", "Yellow"],
    rating: 4.7,
    reviews: 178,
    description: "Transform into a superhero with this amazing cape and shirt set. Unleash your child's imagination!",
    inStock: true
  },
  {
    id: "9",
    name: "Classic Red Plaid Shirt",
    price: 26.99,
    image: redShirt,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Red", "Blue", "Green"],
    rating: 4.6,
    reviews: 89,
    description: "Timeless plaid button-up shirt perfect for any occasion. Comfortable fit with easy-care fabric.",
    inStock: true
  },
  {
    id: "10",
    name: "Denim Adventure Jeans",
    price: 32.99,
    image: blueJeans,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    rating: 4.8,
    reviews: 145,
    description: "Sturdy denim jeans built for adventure. Reinforced knees and comfortable stretch fit for active boys.",
    inStock: true
  },
  {
    id: "11",
    name: "Sports Team Jersey",
    price: 27.99,
    image: sportsJersey,
    category: "Boys",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Blue", "Red", "Green"],
    rating: 4.7,
    reviews: 112,
    description: "Athletic jersey perfect for future sports stars. Breathable fabric with moisture-wicking technology.",
    inStock: true
  },

  // Girls Section  
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
    id: "5",
    name: "Rainbow Stripe Dress",
    price: 32.99,
    image: pinkDress,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T"],
    colors: ["Rainbow", "Pink", "Purple"],
    rating: 4.8,
    reviews: 67,
    description: "Colorful rainbow stripe dress that brings joy to any day. Twirl-worthy design with comfortable fit.",
    inStock: true
  },
  {
    id: "7",
    name: "Butterfly Wings Tutu",
    price: 27.99,
    image: pinkDress,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T"],
    colors: ["Pink", "Purple", "Blue"],
    rating: 4.9,
    reviews: 234,
    description: "Magical butterfly-inspired tutu with shimmery wings detail. Perfect for dress-up and dance.",
    inStock: false
  },
  {
    id: "12",
    name: "Magical Unicorn Dress",
    price: 36.99,
    image: unicornDress,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Purple", "Pink", "White"],
    rating: 4.9,
    reviews: 198,
    description: "Enchanting unicorn dress with sparkly horn and rainbow details. Every girl's dream come true!",
    inStock: true
  },
  {
    id: "13",
    name: "Blooming Floral Skirt",
    price: 23.99,
    image: floralSkirt,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Pink", "Yellow", "Blue"],
    rating: 4.6,
    reviews: 76,
    description: "Beautiful floral print skirt perfect for spring and summer. Twirls beautifully and pairs with any top!",
    inStock: true
  },
  {
    id: "14",
    name: "Sparkly Ballet Tutu",
    price: 29.99,
    originalPrice: 34.99,
    image: pinkDress,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T"],
    colors: ["Pink", "Purple", "White"],
    rating: 4.8,
    reviews: 156,
    description: "Professional-quality tutu perfect for ballet class or dress-up play. Layers of soft tulle with sparkles.",
    inStock: true
  },
  {
    id: "15",
    name: "Sunflower Summer Dress",
    price: 28.99,
    image: floralSkirt,
    category: "Girls",
    size: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Yellow", "Orange", "Pink"],
    rating: 4.7,
    reviews: 92,
    description: "Bright sunflower print dress that captures summer's joy. Comfortable cotton with adjustable straps.",
    inStock: true
  },

  // Newborn Section
  {
    id: "16",
    name: "Soft Cotton Onesie",
    price: 12.99,
    image: babyOnesie,
    category: "Newborn",
    size: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["White", "Pink", "Blue"],
    rating: 4.9,
    reviews: 324,
    description: "Ultra-soft organic cotton onesie perfect for baby's delicate skin. Easy snap closures for quick changes.",
    inStock: true
  },
  {
    id: "17",
    name: "Cozy Baby Blanket",
    price: 24.99,
    image: babyBlanket,
    category: "Newborn",
    size: ["One Size"],
    colors: ["Pink", "Blue", "Yellow"],
    rating: 4.8,
    reviews: 189,
    description: "Luxuriously soft baby blanket perfect for swaddling and cuddles. Hypoallergenic and machine washable.",
    inStock: true
  },
  {
    id: "18",
    name: "Animal Print Sleep Suit",
    price: 18.99,
    image: babySleepsuit,
    category: "Newborn",
    size: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["White", "Cream", "Gray"],
    rating: 4.7,
    reviews: 145,
    description: "Adorable sleep suit with cute animal prints. Footed design keeps little toes warm all night long.",
    inStock: true
  },
  {
    id: "19",
    name: "First Steps Romper",
    price: 21.99,
    image: babyOnesie,
    category: "Newborn",
    size: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["Pink", "Blue", "Green"],
    rating: 4.6,
    reviews: 98,
    description: "Perfect romper for baby's first adventures. Soft stretch fabric with snap bottom for easy diaper changes.",
    inStock: true
  },
  {
    id: "20",
    name: "Dreamy Cloud Sleeper",
    price: 16.99,
    originalPrice: 19.99,
    image: babySleepsuit,
    category: "Newborn",
    size: ["0-3M", "3-6M", "6-9M"],
    colors: ["White", "Lavender", "Mint"],
    rating: 4.8,
    reviews: 167,
    description: "Heavenly soft sleeper with cloud patterns. Bamboo fiber blend for natural temperature regulation.",
    inStock: true
  },
  {
    id: "21",
    name: "Little Star Bodysuit Set",
    price: 35.99,
    image: babyOnesie,
    category: "Newborn",
    size: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["Yellow", "Pink", "Blue"],
    rating: 4.9,
    reviews: 278,
    description: "Set of 5 adorable bodysuits with star patterns. Perfect for mixing and matching with any bottoms.",
    inStock: true
  }
];