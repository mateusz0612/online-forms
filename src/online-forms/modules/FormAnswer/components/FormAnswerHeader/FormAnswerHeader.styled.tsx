import styled from "styled-components";
import { Tile } from "libs/ui";

export const Wrapper = styled(Tile)`
  h1,
  h2 {
    font-size: 30px;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 0px;
    margin: 7px 7px 7px 0px;
  }

  p {
    span {
      font-weight: 600;
    }
  }
`;

export const Description = styled.p`
  white-space: pre-wrap;
`;
