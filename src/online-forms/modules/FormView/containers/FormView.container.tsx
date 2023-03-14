import { FC } from "react";
import { HelperText, Stack } from "libs/ui";
import { IControl } from "libs/development-kit/form";
import { FormData } from "online-forms/types";
import {
  EditHandlers,
  AnswersList,
  BooleanAnswers,
  TextAnswer,
} from "../components";
import { FormViewProps, FormViewAnswerComponent } from "../FormView.types";
import * as Styled from "./FormView.styled";

const getTypeComponent = ({ ...props }: FormViewAnswerComponent) => ({
  options: <AnswersList {...props} />,
  boolean: <BooleanAnswers {...props} />,
  text: <TextAnswer {...props} />,
});

export const FormViewContainer: FC<FormViewProps> = ({
  questions,
  isEditable,
  isValueEditDisabled = false,
  control,
  handlers,
  formState,
  onQuestionClick,
}) => {
  return (
    <Stack>
      {questions?.map(({ id, content, required, multiple, answers, type }) => (
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
            {multiple && <HelperText text="You can choose multiple answers" />}
            {
              getTypeComponent({
                answers,
                multiple,
                isEditable,
                isValueEditDisabled,
                questionId: id,
                control: control as IControl<FormData>,
              })[type]
            }
            <HelperText
              text={
                (formState?.errors as Record<string, { message: string }>)?.[
                  `${id}`
                ]?.message
              }
              apperance="error"
            />
          </Styled.QuestionWrapper>
        </Styled.Wrapper>
      ))}
    </Stack>
  );
};
