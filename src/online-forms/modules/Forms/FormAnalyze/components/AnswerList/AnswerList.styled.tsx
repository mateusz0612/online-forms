import { Tile } from "libs/ui";
import styled, { css } from "styled-components";

export const Wrapper = styled(Tile)`
  width: 40%;
  height: 400px;
  overflow: auto;
`;

export const AnswerLength = styled.p`
  margin: 0;
`;

export const Answer = styled.p<{ isPicked: boolean }>`
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
