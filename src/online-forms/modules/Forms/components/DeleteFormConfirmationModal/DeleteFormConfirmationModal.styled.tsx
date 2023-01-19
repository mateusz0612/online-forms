import styled from "styled-components";
import { Stack } from "libs/ui";

export const Wrapper = styled(Stack)`
  h3 {
    text-align: center;
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }

  span {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
