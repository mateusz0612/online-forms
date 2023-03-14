import { FC } from "react";
import { Stack, Doughnut, Pie, GraphProps } from "libs/ui";
import { IQuestion } from "online-forms/types";
import { GraphType } from "../../FormAnalyze.types";
import { PickableTag } from "../PickableTag";
import * as Styled from "./QuestionAnswerGraph.styled";

interface Props {
  pickedQuestion: IQuestion | null;
  pickedGraphType: GraphType;
  graphData: GraphProps;
  onPickedGrahTypeChange: (newGraph: GraphType) => void;
}

export const QuestionAnswerGraph: FC<Props> = ({
  pickedQuestion,
  pickedGraphType,
  graphData,
  onPickedGrahTypeChange,
}) => {
  const showGraph = pickedQuestion && pickedQuestion?.type !== "text";

  if (showGraph) {
    return (
      <Styled.Wrapper>
        <h2>Graph</h2>
        <Styled.HelperText>
          Graph for <span>{pickedQuestion?.content}</span> answers
        </Styled.HelperText>
        <Stack width="100%" justifyContent="center" alignItems="center" pb={2}>
          <Stack width="350px" height="350px">
            {pickedGraphType === GraphType.values ? (
              <Doughnut data={graphData?.data} />
            ) : (
              <Pie data={graphData?.data} />
            )}
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          margin="auto"
          width="40%"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <PickableTag
            isPicked={pickedGraphType === GraphType.values}
            label="# of answers"
            onClick={() => onPickedGrahTypeChange(GraphType.values)}
          />
          <PickableTag
            isPicked={pickedGraphType === GraphType.percentages}
            label="% of answers"
            onClick={() => onPickedGrahTypeChange(GraphType.percentages)}
          />
        </Stack>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <h2>Graph</h2>
      {!pickedQuestion && (
        <Styled.HelperText>
          Click on question in <span>form preview</span> to see answers graph
        </Styled.HelperText>
      )}
      {pickedQuestion?.type === "text" && (
        <Styled.HelperText>
          No graph available for user input question type
        </Styled.HelperText>
      )}
    </Styled.Wrapper>
  );
};
