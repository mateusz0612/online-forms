import styled, { css } from "styled-components";

export const Tag = styled.p<{ isPicked: boolean }>`
  margin: 0px;
  cursor: pointer;

  :hover {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  ${(props) =>
    props.isPicked &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.bold};
    `}
`;
