import { OrderType, ProductType } from "@repo/types";

// Mock Products Data
export const mockProducts: ProductType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    categorySlug: "tshirts",
    createdAt: new Date(Date.now() - 86400000 * 30),
    updatedAt: new Date(Date.now() - 86400000 * 5),
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    categorySlug: "jackets",
    createdAt: new Date(Date.now() - 86400000 * 25),
    updatedAt: new Date(Date.now() - 86400000 * 3),
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    categorySlug: "pullovers",
    createdAt: new Date(Date.now() - 86400000 * 20),
    updatedAt: new Date(Date.now() - 86400000 * 2),
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
    categorySlug: "tshirts",
    createdAt: new Date(Date.now() - 86400000 * 15),
    updatedAt: new Date(Date.now() - 86400000 * 1),
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
    categorySlug: "jackets",
    createdAt: new Date(Date.now() - 86400000 * 10),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
    categorySlug: "shoes",
    createdAt: new Date(Date.now() - 86400000 * 8),
    updatedAt: new Date(Date.now() - 86400000 * 1),
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    categorySlug: "shoes",
    createdAt: new Date(Date.now() - 86400000 * 5),
    updatedAt: new Date(),
  },
  {
    id: 8,
    name: "Levi's Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    categorySlug: "pants",
    createdAt: new Date(Date.now() - 86400000 * 3),
    updatedAt: new Date(),
  },
];

// Helper function to get product by ID
export const getMockProductById = (
  id: number | string
): ProductType | undefined => {
  return mockProducts.find((product) => product.id === Number(id));
};

// Mock User Orders Data (with products field)
export const mockUserOrders: OrderType[] = [
  {
    _id: "order_user_001",
    email: "customer@example.com",
    status: "success",
    amount: 15990, // $159.90
    userId: "user_123",
    products: [
      {
        id: 1,
        name: "Adidas CoreFit T-Shirt",
        shortDescription: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
          gray: "/products/1g.png",
          purple: "/products/1p.png",
          green: "/products/1gr.png",
        },
        categorySlug: "tshirts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Puma Ultra Warm Zip",
        shortDescription: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 59.9,
        sizes: ["s", "m", "l", "xl"],
        colors: ["gray", "green"],
        images: { gray: "/products/2g.png", green: "/products/2gr.png" },
        categorySlug: "jackets",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(Date.now() - 86400000 * 10), // 10 days ago
    updatedAt: new Date(Date.now() - 86400000 * 10),
  },
  {
    _id: "order_user_002",
    email: "customer@example.com",
    status: "success",
    amount: 6990, // $69.90
    userId: "user_123",
    products: [
      {
        id: 3,
        name: "Nike Air Essentials Pullover",
        shortDescription: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 69.9,
        sizes: ["s", "m", "l"],
        colors: ["green", "blue", "black"],
        images: {
          green: "/products/3gr.png",
          blue: "/products/3b.png",
          black: "/products/3bl.png",
        },
        categorySlug: "pullovers",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(Date.now() - 86400000 * 5), // 5 days ago
    updatedAt: new Date(Date.now() - 86400000 * 5),
  },
  {
    _id: "order_user_003",
    email: "customer@example.com",
    status: "pending",
    amount: 2990, // $29.90
    userId: "user_123",
    products: [
      {
        id: 4,
        name: "Nike Dri Flex T-Shirt",
        shortDescription: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 29.9,
        sizes: ["s", "m", "l"],
        colors: ["white", "pink"],
        images: { white: "/products/4w.png", pink: "/products/4p.png" },
        categorySlug: "tshirts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
    updatedAt: new Date(Date.now() - 86400000 * 2),
  },
  {
    _id: "order_user_004",
    email: "customer@example.com",
    status: "success",
    amount: 12990, // $129.90
    userId: "user_123",
    products: [
      {
        id: 6,
        name: "Nike Air Max 270",
        shortDescription: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 59.9,
        sizes: ["40", "42", "43", "44"],
        colors: ["gray", "white"],
        images: { gray: "/products/6g.png", white: "/products/6w.png" },
        categorySlug: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Nike Ultraboost Pulse",
        shortDescription: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        price: 69.9,
        sizes: ["40", "42", "43"],
        colors: ["gray", "pink"],
        images: { gray: "/products/7g.png", pink: "/products/7p.png" },
        categorySlug: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(Date.now() - 86400000 * 15), // 15 days ago
    updatedAt: new Date(Date.now() - 86400000 * 15),
  },
];
