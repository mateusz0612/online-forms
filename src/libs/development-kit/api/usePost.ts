import { useMutation, UseMutationOptions } from "react-query";

export const usePost = <T>(
  options: UseMutationOptions<unknown, unknown, T, unknown>
) => {
  return useMutation(options);
};
