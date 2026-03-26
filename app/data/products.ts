export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  minPrice?: number;
  sizes: string[];
  image: string;
  description: string;
  featured?: boolean;
  colors?: string[];
};

export const products: Product[] = [
  {
    id: "black-hoodie",
    name: "Divine Timing Black Hoodie",
    slug: "black-hoodie",
    price: 60,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/merch/black-hoodie.jpg",
    description:
      "Premium heavyweight hoodie in jet black. 'Divine Timing' embroidered in gold. The move you make before the world is watching.",
    featured: true,
    colors: ["Black"],
  },
  {
    id: "white-hoodie",
    name: "Divine Timing Hoodie — White/Gold/Pink Rose",
    slug: "white-hoodie",
    price: 60,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/merch/white-hoodie.jpg",
    description:
      "Clean white hoodie with gold and pink rose detailing. Three colorways, one energy. Limited run.",
    featured: true,
    colors: ["White", "Gold", "Pink Rose"],
  },
  {
    id: "mint-tee",
    name: "Divine Timing Mint Green Tee",
    slug: "mint-tee",
    price: 35,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/merch/mint-tee.jpg",
    description:
      "Soft mint green short sleeve tee. Lightweight, breathable, built for the California heat. Understated but unmistakable.",
    featured: true,
    colors: ["Mint Green"],
  },
  {
    id: "pink-tee",
    name: "Divine Timing Pink Tee",
    slug: "pink-tee",
    price: 35,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/merch/pink-tee.jpg",
    description:
      "Soft pink short sleeve tee. The color of confidence. Wear it like you already know.",
    colors: ["Pink"],
  },
  {
    id: "black-long-sleeve",
    name: "Divine Timing Black Long Sleeve",
    slug: "black-long-sleeve",
    price: 45,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/merch/black-long-sleeve.jpg",
    description:
      "Black long sleeve tee with 'Divine Timing' print. All season, all purpose. Built for the patient ones.",
    colors: ["Black"],
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
