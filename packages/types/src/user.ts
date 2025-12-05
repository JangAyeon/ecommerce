// ==================== User 타입 ====================

import { OrderStatus } from "./order";
import { OrderProductResponse } from "./product";

/**
 * 사용자 응답
 */
export interface UserResponse {
  id: number;
  username: string;
  email: string;
  address: string;
  updatedAt: string; // ISO 8601 형식의 날짜 문자열
  userOrders: UserOrderResponse[];
}

/**
 * 사용자 주문 응답
 */
export interface UserOrderResponse {
  orderDate: string; // ISO 8601 형식의 날짜 문자열
  status: OrderStatus;
  orderProducts: OrderProductResponse[];
}

/**
 * 사용자 생성 요청
 */
export interface CreateUserRequest {
  username: string;
  email: string;
  passwordHash: string;
  address: string;
  roleId?: number; // 기본값: 1
}

/**
 * 사용자 수정 요청
 */
export interface UpdateUserRequest {
  id: number;
  passwordHash?: string;
  address?: string;
  email?: string;
}
