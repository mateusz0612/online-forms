import { FC } from "react";
import {
  TextField,
  Stack,
  ConfirmationModal,
  FileInput,
  Progress,
} from "libs/ui";
import { IFormState, IControl } from "libs/development-kit/form";
import { IUserData } from "online-forms/types";
import * as Styled from "./ProfileEditFormModal.styled";

interface Props {
  userData: IUserData;
  disableSubmit: boolean;
  isPending: boolean;
  isOpen: boolean;
  formState: IFormState<IUserData>;
  control: IControl<IUserData>;
  onSubmit: () => void;
  onClose: () => void;
  onProfileImageChange: (file: File) => void;
}

const userEditModalLabels = {
  confirm: "Update user",
};

const ACCEPTED_FILE_TYPES = {
  "image/jpeg": [".jpeg", ".png"],
};
const MAX_FILES_LIMT = 1;

export const ProfileEditFormModal: FC<Props> = ({
  isOpen,
  isPending,
  disableSubmit,
  userData,
  formState,
  control,
  onSubmit,
  onClose,
  onProfileImageChange,
}) => {
  const { errors } = formState;

  return (
    <ConfirmationModal
      isOpen={isOpen}
      labels={userEditModalLabels}
      disabled={{ confirm: disableSubmit }}
      onReject={onClose}
      onConfirm={onSubmit}
    >
      <Styled.Wrapper margin="auto" mt={2} mb={6}>
        <Stack justifyContent="center" alignItems="center" gap={1}>
          {isPending ? (
            <Progress />
          ) : (
            <>
              <Styled.Avatar
                src={userData?.profileImageUrl || "/avatar-placeholder.webp"}
                alt="Avatar"
              />
              <Styled.Username>{userData?.username}</Styled.Username>
            </>
          )}
        </Stack>
        <h2>Edit profile</h2>
        <Stack gap={3}>
          <TextField name="username" label="Username" control={control} />
          <FileInput
            label="Click here to add avatar image"
            onDrop={(acceptedFiles) => onProfileImageChange(acceptedFiles?.[0])}
            accept={ACCEPTED_FILE_TYPES}
            maxFiles={MAX_FILES_LIMT}
          />
        </Stack>
      </Styled.Wrapper>
    </ConfirmationModal>
  );
};
