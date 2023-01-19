import { FC, ReactElement } from "react";
import { AuthProvider } from "./logic";

interface Props {
  children: ReactElement | ReactElement[];
}

export const AuthModule: FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
