import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_QUERY_KEY } from "./queryKey";
import { AuthService } from "./api";
import { toast } from "react-toastify";

export function useRegister() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: AuthService.register,
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다!");
      qc.invalidateQueries({ queryKey: AUTH_QUERY_KEY.base });
    },
    onError: (error) => {
      toast.error(error.message || "회원가입에 실패했습니다.");
    },
  });
}

export function useLogout() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      toast.success("Logged out successfully");
      qc.invalidateQueries({ queryKey: AUTH_QUERY_KEY.base });
      // 카트 상태 초기화
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useLogin() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: () => {
      toast.success("Logged in successfully");
      qc.invalidateQueries({ queryKey: AUTH_QUERY_KEY.base });
      // 카트 상태 초기화
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
