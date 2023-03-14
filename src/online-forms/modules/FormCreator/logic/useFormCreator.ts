import { useState } from "react";
import { useAuthContext } from "online-forms/modules/Auth";
import { FormsService } from "online-forms/services";
import { IForm, IQuestion, CacheKeys } from "online-forms/types";
import { Paths } from "online-forms/routes";
import { IHandleSubmit } from "libs/development-kit/form";
import { usePost, useQueryClient } from "libs/development-kit/api";
import { useNavigate } from "libs/development-kit/routing";
import { toast } from "libs/development-kit/toasts";
import { copyToClipboard } from "libs/development-kit/helpers/copyToClipboard";
import { IFormHeaderValues } from "../FormCreator.types";

interface Params {
  questions: IQuestion[];
  handleFormHeaderSubmit: IHandleSubmit<IFormHeaderValues>;
}

interface FormCreatedResponse {
  id: string;
}

type FromWithoutId = Omit<IForm, "id">;

export const useFormCreator = ({
  questions,
  handleFormHeaderSubmit,
}: Params) => {
  const [
    isFormCreatedConfirmationVisible,
    setIsFormCreatedConfirmationVisible,
  ] = useState(false);
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutateAsync: createForm,
    data,
    isLoading: isFormSavePending,
  } = usePost<FromWithoutId, FormCreatedResponse>({
    mutationFn: async (data) => await FormsService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries([CacheKeys.forms, `${user?.uid}`]);
      setIsFormCreatedConfirmationVisible(true);
    },
    onError: () => {
      toast("error", "Something went wrong :( Please try again!");
    },
  });

  const onFormSave = handleFormHeaderSubmit(async (formHeaderValues) => {
    const createdAt = Date.now();

    const form: FromWithoutId = {
      ...formHeaderValues,
      questions,
      createdAt,
      userId: user?.uid as string,
    };

    await createForm(form);
  });

  const onCopyLinkClick = (link: string) => {
    copyToClipboard(`${window.location.origin}/form-answer/${link}`);
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
