import { ProductType } from "./product";

export type OrderType = {
  id: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  products: ProductType[];
  total: number;
  amount?: number; // Amount in cents (for compatibility)
  status: string;
  createdAt: Date;
  _id: string;
};

export type OrderChartType = {
  month: string;
  total: number;
  successful: number;
};
