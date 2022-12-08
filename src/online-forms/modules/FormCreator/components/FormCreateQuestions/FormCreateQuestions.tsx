import { FC } from "react";
import { Tile, Stack, PrimaryButton, SecondaryButton } from "libs/ui";
import { FormView } from "online-forms/shared/FormView";
import { IQuestion } from "online-forms/types";
import { IHandlers } from "online-forms/shared/FormView/FormView.types";
import styled from "styled-components";

const Label = styled.p`
  text-align: center;
  margin: 0;
`;

interface Props {
  haveNoQuestions: boolean;
  isFormSavePending: boolean;
  questions: IQuestion[];
  formViewHandlers: IHandlers;
  onFormSave: () => void;
  onOpenQuestionModal: () => void;
}

export const FormCreateQuestions: FC<Props> = ({
  haveNoQuestions,
  isFormSavePending,
  questions,
  formViewHandlers,
  onOpenQuestionModal,
  onFormSave,
}) => {
  return (
    <Tile width="100%" mt={2} pb={2} pt={2}>
      {haveNoQuestions && (
        <Label>
          You didn't add any question yet. <br />
          Click add question to begin
        </Label>
      )}
      {!haveNoQuestions && <Label>Preview</Label>}
      <Stack pl={5} pr={5} mt={2} mb={2}>
        <FormView
          questions={questions}
          handlers={formViewHandlers}
          isEditable
        />
      </Stack>
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
  );
};
