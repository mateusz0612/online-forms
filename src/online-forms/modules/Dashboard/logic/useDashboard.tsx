import { useState } from "react";
import { useNavigate } from "libs/development-kit/routing";
import { Paths } from "online-forms/routes";

const DEFAULT_VISIBLE_FORM_LIMIT = 3;
const MAX_VISIBLE_FORMS_LIMIT = 99999;

export const useDashboard = () => {
  const [visibleFormsLimit, setVisibleFormsLimit] = useState(
    DEFAULT_VISIBLE_FORM_LIMIT
  );
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const navigate = useNavigate();

  const allFormsVisible = visibleFormsLimit === MAX_VISIBLE_FORMS_LIMIT;

  const onSeeAllClick = () => setVisibleFormsLimit(MAX_VISIBLE_FORMS_LIMIT);

  const onSeeLessClick = () => setVisibleFormsLimit(DEFAULT_VISIBLE_FORM_LIMIT);

  const onCreateFormClick = () => navigate(Paths.CreateForm);

  const onEditProfileClick = () => setIsProfileEditOpen(true);

  const onCloseEditProfileClick = () => setIsProfileEditOpen(false);

  return {
    visibleFormsLimit,
    allFormsVisible,
    isProfileEditOpen,
    onCreateFormClick,
    onSeeAllClick,
    onSeeLessClick,
    onCloseEditProfileClick,
    onEditProfileClick,
  } as const;
};
