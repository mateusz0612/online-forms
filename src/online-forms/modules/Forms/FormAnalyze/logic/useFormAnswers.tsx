import { useState, useRef } from "react";
import { useFetch, combineFetchStates } from "libs/development-kit/api";
import { useParams } from "libs/development-kit/routing";
import { useForm } from "libs/development-kit/form";
import { FormsService } from "online-forms/modules/Forms/services";
import {
  IForm,
  IFormAnswer,
  CacheKeys,
  FormData,
  IQuestion,
} from "online-forms/types";
import { IQuestionAnswersGraphData } from "../FormAnalyze.types";

type URLParams = { formId: string };

const GRAPH_COLORS = [
  "rgba(80, 180, 50, 0.2)",
  "rgba(237, 86, 27, 0.2)",
  "rgba(221, 223, 0, 0.2)",
  "rgba(36, 203, 229, 0.2)",
  "rgba(100, 229, 114, 0.2)",
  "rgba(255, 150, 85, 0.2)",
  "rgba(255, 242, 99, 0.2)",
  "rgba(106, 249, 196, 0.2)",
  "rgba(47, 126, 216, 0.2)",
  "rgba(13, 35, 58, 0.2)",
  "rgba(139, 188, 33, 0.2)",
  "rgba(145, 0, 0, 0.2)",
];

const DEFAULT_PICKED_ANSWER_ID = "";

const getQuestionAnswersByCount = (
  question: IQuestion,
  formAnswers: IFormAnswer[]
) => {
  const questionAnswers = formAnswers
    ?.map((answers) => answers?.answers)
    ?.map((answer) => answer[question?.id as string]);

  const counter = questionAnswers?.reduce((prevCounter, answer) => {
    const answerCount = questionAnswers?.filter(
      (currentAnswerToCount) => currentAnswerToCount === answer
    )?.length;

    return { ...prevCounter, [answer]: answerCount };
  }, {});

  return counter;
};

export const useFormAnswers = () => {
  const [pickedAnswerId, setPickedAnswerId] = useState(
    DEFAULT_PICKED_ANSWER_ID
  );
  const [pickedQuestion, setPickedQuestion] = useState<IQuestion | null>(null);
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

  const setDefaultPreviewFormValues = (answers: FormData) => {
    Object.keys(answers)?.forEach((answer) => {
      setValue(answer, answers[answer]);
    });
  };

  const onPickedAnswerIdChange = (id: string) => {
    setPickedQuestion(null);

    if (id === pickedAnswerId) {
      setPickedAnswerId(DEFAULT_PICKED_ANSWER_ID);
      return;
    }

    const answers = answersState?.data?.find((answer) => answer?.id === id)
      ?.answers as FormData;

    setPickedAnswerId(id);
    setDefaultPreviewFormValues(answers);

    formPreviewRef?.current?.scrollTo(0, 0);
  };

  const onQuestionClick = (id: string) => {
    const question =
      answerWithFormState?.data?.secondStateData?.questions?.find(
        (question) => question?.id === id
      ) as IQuestion;

    setPickedQuestion(question);
  };

  const pickedQuestionAnswers = getQuestionAnswersByCount(
    pickedQuestion as IQuestion,
    answerWithFormState?.data?.firstStateData
  );

  const graphData: IQuestionAnswersGraphData = {
    labels: Object.keys(pickedQuestionAnswers || []),
    datasets: [
      {
        label: "# of answers",
        data: Object.values(pickedQuestionAnswers || []),
        backgroundColor: GRAPH_COLORS,
        borderColor: GRAPH_COLORS,
        borderWidth: 1,
      },
    ],
  };

  return {
    answerWithFormState,
    pickedAnswerId,
    pickedQuestion,
    control,
    formPreviewRef,
    graphData,
    register,
    onPickedAnswerIdChange,
    onQuestionClick,
  } as const;
};
