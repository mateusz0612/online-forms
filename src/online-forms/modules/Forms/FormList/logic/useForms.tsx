import { useAuthContext } from "online-forms/shared/Auth";
import { FormsService } from "online-forms/modules/Forms/services";
import { CacheKeys, IForm } from "online-forms/types";
import { useFetch } from "libs/development-kit/api";
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

  const onCopyFromLinkClick = (link: string, formName: string) => {
    copyToClipboard(`${window.location.origin}/form-answer/${link}`);
    toast("success", `Link to form ${formName} copied to clipboard`);
  };

  return {
    forms: {
      ...forms,
      data: sortFormsByLatestCreateAt(forms?.state?.data),
    },
    onCopyFromLinkClick,
  } as const;
};
