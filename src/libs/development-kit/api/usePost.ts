import { useMutation, UseMutationOptions } from "react-query";

export const usePost = <T = unknown, D = unknown>(
  options: UseMutationOptions<D, unknown, T, unknown>
) => {
  return useMutation(options);
};
