import { useQuery, UseQueryOptions } from "react-query";

export interface State<T> {
  status: "error" | "idle" | "loading" | "success";
  data: T;
  error: unknown;
}

type FetchOptions<T> =
  | Omit<UseQueryOptions<T, unknown, T, string[]>, "queryKey" | "queryFn">
  | undefined;

export const useFetch = <T = unknown>(
  cacheKey: string[],
  fetchFn: () => Promise<T>,
  options?: FetchOptions<T>
) => {
  const { status, data, error } = useQuery(cacheKey, fetchFn, {
    staleTime: Infinity,
    ...options,
  });

  return {
    state: {
      status,
      data,
      error,
    } as State<T>,
  } as const;
};
