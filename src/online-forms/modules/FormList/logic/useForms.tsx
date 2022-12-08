import { useState } from "react";
import { useAuthContext } from "online-forms/shared/Auth";
import { FormsService } from "online-forms/services";
import { CacheKeys, IForm } from "online-forms/types";
import { useFetch, usePost } from "libs/development-kit/api";
import { useNavigate } from "libs/development-kit/routing";
import { toast } from "libs/development-kit/toasts";
import { copyToClipboard } from "libs/development-kit/helpers/copyToClipboard";
import { Paths } from "online-forms/routes";

const sortFormsByLatestCreateAt = (forms: IForm[]) => {
  const sortedForms = forms?.sort((x, y) => y?.createdAt - x?.createdAt);

  return sortedForms;
};

export const useForms = () => {
  const [
    isFormDeleteConfirmationModalOpen,
    setIsFormDeleteConfirmationModalOpen,
  ] = useState(false);
  const [currentPickedForm, setCurrentPickedForm] = useState<IForm | null>(
    null
  );
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const forms = useFetch(
    [CacheKeys.forms, `${user?.uid}`],
    async () => await FormsService.userFormsList(`${user?.uid}`)
  );

  const { mutateAsync: deleteForm, isLoading: isFormDeletePending } = usePost<{
    id: string;
  }>({
    mutationFn: async ({ id }) => {
      await FormsService.deleteForm(id);
      await forms?.refetch();
    },
    onSuccess: () => {
      toast("success", "Form successfully deleted");
    },
    onError: () => {
      toast("error", "Something went wrong :( Please try again");
    },
  });

  const openFormDeleteConfirmationModal = () =>
    setIsFormDeleteConfirmationModalOpen(true);

  const closeFormDeleteConfirmationModal = () =>
    setIsFormDeleteConfirmationModalOpen(false);

  const onCopyFromLinkClick = (link: string, formName: string) => {
    copyToClipboard(`${window.location.origin}/form-answer/${link}`);
    toast("success", `Link to form ${formName} copied to clipboard`);
  };

  const onDeleteFormClick = (id: string) => {
    const form = forms?.state?.data?.find((form) => form?.id === id);

    setCurrentPickedForm(form as IForm);
    openFormDeleteConfirmationModal();
  };

  const onRejectDeleteFormClick = () => {
    closeFormDeleteConfirmationModal();
  };

  const onAnalyzeFormClick = (id: string) => {
    navigate(Paths.AnalyzeForm?.replace(":formId", id));
  };

  const onConfirmDeleteFormClick = async (id: string) => {
    closeFormDeleteConfirmationModal();
    await deleteForm({ id });
  };

  return {
    isFormDeletePending,
    isFormDeleteConfirmationModalOpen,
    forms: {
      ...forms,
      state: {
        ...forms?.state,
        status:
          isFormDeletePending || forms?.isRefetching
            ? "loading"
            : forms?.state?.status,
      },
      data: sortFormsByLatestCreateAt(forms?.state?.data),
    },
    currentPickedForm: currentPickedForm as IForm,
    onCopyFromLinkClick,
    onAnalyzeFormClick,
    onDeleteFormClick,
    onRejectDeleteFormClick,
    onConfirmDeleteFormClick,
  } as const;
};
