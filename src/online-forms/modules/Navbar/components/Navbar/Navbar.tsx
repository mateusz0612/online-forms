import { FC } from "react";
import { AppBar, DefaultButton, Menu, Link } from "libs/ui";
import { ILink, ISetting } from "../../Navbar.types";
import * as Styled from "./Navbar.styled";

interface Props {
  links: ILink[];
  settings: ISetting[];
}

export const Navbar: FC<Props> = ({ links, settings }) => {
  return (
    <AppBar position="static">
      <Styled.Wrapper justifyContent="center" flexDirection="row">
        {links.map((link) => (
          <Link to={link?.to} key={link?.label}>
            <DefaultButton sx={{ color: "#fff" }}>{link?.label}</DefaultButton>
          </Link>
        ))}
      </Styled.Wrapper>
      <Menu
        settings={settings}
        alt="Profile image"
        src="/vite.svg"
        id="app-bar-menu"
      />
    </AppBar>
  );
};
