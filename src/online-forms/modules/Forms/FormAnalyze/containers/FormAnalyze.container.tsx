import { FC } from "react";
import { Stack } from "libs/ui";
import {
  AnswerList,
  FormAnswersPreview,
  QuestionAnswerGraph,
} from "../components";
import { useFormAnswers } from "../logic";
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
    pickedAnswerId,
    pickedQuestion,
    control,
    formPreviewRef,
    graphData,
    register,
    onPickedAnswerIdChange,
    onQuestionClick,
  } = useFormAnswers();

  return (
    <Wrapper width="100%" margin="auto" pl={5} pr={5} gap={2} mt={4}>
      <AnswerList
        answerWithFormState={answerWithFormState}
        pickedAnswerId={pickedAnswerId}
        onPickedAnswerIdChange={onPickedAnswerIdChange}
      />
      <FormAnswersPreview
        ref={formPreviewRef}
        questions={answerWithFormState?.data?.secondStateData?.questions}
        control={control}
        showPreview={pickedAnswerId !== ""}
        onQuestionClick={onQuestionClick}
        register={register}
      />
      <QuestionAnswerGraph
        pickedQuestion={pickedQuestion}
        graphData={graphData}
      />
    </Wrapper>
  );
};
