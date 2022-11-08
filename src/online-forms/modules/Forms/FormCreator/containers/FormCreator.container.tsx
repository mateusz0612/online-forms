import { FC } from "react";
import { Stack, Tile, AddIcon } from "libs/ui";
import { useFormHeader, useAddQuestion, useQuestions } from "../logic";
import { FormHeader, AddQuestion } from "../components";
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

const AddIconWrapper = styled.div`
  position: absolute;
  right: 5px;
  bottom: 0;
  cursor: pointer;

  svg {
    font-size: 64px;
  }

  :hover {
    color: ${(props) => props.theme.pallete.primary};
  }
`;

const NoQuestionDisclaimer = styled.p`
  text-align: center;
`;

export const FormCreatorContainer: FC = () => {
  const { questions, addQuestion } = useQuestions();

  const {
    isFormHeaderEdited,
    formHeaderRef,
    values,
    formState: formHeaderFormState,
    register: formHeaderRegister,
    onFormHeaderClick,
  } = useFormHeader();

  const {
    isAddQuestionModalOpen,
    currentPickedType,
    answerFormState,
    answers,
    formState: addQuestionFormState,
    control: addQuestionControl,
    register: addQuestionRegister,
    answerRegister,
    onAddQuestionClick,
    onAddAnswerClick,
    openAddQuestionModal,
    closeAddQuestionModal,
  } = useAddQuestion(addQuestion);

  return (
    <Wrapper width="50vw" margin="auto" mt={4}>
      <Tile width="100%">
        <FormHeader
          isEditMode={isFormHeaderEdited}
          ref={formHeaderRef}
          values={values}
          formState={formHeaderFormState}
          register={formHeaderRegister}
          onFormHeaderClick={onFormHeaderClick}
        />
      </Tile>
      <Tile width="100%" mt={2} minHeight={150}>
        {questions?.length === 0 && (
          <NoQuestionDisclaimer>
            You didn't add any question yet. <br />
            Click plus icon to add question
          </NoQuestionDisclaimer>
        )}
        <pre>{JSON.stringify(questions, null, 2)}</pre>
        <AddIconWrapper onClick={openAddQuestionModal}>
          <AddIcon />
        </AddIconWrapper>
      </Tile>
      <AddQuestion
        isOpen={isAddQuestionModalOpen}
        formState={addQuestionFormState}
        answerFormState={answerFormState}
        control={addQuestionControl}
        questions={questions}
        currentPickedType={currentPickedType}
        answers={answers}
        onClose={closeAddQuestionModal}
        onAddQuestionClick={onAddQuestionClick}
        onAddAnswerClick={onAddAnswerClick}
        register={addQuestionRegister}
        answerRegister={answerRegister}
      />
    </Wrapper>
  );
};
