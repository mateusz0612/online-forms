import { FC } from "react";
import { HelperText, Stack } from "libs/ui";
import { IControl, IRegister } from "libs/development-kit/form";
import { IAnswer, FormData } from "online-forms/types";
import { EditHandlers } from "../EditHandlers";
import { AnswersList } from "../AnswersList";
import { BooleanAnswers } from "../BooleanAnswers";
import { TextAnswer } from "../TextAnswer";
import { FormViewProps, FormViewAnswerComponent } from "../../FormView.types";
import * as Styled from "./FormView.styled";

const getTypeComponent = ({
  answers,
  id,
  isEditable,
  isValueEditDisabled,
  control,
  register,
}: FormViewAnswerComponent & { answers: IAnswer[]; id: string }) => ({
  options: (
    <AnswersList
      questionId={id}
      isEditable={isEditable}
      isValueEditDisabled={isValueEditDisabled}
      answers={answers}
      control={control}
    />
  ),
  boolean: (
    <BooleanAnswers
      questionId={id}
      isEditable={isEditable}
      isValueEditDisabled={isValueEditDisabled}
      control={control}
    />
  ),
  text: (
    <TextAnswer
      questionId={id}
      isEditable={isEditable}
      isValueEditDisabled={isValueEditDisabled}
      register={register}
    />
  ),
});

export const FormView: FC<FormViewProps> = ({
  questions,
  isEditable,
  isValueEditDisabled = false,
  control,
  handlers,
  formState,
  register,
  onQuestionClick,
}) => {
  return (
    <Stack>
      {questions?.map(({ id, content, required, answers, type }) => (
        <Styled.Wrapper
          key={id}
          onClickEnabled={!!onQuestionClick}
          onClick={() => (onQuestionClick ? onQuestionClick(id) : undefined)}
        >
          <Styled.QuestionWrapper>
            {isEditable && <EditHandlers handlers={handlers} id={id} />}
            <Styled.QuestionHeader isQuestionRequired={required}>
              {content}
            </Styled.QuestionHeader>
            {
              getTypeComponent({
                answers,
                isEditable,
                isValueEditDisabled,
                id,
                control: control as IControl<FormData>,
                register: register as IRegister<FormData>,
              })[type]
            }
            <HelperText
              text={
                (formState?.errors as Record<string, { message: string }>)?.[
                  `${id}`
                ]?.message
              }
            />
          </Styled.QuestionWrapper>
        </Styled.Wrapper>
      ))}
    </Stack>
  );
};
