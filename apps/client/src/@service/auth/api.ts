import { apiClient } from "@/@lib/api/apiClient";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  StatusResponse,
} from "./types";
import { API_METHOD } from "@/@types/api";

const AUTH_BASE_URL = "/api/auth";
const AuthServiceUrl = {
  REGISTER: `${AUTH_BASE_URL}/register`,
  LOGIN: `${AUTH_BASE_URL}/login`,
  LOGOUT: `${AUTH_BASE_URL}/logout`,
  STATUS: `${AUTH_BASE_URL}/status`,
};

export const AuthService = {
  register: (body: RegisterRequest) => {
    const url = AuthServiceUrl.REGISTER;
    const options = {
      method: API_METHOD.POST,
      body: JSON.stringify(body),
    };
    return apiClient<RegisterResponse>(url, options);
  },
  login: (body: LoginRequest) => {
    const url = AuthServiceUrl.LOGIN;
    const options = {
      method: API_METHOD.POST,
      body: JSON.stringify(body),
    };

    // TODO: API 실제 봐야 함
    return apiClient<LoginResponse>(url, options);
  },
  logout: () => {
    const url = AuthServiceUrl.LOGOUT;
    const options = {
      method: API_METHOD.POST,
    };
    return apiClient<void>(url, options);
  },

  status: () => {
    const url = AuthServiceUrl.STATUS;
    const options = {
      method: API_METHOD.GET,
    };
    return apiClient<StatusResponse>(url, options);
  },
};
