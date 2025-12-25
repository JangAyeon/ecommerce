export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone: string;
  roleId?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  userId: number;
  email: string;
}

export interface LoginResponse {
  userId: number;
  email: string;
  username: string;
  role: string;
  gradeName: string | null; // TODO: 타입 확인
  discountRate: number | null; // TODO: 타입 확인
}

export interface StatusResponse {
  userId: number;
  email: string;
  username: string;
  role: string;
  gradeName: string | null; // TODO: 타입 확인
  discountRate: number | null; // TODO: 타입 확인
}

export interface AuthUser extends RegisterResponse {
  userId: number;
  email: string;
  username: string;
}
