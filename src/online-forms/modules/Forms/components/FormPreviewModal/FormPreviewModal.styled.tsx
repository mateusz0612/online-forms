import styled from "styled-components";

export const Title = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Description = styled.p`
  font-size: 12px;
  white-space: pre-line;
`;
