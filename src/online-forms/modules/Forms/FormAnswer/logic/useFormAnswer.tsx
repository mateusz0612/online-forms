import {
  useFetch,
  usePost,
  combineFetchStates,
} from "libs/development-kit/api";
import { useParams } from "libs/development-kit/routing";
import { useForm } from "libs/development-kit/form";
import { FormsService } from "online-forms/modules/Forms/services/Forms.service";
import { UsersService } from "online-forms/shared/Users/services";
import {
  CacheKeys,
  IForm,
  IUserData,
  IFormAnswersRequest,
} from "online-forms/types";

type URLParams = { formId: string };

export const useFormAnswer = () => {
  const { formId } = useParams<URLParams>();

  const { state: formFetchState } = useFetch<IForm>(
    [CacheKeys.form, `${formId}`],
    async () => await FormsService.getForm(`${formId}`)
  );

  const { state: userFetchState } = useFetch<IUserData>(
    [CacheKeys.user, formFetchState?.data?.userId],
    async () => await UsersService.getUserData(formFetchState?.data?.userId),
    { enabled: !!formFetchState?.data?.userId }
  );

  const { control, register, handleSubmit } = useForm<unknown>({});

  const { mutateAsync, isLoading: isFormPending } =
    usePost<IFormAnswersRequest>({
      mutationFn: async (data) => await FormsService.createFormAnswer(data),
      onSuccess: () => {},
      onError: () => {},
    });

  const fetchState = combineFetchStates<IForm, IUserData>(
    formFetchState,
    userFetchState
  );

  const onFormSubmit = handleSubmit(async (data) => {
    const formAnswersData: IFormAnswersRequest = {
      formId: formFetchState?.data?.id,
      answers: data,
    };

    await mutateAsync(formAnswersData);
  });

  return {
    fetchState,
    control,
    register,
    isFormPending,
    onFormSubmit,
  } as const;
};
