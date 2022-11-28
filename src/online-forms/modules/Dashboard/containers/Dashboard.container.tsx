import { FC } from "react";
import { Dashboard } from "../components";
import { useDashboard } from "../logic";

export const DashboardContainer: FC = () => {
  const {
    allFormsVisible,
    visibleFormsLimit,
    onCreateFormClick,
    onSeeAllClick,
    onSeeLessClick,
  } = useDashboard();

  return (
    <Dashboard
      allFormsVisible={allFormsVisible}
      visibleFormsLimit={visibleFormsLimit}
      onCreateFormClick={onCreateFormClick}
      onSeeAllClick={onSeeAllClick}
      onSeeLessClick={onSeeLessClick}
    />
  );
};
