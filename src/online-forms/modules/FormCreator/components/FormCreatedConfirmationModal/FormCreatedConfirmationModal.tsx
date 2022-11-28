import { FC } from "react";
import { ConfirmationModal } from "libs/ui";
import * as Styled from "./FormCreatedConfirmationModal.styled";

interface Props {
  isOpen: boolean;
  createdFormId: string;
  onClose: () => void;
  onCopyLinkClick: (link: string) => void;
}

const formCreatedConfirmationModalLabels = {
  reject: "Copy link",
  confirm: "Close",
};

export const FormCreatedConfirmationModal: FC<Props> = ({
  isOpen,
  createdFormId,
  onClose,
  onCopyLinkClick,
}) => {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      labels={formCreatedConfirmationModalLabels}
      onReject={() => onCopyLinkClick(createdFormId)}
      onConfirm={onClose}
    >
      <Styled.Content justifyContent="center" alignItems="center">
        <h3>Form was successfully created! :)</h3>
        <p>
          Your form is available at <br />
          <span>
            {window.location.href}/answer/${createdFormId}
          </span>
        </p>
      </Styled.Content>
    </ConfirmationModal>
  );
};
