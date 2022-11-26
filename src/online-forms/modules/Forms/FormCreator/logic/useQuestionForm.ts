import { useState } from "react";
import { useForm } from "libs/development-kit/form";
import { IAnswer, IQuestion } from "online-forms/types";
import { id } from "libs/development-kit/helpers/id";
import * as yup from "yup";

const MAX_QUESTION_ANSWERS_AMOUNT = 12;

const QUESTION_DEFAULT_VALUES: IQuestion = {
  id: "",
  content: "",
  type: "options",
  required: false,
  answers: [],
};

const ANSWER_DEFAULT_VALUE: IAnswer = {
  id: "",
  content: "",
};

const questionValidationSchema = yup.object().shape({
  content: yup
    .string()
    .trim()
    .required("Question content is required")
    .max(300, "Max 300 characters"),
});

const answerValidationSchema = yup.object().shape({
  content: yup
    .string()
    .trim()
    .required("Answer content is required")
    .max(80, "Max 80 characters"),
});

interface Params {
  questions: IQuestion[];
  addQuestion: (question: IQuestion) => void;
  editQuestion: (questionId: string, newQuestion: IQuestion) => void;
}

export const useQuestionForm = ({
  questions,
  addQuestion,
  editQuestion,
}: Params) => {
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit, watch, reset, setValue, control, formState } =
    useForm({
      defaultValues: QUESTION_DEFAULT_VALUES,
      validationSchema: questionValidationSchema,
    });

  const {
    register: answerRegister,
    handleSubmit: answerHandleSubmit,
    reset: answerReset,
    setError: setAnswerError,
    formState: answerFormState,
  } = useForm({
    defaultValues: ANSWER_DEFAULT_VALUE,
    validationSchema: answerValidationSchema,
  });

  const currentPickedType = watch("type");
  const answers = watch("answers") as IAnswer[];

  const openQuestionModal = () => setIsQuestionModalOpen(true);

  const closeQuestionModal = () => {
    setIsQuestionModalOpen(false);
    reset();
    answerReset();
    setIsEdit(false);
  };

  const onOpenQuestionModal = () => openQuestionModal();

  const onAddAnswerClick = answerHandleSubmit(({ content }) => {
    if (answers?.length === MAX_QUESTION_ANSWERS_AMOUNT) {
      setAnswerError("content", {
        message: `Max amount of answers - ${MAX_QUESTION_ANSWERS_AMOUNT}`,
      });
      return;
    }

    setValue("answers", [...(answers as IAnswer[]), { id: id(), content }]);

    answerReset();
  });

  const onRemoveAnswerClick = (id: string) => {
    setValue(
      "answers",
      answers?.filter((answer) => answer?.id !== id)
    );
  };

  const onEditQuestionClick = (questionId: string) => {
    setIsEdit(true);

    const editedQuestion = questions?.find(
      (question) => question?.id === questionId
    );

    const { answers, content, required, type, id } =
      editedQuestion as IQuestion;

    setValue("id", id);
    setValue("content", content);
    setValue("answers", answers);
    setValue("required", required);
    setValue("type", type);

    openQuestionModal();
  };

  const onAddQuestionClick = handleSubmit((newQuestion) => {
    if (currentPickedType === "options" && answers?.length === 0) {
      setAnswerError("content", { message: "Enter atleast one option" });
      return;
    }

    if (isEdit) {
      editQuestion(newQuestion?.id, newQuestion);
      closeQuestionModal();
      return;
    }

    addQuestion({ ...newQuestion, id: id() });
    reset();
    closeQuestionModal();
  });

  return {
    isQuestionModalOpen,
    formState,
    answerFormState,
    control,
    answers,
    currentPickedType,
    onAddAnswerClick,
    onRemoveAnswerClick,
    onEditQuestionClick,
    onAddQuestionClick,
    onOpenQuestionModal,
    closeQuestionModal,
    answerRegister,
    register,
  } as const;
};
