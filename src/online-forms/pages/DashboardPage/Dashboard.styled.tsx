import styled from "styled-components";
import { Stack } from "libs/ui";

export const Wrapper = styled(Stack)`
  width: 90vw;
  margin: auto;

  @media ${(props) => props.theme.queries.desktop} {
    width: 55vw;
  }
`;

export const Tile = styled(Stack)`
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid rgba(198, 198, 207, 0.5);
  box-shadow: 0px 0px 23px 6px rgba(198, 198, 207, 0.5);
  position: relative;
  cursor: pointer;
  overflow: hidden;

  p {
    font-size: 30px;
    padding: 0 20px;
    letter-spacing: 2px;
  }

  svg {
    font-size: 128px;
    position: absolute;
    right: -30px;
    bottom: -30px;

    @media ${(props) => props.theme.queries.tablet} {
      font-size: 248px;
      right: -60px;
      bottom: -60px;
    }
  }

  :hover {
    color: ${(props) => props.theme.pallete.primary};

    svg {
      color: ${(props) => props.theme.pallete.primary};
    }
  }
`;
