import styled from "styled-components";
import { Tile } from "libs/ui";

export const Wrapper = styled(Tile)`
  width: 100%;
  height: 600px;

  @media ${(props) => props.theme.queries.desktop} {
    width: 40%;
  }
`;

export const HelperText = styled.p`
  text-align: center;

  span {
    font-weight: 600;
  }
`;
