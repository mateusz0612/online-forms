import { useState, useRef } from "react";
import { useFetch, combineFetchStates } from "libs/development-kit/api";
import { useParams } from "libs/development-kit/routing";
import { useForm } from "libs/development-kit/form";
import { FormsService } from "online-forms/services";
import {
  IForm,
  IFormAnswer,
  CacheKeys,
  FormData,
  IQuestion,
} from "online-forms/types";
import { IQuestionAnswersGraphData, Graph } from "../FormAnalyze.types";

type URLParams = { formId: string };

interface State {
  pickedAnswerId: string;
  pickedGraphType: Graph;
  pickedQuestion: IQuestion | null;
}

const DEFAULT_STATE: State = {
  pickedAnswerId: "",
  pickedGraphType: Graph.values,
  pickedQuestion: null,
};

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

const getQuestionAnswers = (
  question: IQuestion,
  formAnswers: IFormAnswer[]
) => {
  const questionAnswers = formAnswers
    ?.map((answers) => answers?.answers)
    ?.map((answer) => answer[question?.id as string]);

  return questionAnswers;
};

const getQuestionAnswersByCount = (questionAnswers: string[]) => {
  const counter = questionAnswers?.reduce((prevCounter, answer) => {
    const answerCount = questionAnswers?.filter(
      (currentAnswerToCount) => currentAnswerToCount === answer
    )?.length;

    return { ...prevCounter, [answer]: answerCount };
  }, {});

  return counter as Record<string, number>;
};

const getQuestionAnswersByPercentages = (questionAnswers: string[]) => {
  const counter = getQuestionAnswersByCount(questionAnswers) || [];
  const questionsCount = questionAnswers?.length;

  const precentages = Object.keys(counter)?.reduce(
    (prevPrecentages, answerKey) => {
      const answerPrecentage = +(
        (counter[answerKey] / questionsCount) *
        100
      ).toFixed();

      return { ...prevPrecentages, [answerKey]: answerPrecentage };
    },
    {}
  );

  return precentages as Record<string, number>;
};

export const useFormAnswers = () => {
  const [state, setState] = useState(DEFAULT_STATE);
  const formPreviewRef = useRef<HTMLDivElement>();

  const { formId } = useParams<URLParams>();

  const { state: answersState } = useFetch<IFormAnswer[]>(
    [CacheKeys.answers, `${formId}`],
    async () => await FormsService.getFormAnswers(`${formId}`),
    { cacheTime: 0 }
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
    if (id === state.pickedAnswerId) {
      setState((prevState) => ({
        ...prevState,
        pickedAnswerId: DEFAULT_STATE.pickedAnswerId,
      }));
      return;
    }

    const answers = answersState?.data?.find((answer) => answer?.id === id)
      ?.answers as FormData;

    setState((prevState) => ({ ...prevState, pickedAnswerId: id }));
    setDefaultPreviewFormValues(answers);

    formPreviewRef?.current?.scrollTo(0, 0);
  };

  const onQuestionClick = (id: string) => {
    const question =
      answerWithFormState?.data?.secondStateData?.questions?.find(
        (question) => question?.id === id
      ) as IQuestion;

    setState((prevState) => ({ ...prevState, pickedQuestion: question }));
  };

  const pickedQuestionAnswers = getQuestionAnswers(
    state.pickedQuestion as IQuestion,
    answerWithFormState?.data?.firstStateData
  );

  const questionAnswersByCount = getQuestionAnswersByCount(
    pickedQuestionAnswers
  );

  const questionAnswersByPrecentage = getQuestionAnswersByPercentages(
    pickedQuestionAnswers
  );

  const graphTypeData =
    state.pickedGraphType === Graph.values
      ? questionAnswersByCount
      : questionAnswersByPrecentage;

  const graphDataLabels = Object.keys(graphTypeData || []);

  const graphDataValues = Object.values(graphTypeData || []);

  const graphData: IQuestionAnswersGraphData = {
    labels: graphDataLabels,
    datasets: [
      {
        label:
          state.pickedGraphType === Graph.values
            ? "# of answers"
            : "% of answers",
        data: graphDataValues,
        backgroundColor: GRAPH_COLORS,
        borderColor: GRAPH_COLORS,
        borderWidth: 1,
      },
    ],
  };

  const onPickedGrahTypeChange = (newGraphType: Graph) => {
    setState((prevState) => ({ ...prevState, pickedGraphType: newGraphType }));
  };

  return {
    answerWithFormState,
    state,
    control,
    formPreviewRef,
    graphData,
    register,
    onPickedAnswerIdChange,
    onPickedGrahTypeChange,
    onQuestionClick,
  } as const;
};
