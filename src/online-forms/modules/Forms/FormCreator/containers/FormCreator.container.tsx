import { FC } from "react";
import { Stack, Tile, PrimaryButton, SecondaryButton } from "libs/ui";
import {
  useFormHeader,
  useQuestions,
  useQuestionForm,
  useFormCreator,
} from "../logic";
import {
  FormHeader,
  AddQuestion,
  FormCreatedConfirmationModal,
} from "../components";
import { FormView } from "online-forms/shared/FormView";
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

const Label = styled.p`
  text-align: center;
  margin: 0;
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
    values: formHeaderValues,
    formState: formHeaderFormState,
    register: formHeaderRegister,
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
    formHeaderValues,
  });

  const formViewHandlers = {
    onDeleteClick: onDeleteQuestionClick,
    onEditClick: onEditQuestionClick,
  };

  return (
    <Wrapper width="50vw" margin="auto" mt={4} mb={4}>
      <Tile width="100%">
        <FormHeader
          formState={formHeaderFormState}
          register={formHeaderRegister}
        />
      </Tile>
      <Tile width="100%" mt={2} pb={2} pt={2}>
        {haveNoQuestions && (
          <Label>
            You didn't add any question yet. <br />
            Click add question to begin
          </Label>
        )}
        {!haveNoQuestions && <Label>Preview</Label>}
        <FormView
          questions={questions}
          handlers={formViewHandlers}
          isEditMode
        />
        <Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          margin="auto"
          pl={5}
          pr={5}
        >
          <SecondaryButton onClick={onOpenQuestionModal}>
            Add Question
          </SecondaryButton>
          <PrimaryButton
            disabled={haveNoQuestions || isFormSavePending}
            onClick={onFormSave}
          >
            Save form
          </PrimaryButton>
        </Stack>
      </Tile>
      <AddQuestion
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
