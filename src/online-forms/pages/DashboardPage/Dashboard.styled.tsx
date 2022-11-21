import styled from "styled-components";
import { DefaultButton, Stack } from "libs/ui";

export const Wrapper = styled(Stack)`
  width: 90vw;
  margin: auto;

  @media ${(props) => props.theme.queries.desktop} {
    width: 55vw;
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

export const SeeButton = styled(DefaultButton)`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
