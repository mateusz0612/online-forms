import { Stack } from "libs/ui";
import styled from "styled-components";

export const Content = styled(Stack)`
  span {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
