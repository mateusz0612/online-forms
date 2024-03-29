import { FC } from "react";
import { ProfileEditModuleProps } from "../ProfileEdit.types";
import { ProfileEditFormModal } from "../components";
import { useProfileEditForm } from "../logic";

export const ProfileEditContainer: FC<ProfileEditModuleProps> = (props) => {
  const {
    isUserEditingPending,
    disableSubmit,
    userData,
    formState,
    control,
    onUserEditClose,
    onUserEditSubmit,
    onProfileImageAdd,
  } = useProfileEditForm(props);

  return (
    <ProfileEditFormModal
      isPending={isUserEditingPending}
      disableSubmit={disableSubmit}
      userData={userData}
      isOpen={props?.isOpen}
      formState={formState}
      control={control}
      onClose={onUserEditClose}
      onSubmit={onUserEditSubmit}
      onProfileImageChange={onProfileImageAdd}
    />
  );
};
