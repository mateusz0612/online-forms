import { FC } from "react";
import { Tile } from "libs/ui";
import styled from "styled-components";

const Wrapper = styled(Tile)`
  width: 100%;
  min-height: 400px;
`;

export const QuestionAnswerGraph: FC = () => {
  return (
    <Wrapper>
      <h3>Graph</h3>
    </Wrapper>
  );
};
