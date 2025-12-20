export const AUTH_QUERY_KEY = {
  base: ["auth"] as const,
  status: () => [...AUTH_QUERY_KEY.base, "status"] as const,
};
