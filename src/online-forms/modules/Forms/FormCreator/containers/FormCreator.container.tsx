import { FC } from "react";
import { Stack, Tile, PrimaryButton, SecondaryButton } from "libs/ui";
import {
  useFormHeader,
  useQuestions,
  useQuestionForm,
  useForm,
} from "../logic";
import { FormHeader, AddQuestion } from "../components";
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
    isFormHeaderEdited,
    formHeaderRef,
    values: formHeaderValues,
    formState: formHeaderFormState,
    register: formHeaderRegister,
    onFormHeaderClick,
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

  const { onFormSave, isFormSavePending } = useForm({
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
          isEditMode={isFormHeaderEdited}
          ref={formHeaderRef}
          values={formHeaderValues}
          formState={formHeaderFormState}
          register={formHeaderRegister}
          onFormHeaderClick={onFormHeaderClick}
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
        <Stack flexDirection="row" gap={1} margin="auto" pt={1}>
          <PrimaryButton
            disabled={haveNoQuestions || isFormSavePending}
            onClick={onFormSave}
          >
            Save form
          </PrimaryButton>
          <SecondaryButton onClick={onOpenQuestionModal}>
            Add Question
          </SecondaryButton>
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
    </Wrapper>
  );
};
