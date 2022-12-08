import { Tile } from "libs/ui";
import styled from "styled-components";

export const Wrapper = styled(Tile)`
  width: 100%;
  height: 600px;

  @media ${(props) => props.theme.queries.desktop} {
    width: 20%;
  }
`;

export const AnswerInfo = styled.p`
  margin: 0;
  padding-right: 12px;
  font-weight: 600;

  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
