import { useContext, createContext, ReactNode, FC } from "react";
import { Progress } from "libs/ui";
import { useAuth } from "./useAuth";

type ContextType = ReturnType<typeof useAuth>;

const Context = createContext<ContextType | undefined>(undefined);

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const ctx = useAuth();

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error("Missing provider");
  }

  return ctx;
};
