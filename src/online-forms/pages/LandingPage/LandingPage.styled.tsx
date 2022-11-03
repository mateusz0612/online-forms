import styled from "styled-components";
import { Stack } from "libs/ui";

export const Wrapper = styled(Stack)`
  width: 85%;
  height: 100vh;
  margin: auto;

  @media ${(props) => props.theme.queries.tablet} {
    width: 40%;
  }

  @media ${(props) => props.theme.queries.desktop} {
    width: 20%;
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Logo = styled.img`
  width: 164px;
  height: 128px;
  align-self: center;
  margin-bottom: 20px;
`;

export const SwitchFormLink = styled.p`
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
`;
