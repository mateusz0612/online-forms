import { Stack } from "libs/ui";
import styled from "styled-components";

export const Wrapper = styled(Stack)`
  width: 93%;
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`;

export const Username = styled.p`
  margin: 0;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
