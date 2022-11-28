import styled from "styled-components";
import { Stack } from "libs/ui";

export const IconWrapper = styled.div`
  svg {
    font-size: 24px;

    :hover {
      color: ${(props) => props.theme.pallete.primary};
    }
  }
`;

export const LoadingWrapper = styled(Stack)`
  width: 100%;
  min-height: 200px;
`;

export const NoFormsLabel = styled.p`
  width: 100%;
  text-align: center;
`;
