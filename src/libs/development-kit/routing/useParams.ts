import { useParams as useRouterParams } from "react-router-dom";

export const useParams = <T extends Record<string, string>>() =>
  useRouterParams<T>();
