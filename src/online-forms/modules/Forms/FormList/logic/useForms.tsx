import { useState } from "react";
import { useAuthContext } from "online-forms/shared/Auth";
import { FormsService } from "online-forms/modules/Forms/services/Forms.service";
import { CacheKeys, IForm } from "online-forms/types";
import { useFetch, usePost } from "libs/development-kit/api";
import { toast } from "libs/development-kit/toasts";
import { copyToClipboard } from "libs/development-kit/helpers/copyToClipboard";

const sortFormsByLatestCreateAt = (forms: IForm[]) => {
  const sortedForms = forms?.sort((x, y) => y?.createdAt - x?.createdAt);

  return sortedForms;
};

export const useForms = () => {
  const { user } = useAuthContext();

  const forms = useFetch(
    [CacheKeys.forms, `${user?.uid}`],
    async () => await FormsService.userFormsList(`${user?.uid}`),
    {}
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

  const onCopyFromLinkClick = (link: string, formName: string) => {
    copyToClipboard(`${window.location.origin}/form-answer/${link}`);
    toast("success", `Link to form ${formName} copied to clipboard`);
  };

  const onDeleteFormClick = async (id: string) => {
    await deleteForm({ id });
  };

  return {
    isFormDeletePending,
    forms: {
      ...forms,
      state: {
        ...forms?.state,
        status: isFormDeletePending ? "loading" : forms?.state?.status,
      },
      data: sortFormsByLatestCreateAt(forms?.state?.data),
    },
    onCopyFromLinkClick,
    onDeleteFormClick,
  } as const;
};
