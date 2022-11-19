import { FC } from "react";
import { PrimaryButton, CloseIcon } from "libs/ui";
import * as Styled from "./FormCreatedConfirmationModal.styled";

interface Props {
  isOpen: boolean;
  createdFormId: string;
  onClose: () => void;
  onCopyLinkClick: (link: string) => void;
}

export const FormCreatedConfirmationModal: FC<Props> = ({
  isOpen,
  createdFormId,
  onClose,
  onCopyLinkClick,
}) => {
  const link = `${window.location.href}/answer/${createdFormId}`;

  return (
    <Styled.ModalWrapper open={isOpen}>
      <Styled.Content justifyContent="center" alignItems="center">
        <div onClick={onClose}>
          <CloseIcon />
        </div>
        <h3>Form was successfully created! :)</h3>
        <p>
          Your form is available at <br />
          <span>{link}</span>
        </p>
        <PrimaryButton onClick={() => onCopyLinkClick(link)}>
          Copy link
        </PrimaryButton>
      </Styled.Content>
    </Styled.ModalWrapper>
  );
};
