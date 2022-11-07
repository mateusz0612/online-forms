import { ReactElement } from "react";
import { State } from "./useFetch";

interface RendererProps<T> {
  state: State<T>;
  pending: () => ReactElement;
  fail: (error: unknown) => ReactElement;
  children: (data: T) => ReactElement;
}

export const Renderer = <T extends unknown>({
  state,
  pending,
  fail,
  children: done,
}: RendererProps<T>) => {
  if (state.status === "loading") {
    return pending();
  }

  if (state.status === "error") {
    return fail(state.error);
  }

  if (state.status === "success") {
    return done(state.data);
  }

  return null;
};
