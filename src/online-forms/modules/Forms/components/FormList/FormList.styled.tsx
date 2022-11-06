import styled from "styled-components";
import { Stack } from "libs/ui";

export const IconWrapper = styled.div`
  svg {
    font-size: 36px;

    :hover {
      color: ${(props) => props.theme.pallete.primary};
    }
  }
`;

export const LoadingWrapper = styled(Stack)`
  width: 100%;
  min-height: 200px;
`;
