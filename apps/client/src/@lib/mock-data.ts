import { OrderType, ProductResponse } from "@repo/types";
export const mockProducts: ProductResponse[] = [
  // ✅ 기존 1~15 (imageUrl만 추가)
  {
    id: 1,
    name: "프리미엄 노트북",
    description:
      "고성능 CPU와 대용량 메모리를 갖춘 최신 노트북입니다. 업무와 엔터테인먼트를 모두 만족시키는 완벽한 선택입니다.",
    price: 1590000,
    stock: 50,
    createdAt: "2024-01-15T10:30:00",
    categoryIds: [1, 2],
    imageUrl: "https://picsum.photos/seed/product1/400/400",
  },
  {
    id: 2,
    name: "무선 마우스",
    description:
      "인체공학적 디자인과 정밀한 트래킹 기능을 갖춘 무선 마우스입니다. 장시간 사용해도 편안합니다.",
    price: 35000,
    stock: 3,
    createdAt: "2024-01-20T14:15:00",
    categoryIds: [1, 3],
    imageUrl: "https://picsum.photos/seed/product2/400/400",
  },
  {
    id: 3,
    name: "블루투스 헤드폰",
    description:
      "노이즈 캔슬링 기능이 있는 프리미엄 블루투스 헤드폰입니다. 최대 30시간 재생 가능합니다.",
    price: 289000,
    stock: 0,
    createdAt: "2024-01-10T09:00:00",
    categoryIds: [1, 4],
    imageUrl: "https://picsum.photos/seed/product3/400/400",
  },
  {
    id: 4,
    name: "스마트워치",
    description:
      "건강 모니터링과 스마트 알림 기능을 제공하는 최신 스마트워치입니다. 물방수 기능 포함.",
    price: 450000,
    stock: 25,
    createdAt: "2024-02-01T11:20:00",
    categoryIds: [1, 5],
    imageUrl: "https://picsum.photos/seed/product4/400/400",
  },
  {
    id: 5,
    name: "키보드 세트",
    description:
      "기계식 키보드와 숫자 패드를 포함한 완전한 키보드 세트입니다. RGB 백라이트 지원.",
    price: 125000,
    stock: 5,
    createdAt: "2024-02-05T16:45:00",
    categoryIds: [1, 3],
    imageUrl: "https://picsum.photos/seed/product5/400/400",
  },
  {
    id: 6,
    name: "USB-C 충전기",
    description:
      "빠른 충전을 지원하는 65W USB-C 충전기입니다. 다양한 기기와 호환됩니다.",
    price: 28000,
    stock: 100,
    createdAt: "2024-01-25T13:30:00",
    categoryIds: [1, 6],
    imageUrl: "https://picsum.photos/seed/product6/400/400",
  },
  {
    id: 7,
    name: "노트북 백팩",
    description:
      "15인치 노트북을 수납할 수 있는 내구성 있는 백팩입니다. 충격 흡수 패딩 포함.",
    price: 89000,
    stock: 15,
    createdAt: "2024-02-10T10:00:00",
    categoryIds: [7, 8],
    imageUrl: "https://picsum.photos/seed/product7/400/400",
  },
  {
    id: 8,
    name: "모니터 스탠드",
    description:
      "높이와 각도를 조절할 수 있는 모니터 스탠드입니다. 데스크 정리를 위한 케이블 관리 기능 포함.",
    price: 55000,
    stock: 8,
    createdAt: "2024-02-12T15:20:00",
    categoryIds: [1, 9],
    imageUrl: "https://picsum.photos/seed/product8/400/400",
  },
  {
    id: 9,
    name: "웹캠 HD",
    description:
      "1080p 해상도의 고화질 웹캠입니다. 자동 초점 및 노이즈 감소 마이크 기능.",
    price: 99000,
    stock: 0,
    createdAt: "2024-01-18T12:10:00",
    categoryIds: [1, 10],
    imageUrl: "https://picsum.photos/seed/product9/400/400",
  },
  {
    id: 10,
    name: "USB 메모리 64GB",
    description:
      "빠른 전송 속도를 제공하는 USB 3.0 메모리입니다. 64GB 용량으로 다양한 파일 저장 가능.",
    price: 15000,
    stock: 200,
    createdAt: "2024-01-30T09:45:00",
    categoryIds: [1, 6],
    imageUrl: "https://picsum.photos/seed/product10/400/400",
  },
  {
    id: 11,
    name: "무선 충전 패드",
    description:
      "Qi 표준을 지원하는 무선 충전 패드입니다. 다양한 스마트폰과 호환됩니다.",
    price: 32000,
    stock: 2,
    createdAt: "2024-02-08T14:30:00",
    categoryIds: [1, 6],
    imageUrl: "https://picsum.photos/seed/product11/400/400",
  },
  {
    id: 12,
    name: "에어컨 필터",
    description:
      "공기 청정 기능을 강화하는 에어컨 필터입니다. 6개월 사용 가능.",
    price: 25000,
    stock: 75,
    createdAt: "2024-02-15T11:15:00",
    categoryIds: [11, 12],
    imageUrl: "https://picsum.photos/seed/product12/400/400",
  },
  {
    id: 13,
    name: "LED 스탠드 라이트",
    description:
      "눈의 피로를 줄이는 조명 각도 조절 LED 스탠드입니다. 3단계 밝기 조절 가능.",
    price: 45000,
    stock: 30,
    createdAt: "2024-01-22T10:20:00",
    categoryIds: [13, 14],
    imageUrl: "https://picsum.photos/seed/product13/400/400",
  },
  {
    id: 14,
    name: "책상 매트",
    description:
      "마우스 사용을 편안하게 하는 대형 책상 매트입니다. 방수 처리 및 미끄럼 방지 기능.",
    price: 18000,
    stock: 4,
    createdAt: "2024-02-03T13:45:00",
    categoryIds: [7, 15],
    imageUrl: "https://picsum.photos/seed/product14/400/400",
  },
  {
    id: 15,
    name: "USB 허브",
    description:
      "4포트 USB 3.0 허브입니다. 전원 어댑터 포함으로 안정적인 전원 공급 가능.",
    price: 22000,
    stock: 60,
    createdAt: "2024-01-28T15:10:00",
    categoryIds: [1, 6],
    imageUrl: "https://picsum.photos/seed/product15/400/400",
  },

  // ✅ 16 ~ 240 자동 생성 (imageUrl 포함)
  ...Array.from({ length: 225 }, (_, i) => {
    const id = i + 16;
    return {
      id,
      name: `테스트 상품 ${id}`,
      description: `테스트용 더미 상품 ${id}번입니다. 리스트, 페이징, 필터링 테스트용 데이터입니다.`,
      price: 10000 + (id % 10) * 5000,
      stock: id % 7 === 0 ? 0 : (id * 3) % 120,
      createdAt: new Date(2024, id % 12, (id % 28) + 1, 10, 30).toISOString(),
      categoryIds: [(id % 15) + 1, (id % 10) + 1],
      imageUrl: `https://picsum.photos/seed/product${id}/400/400`,
    };
  }),
];

export const Section1Products = mockProducts.slice(0, 30);
export const Section2Products = mockProducts.slice(30, 60);
export const Section3Products = mockProducts.slice(30, 45);
export const Section4Products = mockProducts.slice(60, 90);
export const Section5Products = mockProducts.slice(90, 120);
export const Section6Products = mockProducts.slice(120, 150);
export const Section7Products = mockProducts.slice(150, 180);
export const Section8Products = mockProducts.slice(180, 210);
export const Section9Products = mockProducts.slice(210, 240);

// 재고 상태 계산 헬퍼 함수 (선택사항)
export const getStockStatus = (
  stock: number
): "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK" => {
  if (stock === 0) return "OUT_OF_STOCK";
  if (stock <= 5) return "LOW_STOCK";
  return "IN_STOCK";
};

// 재고 상태를 포함한 확장된 타입 (선택사항)
export interface ProductWithStockStatus extends ProductResponse {
  stockStatus: "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";
}

export const mockProductsWithStatus: ProductWithStockStatus[] =
  mockProducts.map((product) => ({
    ...product,
    stockStatus: getStockStatus(product.stock),
  }));
