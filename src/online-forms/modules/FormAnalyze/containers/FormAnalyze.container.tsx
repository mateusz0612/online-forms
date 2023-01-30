import { FC } from "react";
import { Stack } from "libs/ui";
import {
  AnswerList,
  FormAnswersPreview,
  QuestionAnswerGraph,
} from "../components";
import { useFormAnalyze } from "../logic";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  flex-direction: column;

  @media ${(props) => props.theme.queries.desktop} {
    flex-direction: row;
  }
`;

export const FormAnalyzeContainer: FC = () => {
  const {
    answerWithFormState,
    state,
    control,
    formPreviewRef,
    graphData,
    register,
    onPickedAnswerIdChange,
    onPickedGrahTypeChange,
    onQuestionClick,
  } = useFormAnalyze();

  return (
    <Wrapper width="100%" margin="auto" pl={5} pr={5} gap={2} mt={4}>
      <AnswerList
        answerWithFormState={answerWithFormState}
        pickedAnswerId={state?.pickedAnswerId}
        onPickedAnswerIdChange={onPickedAnswerIdChange}
      />
      <FormAnswersPreview
        ref={formPreviewRef}
        questions={answerWithFormState?.data?.secondStateData?.questions}
        control={control}
        showPreview={state?.pickedAnswerId !== ""}
        onQuestionClick={onQuestionClick}
        register={register}
      />
      <QuestionAnswerGraph
        pickedQuestion={state?.pickedQuestion}
        pickedGraphType={state?.pickedGraphType}
        graphData={graphData}
        onPickedGrahTypeChange={onPickedGrahTypeChange}
      />
    </Wrapper>
  );
};
