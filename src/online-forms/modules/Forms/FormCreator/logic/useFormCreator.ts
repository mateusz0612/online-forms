import { useState } from "react";
import { useAuthContext } from "online-forms/shared/Auth";
import { FormsService } from "online-forms/modules/Forms/services";
import { IForm, IQuestion, CacheKeys } from "online-forms/types";
import { usePost, useQueryClient } from "libs/development-kit/api";
import { useNavigate } from "libs/development-kit/routing";
import { toast } from "libs/development-kit/toasts";
import { copyToClipboard } from "libs/development-kit/helpers/copyToClipboard";
import { IFormHeaderValues } from "../FormCreator.types";
import { Paths } from "online-forms/routes";

interface Params {
  questions: IQuestion[];
  formHeaderValues: IFormHeaderValues;
}

interface FormCreatedResponse {
  id: string;
}

type FromWithoutId = Omit<IForm, "id">;

export const useFormCreator = ({ questions, formHeaderValues }: Params) => {
  const [
    isFormCreatedConfirmationVisible,
    setIsFormCreatedConfirmationVisible,
  ] = useState(false);
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutateAsync,
    data,
    isLoading: isFormSavePending,
  } = usePost<FromWithoutId, FormCreatedResponse>({
    mutationFn: async (data) => await FormsService.createForm(data),
    onSuccess: () => {
      queryClient.invalidateQueries([CacheKeys.forms]);
      setIsFormCreatedConfirmationVisible(true);
    },
    onError: () => {
      toast("error", "Something went wrong :( Please try again!");
    },
  });

  const onFormSave = async () => {
    const date = new Date();
    const createdAt = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const form: FromWithoutId = {
      ...formHeaderValues,
      questions,
      createdAt,
      userId: user?.uid as string,
    };

    await mutateAsync(form);
  };

  const onCopyLinkClick = (link: string) => {
    copyToClipboard(link);
    toast("success", "Link copied to clipboard");
  };

  const onCloseFormCreatedConfirmationModal = () => {
    navigate(Paths.Dashboard);
  };

  return {
    onFormSave,
    onCloseFormCreatedConfirmationModal,
    onCopyLinkClick,
    isFormCreatedConfirmationVisible,
    isFormSavePending,
    createdFormId: data?.id,
  } as const;
};
