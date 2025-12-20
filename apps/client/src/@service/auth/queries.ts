import { useQuery } from "@tanstack/react-query";
import { AUTH_QUERY_KEY } from "./queryKey";
import { AuthService } from "./api";

export function useAuthStatus() {
  return useQuery({
    queryKey: AUTH_QUERY_KEY.status(),
    queryFn: AuthService.status,
    retry: false, // 401 (게스트 / 비회원) 에러 발생 시 재시도 금지
    staleTime: 1000 * 60 * 5, // 5분
  });
}
