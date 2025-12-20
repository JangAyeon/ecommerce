import { apiClient } from "@/@lib/api/apiClient";
import { RegisterRequest, RegisterResponse } from "./types";
import { API_METHOD } from "@/@types/api";

const AUTH_BASE_URL = "/api/auth";
const AuthServiceUrl = {
  REGISTER: `${AUTH_BASE_URL}/register`,
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
    return apiClient<void>(url, options);
  },
};
