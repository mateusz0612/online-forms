import { FC } from "react";
import { Stack, Radio, TextField, ControlledRadio } from "libs/ui";
import { IControl, IRegister } from "libs/development-kit/form";
import { IAnswer, IQuestion } from "online-forms/types";
import { EditHandlers } from "../EditHandlers";
import { IHandlers } from "../../FormView.types";
import * as Styled from "./FormView.styled";

interface Props {
  questions: IQuestion[];
  isEditable: boolean;
  control?: IControl<unknown>;
  register?: IRegister<unknown>;
  handlers?: IHandlers;
}

const AnswerList: FC<{
  questionId: string;
  answers: IAnswer[];
  control: IControl<unknown>;
}> = ({ questionId, answers, control }) => (
  <Stack>
    {answers?.map(({ id, content }) => {
      if (control) {
        return (
          <ControlledRadio
            key={id}
            name={questionId}
            control={control}
            label={content}
            value={content}
          />
        );
      }

      return <Radio key={id} label={content} checked={false} />;
    })}
  </Stack>
);

const BooleanAnswers: FC<{
  questionId: string;
  control: IControl<unknown>;
}> = ({ questionId, control }) => {
  return (
    <Stack>
      {control ? (
        <>
          <ControlledRadio
            name={questionId}
            control={control}
            label="Yes"
            value="yes"
          />
          <ControlledRadio
            name={questionId}
            control={control}
            label="No"
            value="no"
          />
        </>
      ) : (
        <>
          <Radio label="Yes" checked={false} />
          <Radio label="No" checked={false} />
        </>
      )}
    </Stack>
  );
};

const TextAnswer: FC<{
  questionId: string;
  isEditable: boolean;
  register: IRegister<unknown>;
}> = ({ questionId, isEditable, register }) => {
  return (
    <Stack mt={1}>
      <TextField
        label="User answer"
        disabled={isEditable}
        {...register(questionId as never)}
      />
    </Stack>
  );
};

const getTypeComponent = ({
  answers,
  id,
  isEditable,
  register,
  control,
}: {
  answers: IAnswer[];
  id: string;
  isEditable: boolean;
  register: IRegister<unknown>;
  control: IControl<unknown>;
}) => ({
  options: <AnswerList questionId={id} answers={answers} control={control} />,
  boolean: <BooleanAnswers questionId={id} control={control} />,
  text: (
    <TextAnswer questionId={id} isEditable={isEditable} register={register} />
  ),
});

export const FormView: FC<Props> = ({
  questions,
  isEditable,
  control,
  register,
  handlers,
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
                register: register as IRegister<unknown>,
                control: control as IControl<unknown>,
              })[type]
            }
          </Styled.QuestionWrapper>
        </Styled.Wrapper>
      ))}
    </Stack>
  );
};
