import styled from "styled-components";
import { Stack } from "libs/ui";

export const IconsWrapper = styled(Stack)`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
`;

export const IconWrapper = styled.div`
  :hover {
    color: ${(props) => props.theme.pallete.primary};
  }
`;
