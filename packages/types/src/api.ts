/**
 * 백엔드 API 응답 및 요청 타입 정의
 */

// ==================== 공통 타입 ====================

/**
 * API 공통 응답 타입
 */
export interface ApiResponse<T> {
  status: number;
  result: boolean;
  error?: ApiError;
  message: T;
}

export interface ApiError {
  errorCode: string;
  errorMessage: string;
}

/**
 * 페이지네이션 응답 타입 (Spring Data Page)
 */
export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

/**
 * 페이지네이션 요청 파라미터
 */
export interface Pageable {
  page?: number;
  size?: number;
  sort?: string;
}
