import { FC } from "react";
import { FormView } from "online-forms/shared/FormView";
import { ConfirmationModal, Stack } from "libs/ui";
import { IForm } from "online-forms/types";
import * as Styled from "./FormPreviewModal.styled";

interface Props {
  isOpen: boolean;
  currentPickedForm: IForm;
  onConfirm: () => void;
}

export const FormPreviewModal: FC<Props> = ({
  isOpen,
  currentPickedForm,
  onConfirm,
}) => {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      onConfirm={onConfirm}
      labels={{ confirm: "Close" }}
    >
      <Stack pl={3} pr={3}>
        <Styled.Title>{currentPickedForm?.name}</Styled.Title>
        <Styled.Description>
          {currentPickedForm?.description}
        </Styled.Description>
        <FormView questions={currentPickedForm?.questions} isEditable={false} />
      </Stack>
    </ConfirmationModal>
  );
};
