import { Stack, Tile } from "libs/ui";
import styled from "styled-components";

export const Wrapper = styled(Tile)`
  width: 60%;
  height: 400px;
`;

export const ScrollableContent = styled(Stack)`
  overflow: auto;
  scroll-behavior: smooth;
`;

export const NoPreviewInfo = styled.p`
  text-align: center;
`;
