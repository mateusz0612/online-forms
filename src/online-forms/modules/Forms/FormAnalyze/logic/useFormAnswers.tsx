import { useMemo, useState, useRef } from "react";
import { useFetch, combineFetchStates } from "libs/development-kit/api";
import { useParams } from "libs/development-kit/routing";
import { useForm } from "libs/development-kit/form";
import { FormsService } from "online-forms/modules/Forms/services";
import { IForm, IFormAnswer, CacheKeys, FormData } from "online-forms/types";

type URLParams = { formId: string };

const getQuestionLabels = (form: IForm): Record<string, string> => {
  const questions = form?.questions;

  return questions?.reduce((currentQuestionIdToLabel, question) => {
    return { ...currentQuestionIdToLabel, [question?.id]: question?.content };
  }, {});
};

export const useFormAnswers = () => {
  const [pickedAnswerId, setPickedAnswerId] = useState("");
  const formPreviewRef = useRef<HTMLDivElement>();

  const { formId } = useParams<URLParams>();

  const { state: answersState } = useFetch<IFormAnswer[]>(
    [CacheKeys.answers, `${formId}`],
    async () => await FormsService.getFormAnswers(`${formId}`)
  );

  const { state: formState } = useFetch<IForm>(
    [CacheKeys.form, `${formId}`],
    async () => await FormsService.getForm(`${formId}`)
  );

  const { control, register, setValue } = useForm<FormData>({});

  const answerWithFormState = combineFetchStates<IFormAnswer[], IForm>(
    answersState,
    formState
  );

  const questionLabelsById = useMemo(
    () => getQuestionLabels(formState?.data),
    []
  );

  const setDefaultPreviewFormValues = (answers: FormData) => {
    Object.keys(answers)?.forEach((answer) => {
      setValue(answer, answers[answer]);
    });
  };

  const onPickedAnswerIdChange = (id: string) => {
    if (id === pickedAnswerId) {
      setPickedAnswerId("");
      return;
    }

    const answers = answersState?.data?.find((answer) => answer?.id === id)
      ?.answers as FormData;

    setPickedAnswerId(id);
    setDefaultPreviewFormValues(answers);

    formPreviewRef?.current?.scrollTo(0, 0);
  };

  return {
    answerWithFormState,
    questionLabelsById,
    pickedAnswerId,
    control,
    formPreviewRef,
    register,
    onPickedAnswerIdChange,
  } as const;
};
