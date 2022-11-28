import { FC } from "react";
import { ConfirmationModal } from "libs/ui";
import * as Styled from "./FormAnswerSuccessModal.styled";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
}

const formAnswerSuccessModal = {
  reject: "",
  confirm: "Exit",
};

export const FormAnswerSuccessModal: FC<Props> = (props) => {
  return (
    <ConfirmationModal {...props} labels={formAnswerSuccessModal}>
      <Styled.Header>Everything went great :)</Styled.Header>
      <Styled.Description>
        Your answers were successfully submited and send! <br /> Thanks for
        sharing your time!
      </Styled.Description>
    </ConfirmationModal>
  );
};
