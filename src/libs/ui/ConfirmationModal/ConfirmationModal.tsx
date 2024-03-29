import { FC } from "react";
import { Modal, Stack, PrimaryButton, SecondaryButton } from "libs/ui";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onReject?: () => void;
  labels?: {
    confirm?: string;
    reject?: string;
  };
  disabled?: {
    confirm?: boolean;
    reject?: boolean;
  };
  children?: React.ReactElement | React.ReactElement[];
}

const Wrapper = styled(Stack)`
  width: 80%;
  margin: auto;
  min-height: 120px;
  max-height: 90vh;
  background-color: ${(props) => props.theme.pallete.white};
  text-align: center;
  border-radius: 10px;
  outline: none;
  overflow: hidden auto;

  @media ${(props) => props.theme.queries.tablet} {
    width: 30%;
  }
`;

const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmationModal: FC<Props> = ({
  isOpen,
  labels,
  disabled,
  onReject,
  onConfirm,
  children,
}) => {
  return (
    <ModalWrapper open={isOpen}>
      <Wrapper p={1} pb={2}>
        {children}
        <Stack
          width="100%"
          justifyContent="space-between"
          flexDirection="row"
          pl={2}
          pr={2}
        >
          <Stack width="35%" alignSelf="start">
            {onReject && (
              <SecondaryButton onClick={onReject} disabled={disabled?.reject}>
                {labels?.reject || "Close"}
              </SecondaryButton>
            )}
          </Stack>
          <Stack width="35%" alignSelf="end">
            <PrimaryButton onClick={onConfirm} disabled={disabled?.confirm}>
              {labels?.confirm || "Confirm"}
            </PrimaryButton>
          </Stack>
        </Stack>
      </Wrapper>
    </ModalWrapper>
  );
};
