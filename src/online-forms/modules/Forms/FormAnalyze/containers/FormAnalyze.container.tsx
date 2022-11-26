import { FC } from "react";
import { Stack } from "libs/ui";
import {
  AnswerList,
  FormAnswersPreview,
  QuestionAnswerGraph,
} from "../components";
import { useFormAnswers } from "../logic";

export const FormAnalyzeContainer: FC = () => {
  const {
    answerWithFormState,
    pickedAnswerId,
    control,
    formPreviewRef,
    register,
    onPickedAnswerIdChange,
  } = useFormAnswers();

  return (
    <Stack width="100%" mt={4}>
      <Stack width="60%" margin="auto" flexDirection="row" gap={3}>
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
          register={register}
        />
      </Stack>
      <Stack width="60%" margin="auto" flexDirection="row" mt={2}>
        <QuestionAnswerGraph />
      </Stack>
    </Stack>
  );
};
