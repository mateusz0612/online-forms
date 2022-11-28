import { FC } from "react";
import { Stack, Doughnut, Pie } from "libs/ui";
import { IQuestion } from "online-forms/types";
import { IQuestionAnswersGraphData, Graph } from "../../FormAnalyze.types";
import * as Styled from "./QuestionAnswerGraph.styled";

interface Props {
  pickedQuestion: IQuestion | null;
  pickedGraphType: Graph;
  graphData: IQuestionAnswersGraphData;
  onPickedGrahTypeChange: (newGraph: Graph) => void;
}

export const QuestionAnswerGraph: FC<Props> = ({
  pickedQuestion,
  pickedGraphType,
  graphData,
  onPickedGrahTypeChange,
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
            {pickedGraphType === Graph.values ? (
              <Doughnut data={graphData} />
            ) : (
              <Pie data={graphData} />
            )}
          </Stack>
        </Stack>
      )}
      <Stack
        flexDirection="row"
        margin="auto"
        width="40%"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Styled.GraphTypeLabel
          isPicked={pickedGraphType === Graph.values}
          onClick={() => onPickedGrahTypeChange(Graph.values)}
        >
          # of answers
        </Styled.GraphTypeLabel>
        <Styled.GraphTypeLabel
          isPicked={pickedGraphType === Graph.percentages}
          onClick={() => onPickedGrahTypeChange(Graph.percentages)}
        >
          % of answers
        </Styled.GraphTypeLabel>
      </Stack>
    </Styled.Wrapper>
  );
};
