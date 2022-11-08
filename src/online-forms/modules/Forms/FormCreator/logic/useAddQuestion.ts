import { useState } from "react";
import { useForm } from "libs/development-kit/form";
import { IAnswer, IQuestion } from "online-forms/types";
import * as yup from "yup";

const ADD_QUESTION_DEFAULT_VALUES: IQuestion = {
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

const addQuestionValidationSchema = yup.object().shape({
  content: yup.string().required("Question content is required"),
});

const answerValidationSchema = yup.object().shape({
  content: yup.string().required("Answer content is required"),
});

export const useAddQuestion = (addQuestion: (question: IQuestion) => void) => {
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState(false);

  const { register, handleSubmit, watch, reset, setValue, control, formState } =
    useForm({
      defaultValues: ADD_QUESTION_DEFAULT_VALUES,
      validationSchema: addQuestionValidationSchema,
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

  const openAddQuestionModal = () => setIsAddQuestionModalOpen(true);

  const closeAddQuestionModal = () => {
    setIsAddQuestionModalOpen(false);
    answerReset();
  };

  const onAddAnswerClick = answerHandleSubmit(({ content }) => {
    setValue("answers", [
      ...(answers as IAnswer[]),
      { id: "randomToImplement", content },
    ]);

    answerReset();
  });

  const onAddQuestionClick = handleSubmit((newQuestion) => {
    if (answers?.length === 0) {
      setAnswerError("content", { message: "Enter atleast one option" });
      return;
    }

    addQuestion({ ...newQuestion, id: "randomIdToImplement" });
    reset();
    closeAddQuestionModal();
  });

  return {
    isAddQuestionModalOpen,
    formState,
    answerFormState,
    control,
    answers,
    currentPickedType,
    onAddAnswerClick,
    onAddQuestionClick,
    openAddQuestionModal,
    closeAddQuestionModal,
    answerRegister,
    register,
  } as const;
};
