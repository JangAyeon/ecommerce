export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone: string;
  roleId?: string;
}

export interface RegisterResponse {
  userId: number;
  email: string;
}

export interface AuthUser extends RegisterResponse {
  userId: number;
  email: string;
  username: string;
}
