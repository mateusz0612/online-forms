import { FC } from "react";
import { CloseIcon } from "libs/ui";
import { IQuestion } from "online-forms/types";
import { AddQuestionProps } from "../../FormCreator.types";
import { AddQuestionForm } from "../AddQuestionForm";
import * as Styled from "./AddQuestion.styled";

interface Props {
  isOpen: boolean;
  questions: IQuestion[];
  onClose: () => void;
}

export const AddQuestion: FC<AddQuestionProps & Props> = ({
  isOpen,
  formState,
  answerFormState,
  control,
  currentPickedType,
  answers,
  onAddQuestionClick,
  onAddAnswerClick,
  onClose,
  register,
  answerRegister,
}) => {
  return (
    <Styled.StyledModal open={isOpen}>
      <Styled.Content mt={10} mr={2} ml={2} pb={4}>
        <Styled.ModalHeader pl={3} pr={2}>
          <p>Create Question</p>
          <div onClick={onClose}>
            <CloseIcon />
          </div>
        </Styled.ModalHeader>
        <AddQuestionForm
          register={register}
          answerRegister={answerRegister}
          onAddQuestionClick={onAddQuestionClick}
          onAddAnswerClick={onAddAnswerClick}
          answers={answers}
          currentPickedType={currentPickedType}
          control={control}
          formState={formState}
          answerFormState={answerFormState}
        />
      </Styled.Content>
    </Styled.StyledModal>
  );
};
