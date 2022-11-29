import { FC } from "react";
import { TextField, Stack, ConfirmationModal } from "libs/ui";
import { IRegister } from "libs/development-kit/form";
import { IUserData } from "online-forms/types";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  disableSubmit: boolean;
  userData: IUserData;
  register: IRegister<IUserData>;
  onSubmit: () => void;
  onClose: () => void;
}

const Wrapper = styled(Stack)`
  width: 93%;
`;

const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`;

const Username = styled.p`
  margin: 0;
  font-weight: 600;
`;

const userEditModalLabels = {
  confirm: "Update user",
};

export const ProfileEditForm: FC<Props> = ({
  isOpen,
  disableSubmit,
  userData,
  register,
  onSubmit,
  onClose,
}) => {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      labels={userEditModalLabels}
      disabled={{ confirm: disableSubmit }}
      onReject={onClose}
      onConfirm={onSubmit}
    >
      <Wrapper margin="auto" mt={2} mb={6}>
        <Stack justifyContent="center" alignItems="center" gap={1}>
          <Avatar src="/avatar-placeholder.webp" alt="Avatar" />
          <Username>{userData?.username}</Username>
        </Stack>
        <h2>Edit profile</h2>
        <TextField label="Username" {...register("username")} />
      </Wrapper>
    </ConfirmationModal>
  );
};
