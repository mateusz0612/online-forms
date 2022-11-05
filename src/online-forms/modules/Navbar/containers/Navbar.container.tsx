import { FC } from "react";
import { Navbar } from "../components";
import { useNavbar } from "../logic";

export const NavbarContainer: FC = () => {
  const props = useNavbar();

  return <Navbar {...props} />;
};
