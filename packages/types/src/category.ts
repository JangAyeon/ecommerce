// ==================== Category 타입 ====================

import { ProductResponse } from "./product";

/**
 * 카테고리 응답
 */
export interface CategoryResponse {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  products: ProductResponse[];
}

/**
 * 카테고리 트리 응답 (재귀 구조)
 */
export interface CategoryTreeResponse {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  children: CategoryTreeResponse[];
}

/**
 * 카테고리 생성 요청
 */
export interface CreateCategoryRequest {
  name: string;
  description: string;
  parentId?: number | null;
  childrenIds?: number[];
}

/**
 * 카테고리 수정 요청
 */
export interface UpdateCategoryRequest {
  id: number;
  name?: string;
  description?: string;
  parentId?: number | null;
}
