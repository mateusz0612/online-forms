import styled, { css } from "styled-components";

export const Tag = styled.p<{ isPicked: boolean }>`
  margin: 0px;
  cursor: pointer;

  :hover {
    font-weight: 600;
  }

  ${(props) =>
    props.isPicked &&
    css`
      font-weight: 600;
    `}
`;
