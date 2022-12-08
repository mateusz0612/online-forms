import { FC } from "react";
import { ProfileEdit } from "online-forms/modules/ProfileEdit";
import { DashboardView } from "../components";
import { useDashboard } from "../logic";

export const DashboardContainer: FC = () => {
  const {
    allFormsVisible,
    visibleFormsLimit,
    isProfileEditOpen,
    onCreateFormClick,
    onSeeAllClick,
    onSeeLessClick,
    onCloseEditProfileClick,
    onEditProfileClick,
  } = useDashboard();

  return (
    <>
      <DashboardView
        allFormsVisible={allFormsVisible}
        visibleFormsLimit={visibleFormsLimit}
        onCreateFormClick={onCreateFormClick}
        onSeeAllClick={onSeeAllClick}
        onSeeLessClick={onSeeLessClick}
        onEditProfileClick={onEditProfileClick}
      />
      <ProfileEdit
        isOpen={isProfileEditOpen}
        onClose={onCloseEditProfileClick}
      />
    </>
  );
};
