import { FC } from "react";
import { ProfileEditModuleProps } from "../ProfileEdit.types";
import { ProfileEditFormModal } from "../components";
import { useProfileEditForm } from "../logic";

export const ProfileEditContainer: FC<ProfileEditModuleProps> = (props) => {
  const {
    isUserEditingPending,
    disableSubmit,
    userData,
    register,
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
      register={register}
      onClose={onUserEditClose}
      onSubmit={onUserEditSubmit}
      onProfileImageChange={onProfileImageAdd}
    />
  );
};
