// ==================== Refund 타입 ====================

/**
 * 환불 상태
 */
export enum RefundStatus {
  PENDING = "PENDING", // 요청 접수(대기)
  APPROVED = "APPROVED", // 승인
  REJECTED = "REJECTED", // 거절
  COMPLETED = "COMPLETED", // 완료
}
/**
 * 환불 응답
 */
export interface RefundResponse {
  refundId: number;
  status: RefundStatus;
  reason: string;
  refundAmount: number;
  createdAt: string; // ISO 8601 형식의 날짜 문자열
  orderId: number;
  userId: number;
  userName: string;
}

/**
 * 환불 생성 요청
 */
export interface CreateRefundRequest {
  userId: number;
  orderId: number;
  reason: string;
}

/**
 * 환불 생성 응답
 */
export interface CreateRefundResponse {
  refundId: number;
  status: RefundStatus;
  reason: string;
  refundAmount: number;
  createdAt: string; // ISO 8601 형식의 날짜 문자열
  orderId: number;
  userId: number;
  userName: string;
}

/**
 * 환불 수정 요청
 */
export interface UpdateRefundRequest {
  adminId: number;
  refundStatus: RefundStatus;
}
