import { FC } from "react";
import { NavbarContainer } from "./containers";
import { useAuthContext } from "online-forms/shared/Auth";

export const Navbar: FC = () => {
  const { user } = useAuthContext();

  if (!user) {
    return null;
  }

  return <NavbarContainer />;
};
