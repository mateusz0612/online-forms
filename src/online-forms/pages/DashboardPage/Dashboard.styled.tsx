import styled from "styled-components";
import { DefaultButton, Stack } from "libs/ui";

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

  h2,
  h3 {
    font-size: 30px;
    font-weight: 400;
    padding: 0 20px;
    letter-spacing: 2px;
  }

  :hover {
    color: ${(props) => props.theme.pallete.primary};
  }
`;

export const IconWrapper = styled.div`
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
    svg {
      color: ${(props) => props.theme.pallete.primary};
    }
  }
`;

export const SeeAll = styled(DefaultButton)`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
