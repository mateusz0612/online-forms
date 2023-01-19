import { Stack, Tile } from "libs/ui";
import styled from "styled-components";

export const Wrapper = styled(Tile)`
  width: 100%;
  height: 600px;

  @media ${(props) => props.theme.queries.desktop} {
    width: 50%;
  }
`;

export const ScrollableContent = styled(Stack)`
  overflow: auto;
  scroll-behavior: smooth;
`;

export const NoPreviewInfo = styled.p`
  text-align: center;

  span {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
