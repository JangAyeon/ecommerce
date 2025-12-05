import z from "zod";
import { StockStatus } from "./stock";

// ==================== Product 타입 ====================
/**
 * 정렬 방향
 */
export type SortDirection = "ASC" | "DESC";
/**
 * 상품 응답
 */
export interface ProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string; // ISO 8601 형식의 날짜 문자열
  categoryIds: number[];
}

/**
 * 상품 생성 요청
 */
export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryIds: number[];
}

/**
 * 상품 수정 요청
 */
export interface UpdateProductRequest {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  categoryIds?: number[];
}

/**
 * 주문 상품 요청
 */
export interface OrderProductRequest {
  productId: number;
  quantity: number;
}

/**
 * 주문 상품 응답
 */
export interface OrderProductResponse {
  productId: number;
  productName: string;
  quantity: number;
  orderPrice: number;
}

/**
 * 상품 검색 조건
 */
export interface SearchProductCond {
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  productKeyword?: string;
  stockStatus?: StockStatus;
}

/**
 * 상품 정렬 조건
 */
export interface SortProductCond {
  priceSort?: SortDirection;
  createdAtSort?: SortDirection;
}
// ===============================LEGACY========================================

export type ProductType = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  categorySlug: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductsType = ProductType[];

export type StripeProductType = {
  id: string;
  name: string;
  price: number;
};

export const colors = [
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
] as const;

export const sizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
] as const;

export const ProductFormSchema = z
  .object({
    name: z
      .string({ message: "Product name is required!" })
      .min(1, { message: "Product name is required!" }),
    shortDescription: z
      .string({ message: "Short description is required!" })
      .min(1, { message: "Short description is required!" })
      .max(60),
    description: z
      .string({ message: "Description is required!" })
      .min(1, { message: "Description is required!" }),
    price: z
      .number({ message: "Price is required!" })
      .min(1, { message: "Price is required!" }),
    categorySlug: z
      .string({ message: "Category is required!" })
      .min(1, { message: "Category is required!" }),
    sizes: z
      .array(z.enum(sizes))
      .min(1, { message: "At least one size is required!" }),
    colors: z
      .array(z.enum(colors))
      .min(1, { message: "At least one color is required!" }),
    images: z.record(z.string(), z.string(), {
      message: "Image for each color is required!",
    }),
  })
  .refine(
    (data) => {
      const missingImages = data.colors.filter(
        (color: string) => !data.images?.[color]
      );
      return missingImages.length === 0;
    },
    {
      message: "Image is required for each selected color!",
      path: ["images"],
    }
  );

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
};

export const CategoryFormSchema = z.object({
  name: z
    .string({ message: "Name is Required!" })
    .min(1, { message: "Name is Required!" }),
  slug: z
    .string({ message: "Slug is Required!" })
    .min(1, { message: "Slug is Required!" }),
});
