import { FC } from "react";
import { CloseIcon } from "libs/ui";
import { IQuestion } from "online-forms/types";
import { QuestionFormProps } from "../../FormCreator.types";
import { QuestionForm } from "../QuestionForm";
import * as Styled from "./AddQuestion.styled";

interface Props {
  isOpen: boolean;
  questions: IQuestion[];
  onClose: () => void;
}

export const AddQuestion: FC<QuestionFormProps & Props> = ({
  isOpen,
  formState,
  answerFormState,
  control,
  currentPickedType,
  answers,
  onAddQuestionClick,
  onAddAnswerClick,
  onRemoveQuestionClick,
  onClose,
  register,
  answerRegister,
}) => {
  return (
    <Styled.StyledModal
      open={isOpen}
      isAnswerAdderVisible={currentPickedType === "options"}
      haveAnswers={answers?.length >= 1}
    >
      <Styled.Content mt={10} mr={2} ml={2} pb={4}>
        <Styled.ModalHeader pl={3} pr={2}>
          <p>Create Question</p>
          <div onClick={onClose}>
            <CloseIcon />
          </div>
        </Styled.ModalHeader>
        <QuestionForm
          answers={answers}
          currentPickedType={currentPickedType}
          control={control}
          formState={formState}
          answerFormState={answerFormState}
          register={register}
          answerRegister={answerRegister}
          onAddQuestionClick={onAddQuestionClick}
          onAddAnswerClick={onAddAnswerClick}
          onRemoveQuestionClick={onRemoveQuestionClick}
        />
      </Styled.Content>
    </Styled.StyledModal>
  );
};
