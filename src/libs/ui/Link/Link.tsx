import { FC } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
  text-decoration: none; ;
`;

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};
