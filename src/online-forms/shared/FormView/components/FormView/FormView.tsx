import { FC } from "react";
import { HelperText, Stack } from "libs/ui";
import { IControl, IRegister } from "libs/development-kit/form";
import { IAnswer } from "online-forms/types";
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
  control,
  register,
}: FormViewAnswerComponent & { answers: IAnswer[]; id: string }) => ({
  options: <AnswersList questionId={id} answers={answers} control={control} />,
  boolean: <BooleanAnswers questionId={id} control={control} />,
  text: (
    <TextAnswer questionId={id} isEditable={isEditable} register={register} />
  ),
});

export const FormView: FC<FormViewProps> = ({
  questions,
  isEditable,
  control,
  handlers,
  formState,
  register,
}) => {
  return (
    <Stack>
      {questions?.map(({ id, content, required, answers, type }) => (
        <Styled.Wrapper key={id}>
          <Styled.QuestionWrapper>
            {isEditable && <EditHandlers handlers={handlers} id={id} />}
            <Styled.QuestionHeader isQuestionRequired={required}>
              {content}
            </Styled.QuestionHeader>
            {
              getTypeComponent({
                answers,
                isEditable,
                id,
                formState,
                register: register as IRegister<unknown>,
                control: control as IControl<unknown>,
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
