import { FC } from "react";
import { Stack } from "libs/ui";
import {
  useFormHeader,
  useQuestions,
  useQuestionForm,
  useFormCreator,
} from "../logic";
import {
  FormHeader,
  AddQuestionModal,
  FormCreatedConfirmationModal,
  FormCreateQuestions,
} from "../components";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  width: 90vw;

  @media ${(props) => props.theme.queries.tablet} {
    width: 60vw;
  }

  @media ${(props) => props.theme.queries.desktop} {
    width: 40vw;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding-bottom: 10px;
  letter-spacing: 1px;
`;

export const FormCreatorContainer: FC = () => {
  const {
    questions,
    haveNoQuestions,
    addQuestion,
    editQuestion,
    onDeleteQuestionClick,
  } = useQuestions();

  const {
    formState: formHeaderFormState,
    register: formHeaderRegister,
    handleSubmit: handleFormHeaderSubmit,
  } = useFormHeader();

  const {
    isQuestionModalOpen,
    currentPickedType,
    answerFormState,
    answers,
    formState: addQuestionFormState,
    control: addQuestionControl,
    register: addQuestionRegister,
    answerRegister,
    onAddQuestionClick,
    onRemoveAnswerClick,
    onEditQuestionClick,
    onAddAnswerClick,
    onOpenQuestionModal,
    closeQuestionModal,
  } = useQuestionForm({ questions, addQuestion, editQuestion });

  const {
    isFormCreatedConfirmationVisible,
    isFormSavePending,
    createdFormId,
    onFormSave,
    onCloseFormCreatedConfirmationModal,
    onCopyLinkClick,
  } = useFormCreator({
    questions,
    handleFormHeaderSubmit,
  });

  const formViewHandlers = {
    onDeleteClick: onDeleteQuestionClick,
    onEditClick: onEditQuestionClick,
  };

  return (
    <Wrapper width="50vw" margin="auto" mt={4} mb={4}>
      <Title>Create form</Title>
      <FormHeader
        formState={formHeaderFormState}
        register={formHeaderRegister}
      />
      <FormCreateQuestions
        haveNoQuestions={haveNoQuestions}
        isFormSavePending={isFormSavePending}
        formViewHandlers={formViewHandlers}
        questions={questions}
        onFormSave={onFormSave}
        onOpenQuestionModal={onOpenQuestionModal}
      />
      <AddQuestionModal
        isOpen={isQuestionModalOpen}
        formState={addQuestionFormState}
        answerFormState={answerFormState}
        control={addQuestionControl}
        questions={questions}
        currentPickedType={currentPickedType}
        answers={answers}
        onClose={closeQuestionModal}
        onAddQuestionClick={onAddQuestionClick}
        onAddAnswerClick={onAddAnswerClick}
        onRemoveQuestionClick={onRemoveAnswerClick}
        register={addQuestionRegister}
        answerRegister={answerRegister}
      />
      <FormCreatedConfirmationModal
        isOpen={isFormCreatedConfirmationVisible}
        createdFormId={`${createdFormId}`}
        onClose={onCloseFormCreatedConfirmationModal}
        onCopyLinkClick={onCopyLinkClick}
      />
    </Wrapper>
  );
};
