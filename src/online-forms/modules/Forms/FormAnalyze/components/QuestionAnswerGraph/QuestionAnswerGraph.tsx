import { FC } from "react";
import { Stack, Doughnut } from "libs/ui";
import { IQuestion } from "online-forms/types";
import { IQuestionAnswersGraphData } from "../../FormAnalyze.types";
import * as Styled from "./QuestionAnswerGraph.styled";

interface Props {
  pickedQuestion: IQuestion | null;
  graphData: IQuestionAnswersGraphData;
}

export const QuestionAnswerGraph: FC<Props> = ({
  pickedQuestion,
  graphData,
}) => {
  const showGraph = pickedQuestion && pickedQuestion?.type !== "text";

  return (
    <Styled.Wrapper>
      <h2>Graph</h2>
      {!pickedQuestion && (
        <Styled.HelperText>
          Click on question in <span>form preview</span> to see answers graph
        </Styled.HelperText>
      )}
      {showGraph && (
        <Styled.HelperText>
          Graph for <span>{pickedQuestion?.content}</span> answers
        </Styled.HelperText>
      )}
      {pickedQuestion?.type === "text" && (
        <Styled.HelperText>
          No graph available for user input question type
        </Styled.HelperText>
      )}
      {showGraph && (
        <Stack width="100%" justifyContent="center" alignItems="center" pb={2}>
          <Stack width="350px" height="350px">
            <Doughnut data={graphData} />
          </Stack>
        </Stack>
      )}
    </Styled.Wrapper>
  );
};
