import {
  OrderProductRequest,
  OrderProductResponse,
  ProductType,
} from "./product"; // legacy

// ==================== Order 타입 ====================

/**
 * 주문 상태
 */
export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

/**
 * 주문 응답
 */
export interface OrderResponse {
  id: number;
  userName: string;
  shippingAddress: string;
  products: OrderProductResponse[];
  totalPrice: number;
  orderDate: string; // ISO 8601 형식의 날짜 문자열
  orderStatus: OrderStatus;
}

/**
 * 주문 생성 요청
 */
export interface CreateOrderRequest {
  userId: number;
  products: OrderProductRequest[];
  shippingAddress: string;
}

/**
 * 주문 검색 조건
 */
export interface SearchOrderCond {
  userId?: number;
  orderStatus?: OrderStatus;
  startDate?: string; // ISO 8601 형식의 날짜 문자열
  endDate?: string; // ISO 8601 형식의 날짜 문자열
}

// ===============================LEGACY========================================
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
