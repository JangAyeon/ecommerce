import { ApiResponse, ApiError } from "@/@types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiClient<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const reqUrl = `${BASE_URL}${url}`;
  // reqOptions에 RequestInit 타입을 명시해
  // credentials: "include"가 string으로 추론되는 것을 방지
  const reqOptions: RequestInit = {
    ...options,
    credentials: "include", // session cookie 사용
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(reqUrl, reqOptions);
  const data: ApiResponse<T> = await res.json();
  console.log(reqUrl, reqOptions, data.message, res.headers);

  // TODO: API 구조 통일되면 다시 적용
  // if (!res.ok || !data.result) {
  //   throw new ApiError(
  //     res.status,
  //     data.error?.errorCode,
  //     data.error?.errorMessage
  //   );
  // }

  return data.message;
}
