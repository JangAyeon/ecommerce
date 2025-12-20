export const API_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

export interface ApiResponse<T> {
  status: number;
  result: boolean;
  message: T;
  error: {
    errorCode: string;
    errorMessage: string;
  } | null;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public errorCode?: string,
    public errorMessage?: string
  ) {
    super(errorMessage ?? "API ERROR");
  }
}
