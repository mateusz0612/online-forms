import { usePost } from "libs/development-kit/api";
import { toast } from "libs/development-kit/toasts";
import { useAuthContext } from "online-forms/shared/Auth";
import { FormsService } from "online-forms/modules/Forms/services";
import { IForm, IQuestion } from "online-forms/types";
import { IFormHeaderValues } from "../FormCreator.types";

interface Params {
  questions: IQuestion[];
  formHeaderValues: IFormHeaderValues;
}

type FromWithoutId = Omit<IForm, "id">;

export const useForm = ({ questions, formHeaderValues }: Params) => {
  const { user } = useAuthContext();

  const { mutate, isLoading } = usePost<FromWithoutId>({
    mutationFn: async (data) => await FormsService.createForm(data),
    onSuccess: () => {
      toast("success", "Form created!");
    },
    onError: () => console.log("error"),
  });

  const onFormSave = async () => {
    const form: FromWithoutId = {
      ...formHeaderValues,
      questions,
      createdAt: new Date().getDate().toString(),
      userId: user?.uid as string,
    };

    mutate(form);
  };

  return {
    onFormSave,
    isFormSavePending: isLoading,
  } as const;
};
