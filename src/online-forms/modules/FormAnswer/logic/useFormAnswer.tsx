import { useState } from "react";
import {
  useFetch,
  usePost,
  combineFetchStates,
} from "libs/development-kit/api";
import { useParams, useNavigate } from "libs/development-kit/routing";
import { useForm } from "libs/development-kit/form";
import { toast } from "libs/development-kit/toasts";
import { FormsService } from "online-forms/services";
import { UserService } from "online-forms/services";
import { useAuthContext } from "online-forms/shared/Auth";
import { Paths } from "online-forms/routes";
import {
  CacheKeys,
  IForm,
  IUserData,
  IFormAnswer,
  IQuestion,
  FormData,
} from "online-forms/types";
import * as yup from "yup";

type URLParams = { formId: string };
type FormAnswerWithoutId = Omit<IFormAnswer, "id">;

const mapUndefinedFormValues = (formData: FormData) => {
  return Object.keys(formData)?.reduce((currentValues, key) => {
    if (!formData?.[key]) {
      return { ...currentValues, [key]: "" };
    }

    return { ...currentValues, [key]: formData?.[key] };
  }, {});
};

const createFormValidationSchema = (questions: IQuestion[]) => {
  const validationSchema = questions?.reduce((currentSchema, question) => {
    const { required, id } = question;

    if (required) {
      return {
        ...currentSchema,
        [id]: yup
          .string()
          .trim()
          .required("Answer to this question is required"),
      };
    }

    return currentSchema;
  }, {});

  return yup.object().shape(validationSchema);
};

export const useFormAnswer = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const { formId } = useParams<URLParams>();
  const { user } = useAuthContext();

  const { state: formFetchState } = useFetch<IForm>(
    [CacheKeys.form, `${formId}`],
    async () => await FormsService.getForm(`${formId}`)
  );

  const { state: userFetchState } = useFetch<IUserData>(
    [CacheKeys.user, formFetchState?.data?.userId],
    async () => await UserService.getUserData(formFetchState?.data?.userId),
    { enabled: !!formFetchState?.data?.userId }
  );

  const { mutateAsync: addAnswer, isLoading: isFormPending } =
    usePost<FormAnswerWithoutId>({
      mutationFn: async (data) => await FormsService.createFormAnswer(data),
      onSuccess: () => {
        setIsSuccessModalOpen(true);
      },
      onError: () => {
        toast("error", "Something went wrong :( Please try again");
      },
    });

  const { control, formState, register, handleSubmit } = useForm<FormData>({
    validationSchema: createFormValidationSchema(
      formFetchState?.data?.questions
    ),
    reValidateMode: "onChange",
  });

  const fetchState = combineFetchStates<IForm, IUserData>(
    formFetchState,
    userFetchState
  );

  const onFormSubmit = handleSubmit(async (data) => {
    const formAnswersData: Omit<FormAnswerWithoutId, "id"> = {
      formId: formFetchState?.data?.id,
      answers: mapUndefinedFormValues(data),
    };

    await addAnswer(formAnswersData);
  });

  const onSuccessModalConfirm = () => {
    if (user) {
      navigate(Paths.Dashboard);
      return;
    }

    navigate(Paths.Landing);
  };

  return {
    fetchState: {
      ...fetchState,
      data: {
        ...fetchState?.data?.firstStateData,
        ...fetchState?.data?.secondStateData,
      },
    },
    formState,
    isSuccessModalOpen,
    control,
    isFormPending,
    register,
    onSuccessModalConfirm,
    onFormSubmit,
  } as const;
};
