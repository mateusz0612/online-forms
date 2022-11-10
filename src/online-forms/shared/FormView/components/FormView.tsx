import { FC } from "react";
import { Stack, Radio, TextField, DeleteIcon, EditIcon } from "libs/ui";
import { IAnswer, IQuestion } from "online-forms/types";
import * as Styled from "./FormView.styled";

interface Props {
  questions: IQuestion[];
  isEditMode: boolean;
  handlers?: {
    onDeleteClick: (questionId: string) => void;
    onEditClick: (questionId: string) => void;
  };
}

const AnswerList: FC<{ answers: IAnswer[] }> = ({ answers }) => (
  <Stack>
    {answers?.map(({ id, content }) => (
      <Radio key={id} label={content} checked={false} />
    ))}
  </Stack>
);

const BooleanAnswers: FC = () => {
  return (
    <Stack>
      <Radio label="Yes" checked={false} />
      <Radio label="No" checked={false} />
    </Stack>
  );
};

const TextAnswer: FC = () => {
  return (
    <Stack mt={1}>
      <TextField placeholder="Enter answer..." label="Your answer" />
    </Stack>
  );
};

const getTypeComponent = ({ answers }: { answers: IAnswer[] }) => ({
  options: <AnswerList answers={answers} />,
  boolean: <BooleanAnswers />,
  text: <TextAnswer />,
});

export const FormView: FC<Props> = ({ questions, isEditMode, handlers }) => {
  return (
    <Stack mt={2}>
      {questions?.map(({ id, content, required, answers, type }) => (
        <Styled.Wrapper key={id}>
          <Styled.QuestionWrapper>
            {isEditMode && (
              <Styled.IconsWrapper flexDirection="row" gap={1}>
                <Styled.IconWrapper
                  onClick={
                    handlers ? () => handlers?.onDeleteClick(id) : undefined
                  }
                >
                  <DeleteIcon />
                </Styled.IconWrapper>
                <Styled.IconWrapper
                  onClick={
                    handlers ? () => handlers?.onEditClick(id) : undefined
                  }
                >
                  <EditIcon />
                </Styled.IconWrapper>
              </Styled.IconsWrapper>
            )}
            <Styled.QuestionHeader isQuestionRequired={required}>
              {content}
            </Styled.QuestionHeader>
            {getTypeComponent({ answers })[type]}
          </Styled.QuestionWrapper>
        </Styled.Wrapper>
      ))}
    </Stack>
  );
};
