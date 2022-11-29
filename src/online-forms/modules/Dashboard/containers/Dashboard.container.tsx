import { FC } from "react";
import { Dashboard, ProfileEditForm } from "../components";
import { useDashboard, useProfileEditForm } from "../logic";

export const DashboardContainer: FC = () => {
  const {
    allFormsVisible,
    visibleFormsLimit,
    onCreateFormClick,
    onSeeAllClick,
    onSeeLessClick,
  } = useDashboard();

  const {
    userData,
    isProfileEditFormOpen,
    disableSubmit,
    register,
    onEditProfileClick,
    onEditProfileClose,
    onUserEditSubmit,
  } = useProfileEditForm();

  return (
    <>
      <Dashboard
        allFormsVisible={allFormsVisible}
        visibleFormsLimit={visibleFormsLimit}
        onCreateFormClick={onCreateFormClick}
        onSeeAllClick={onSeeAllClick}
        onSeeLessClick={onSeeLessClick}
        onEditProfileClick={onEditProfileClick}
      />
      <ProfileEditForm
        isOpen={isProfileEditFormOpen}
        disableSubmit={disableSubmit}
        userData={userData}
        register={register}
        onSubmit={onUserEditSubmit}
        onClose={onEditProfileClose}
      />
    </>
  );
};
