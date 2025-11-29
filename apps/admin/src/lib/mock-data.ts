import { OrderChartType, OrderType, ProductType } from "@repo/types";
import { User } from "@/app/(dashboard)/users/columns";

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: "user_2abc123",
    imageUrl: "/users/1.png",
    firstName: "John",
    lastName: "Doe",
    phoneNumbers: [{ phoneNumber: "+1234567890" }],
    publicMetadata: { role: "customer" },
    username: "johndoe",
    emailAddresses: [{ emailAddress: "john.doe@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 30, // 30 days ago
  },
  {
    id: "user_2def456",
    imageUrl: "/users/2.png",
    firstName: "Jane",
    lastName: "Smith",
    phoneNumbers: [{ phoneNumber: "+1234567891" }],
    publicMetadata: { role: "customer" },
    username: "janesmith",
    emailAddresses: [{ emailAddress: "jane.smith@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 45, // 45 days ago
  },
  {
    id: "user_2ghi789",
    imageUrl: "/users/3.png",
    firstName: "Michael",
    lastName: "Johnson",
    phoneNumbers: [{ phoneNumber: "+1234567892" }],
    publicMetadata: { role: "customer" },
    username: "michaelj",
    emailAddresses: [{ emailAddress: "michael.j@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 60, // 60 days ago
  },
  {
    id: "user_2jkl012",
    imageUrl: "/users/4.png",
    firstName: "Emily",
    lastName: "Brown",
    phoneNumbers: [{ phoneNumber: "+1234567893" }],
    publicMetadata: { role: "customer" },
    username: "emilyb",
    emailAddresses: [{ emailAddress: "emily.brown@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 20, // 20 days ago
  },
  {
    id: "user_2mno345",
    imageUrl: "/users/5.png",
    firstName: "David",
    lastName: "Wilson",
    phoneNumbers: [{ phoneNumber: "+1234567894" }],
    publicMetadata: { role: "customer" },
    username: "davidw",
    emailAddresses: [{ emailAddress: "david.wilson@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 15, // 15 days ago
  },
  {
    id: "user_2pqr678",
    imageUrl: "/users/6.png",
    firstName: "Sarah",
    lastName: "Davis",
    phoneNumbers: [{ phoneNumber: "+1234567895" }],
    publicMetadata: { role: "customer" },
    username: "sarahd",
    emailAddresses: [{ emailAddress: "sarah.davis@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 10, // 10 days ago
  },
  {
    id: "user_2stu901",
    imageUrl: "/users/7.png",
    firstName: "Robert",
    lastName: "Miller",
    phoneNumbers: [{ phoneNumber: "+1234567896" }],
    publicMetadata: { role: "customer" },
    username: "robertm",
    emailAddresses: [{ emailAddress: "robert.miller@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 5, // 5 days ago
  },
  {
    id: "user_2vwx234",
    imageUrl: "/users/8.png",
    firstName: "Lisa",
    lastName: "Anderson",
    phoneNumbers: [{ phoneNumber: "+1234567897" }],
    publicMetadata: { role: "customer" },
    username: "lisaa",
    emailAddresses: [{ emailAddress: "lisa.anderson@example.com" }],
    banned: false,
    createdAt: Date.now() - 86400000 * 3, // 3 days ago
  },
];

// Mock Orders Data
export const mockOrders: OrderType[] = [
  {
    id: "order_001",
    _id: "order_001",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St",
    city: "New York",
    status: "success",
    amount: 15990, // $159.90
    total: 159.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 2),
  },
  {
    id: "order_002",
    _id: "order_002",
    email: "jane.smith@example.com",
    phone: "+1234567891",
    address: "456 Oak Ave",
    city: "Los Angeles",
    status: "success",
    amount: 8990, // $89.90
    total: 89.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 5),
  },
  {
    id: "order_003",
    _id: "order_003",
    email: "michael.j@example.com",
    phone: "+1234567892",
    address: "789 Pine Rd",
    city: "Chicago",
    status: "pending",
    amount: 24990, // $249.90
    total: 249.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 1),
  },
  {
    id: "order_004",
    _id: "order_004",
    email: "emily.brown@example.com",
    phone: "+1234567893",
    address: "321 Elm St",
    city: "Houston",
    status: "success",
    amount: 12990, // $129.90
    total: 129.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 7),
  },
  {
    id: "order_005",
    _id: "order_005",
    email: "david.wilson@example.com",
    phone: "+1234567894",
    address: "654 Maple Dr",
    city: "Phoenix",
    status: "processing",
    amount: 6990, // $69.90
    total: 69.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 3),
  },
  {
    id: "order_006",
    _id: "order_006",
    email: "sarah.davis@example.com",
    phone: "+1234567895",
    address: "987 Cedar Ln",
    city: "Philadelphia",
    status: "success",
    amount: 17990, // $179.90
    total: 179.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 4),
  },
  {
    id: "order_007",
    _id: "order_007",
    email: "robert.miller@example.com",
    phone: "+1234567896",
    address: "147 Birch Way",
    city: "San Antonio",
    status: "failed",
    amount: 9990, // $99.90
    total: 99.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 2),
  },
  {
    id: "order_008",
    _id: "order_008",
    email: "lisa.anderson@example.com",
    phone: "+1234567897",
    address: "258 Spruce Ct",
    city: "San Diego",
    status: "success",
    amount: 21990, // $219.90
    total: 219.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 1),
  },
  {
    id: "order_009",
    _id: "order_009",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St",
    city: "New York",
    status: "success",
    amount: 4990, // $49.90
    total: 49.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 10),
  },
  {
    id: "order_010",
    _id: "order_010",
    email: "jane.smith@example.com",
    phone: "+1234567891",
    address: "456 Oak Ave",
    city: "Los Angeles",
    status: "pending",
    amount: 14990, // $149.90
    total: 149.90,
    products: [],
    createdAt: new Date(Date.now() - 86400000 * 6),
  },
];

// Mock Products Data (already exists in CardList, but will use here)
export const mockProducts: ProductType[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
];

// Mock Order Chart Data
export const mockOrderChartData: OrderChartType[] = [
  { month: "January", total: 186, successful: 160 },
  { month: "February", total: 305, successful: 280 },
  { month: "March", total: 237, successful: 210 },
  { month: "April", total: 173, successful: 150 },
  { month: "May", total: 209, successful: 190 },
  { month: "June", total: 214, successful: 195 },
];

