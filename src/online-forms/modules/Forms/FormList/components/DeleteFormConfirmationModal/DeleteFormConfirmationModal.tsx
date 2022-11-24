import { FC } from "react";
import { ConfirmationModal } from "libs/ui";
import * as Styled from "./DeleteFormConfirmationModal.styled";

interface Props {
  isOpen: boolean;
  formName: string;
  onConfirm: () => void;
  onClose: () => void;
}

const deleteFormConfirmationModalLabels = {
  close: "No, close",
  confirm: "Yes, delete",
};

export const DeleteFormConfirmationModal: FC<Props> = ({
  isOpen,
  formName,
  onConfirm,
  onClose,
}) => {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      labels={deleteFormConfirmationModalLabels}
      onConfirm={onConfirm}
      onReject={onClose}
    >
      <Styled.Wrapper>
        <h3>
          Are you sure you want to <span>delete {formName}</span>?
        </h3>
      </Styled.Wrapper>
    </ConfirmationModal>
  );
};
