import { useContext, createContext, ReactNode, FC } from "react";
import { Progress } from "libs/ui";
import { useAuth } from "./useAuth";

type ContextType = Omit<ReturnType<typeof useAuth>, "loading">;

const Context = createContext<ContextType | undefined>(undefined);

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { loading, ...ctx } = useAuth();

  if (loading) {
    return <Progress fullPage />;
  }

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error("Missing provider");
  }

  return ctx;
};
