import { FC } from "react";
import { ProfileEditContainer } from "./containers";
import { ProfileEditModuleProps } from "./ProfileEdit.types";

export const ProfileEdit: FC<ProfileEditModuleProps> = (props) => {
  return <ProfileEditContainer {...props} />;
};
