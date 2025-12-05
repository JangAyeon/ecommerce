/**
 * 재고 상태
 */
export enum StockStatus {
  IN_STOCK = "IN_STOCK", // 재고 있음
  OUT_OF_STOCK = "OUT_OF_STOCK", // 재고 없음
  LOW_STOCK = "LOW_STOCK", // 재고 임박 (5개 미만)
}
