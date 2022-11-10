import { useState } from "react";
import { IQuestion } from "online-forms/types";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const haveNoQuestions = questions?.length === 0;

  const addQuestion = (question: IQuestion) =>
    setQuestions((prevQuestions) => [...prevQuestions, question]);

  const editQuestion = (questionId: string, newQuestion: IQuestion) => {
    const newQuestions = questions?.map((question) => {
      if (question?.id === questionId) {
        return newQuestion;
      }

      return question;
    });

    setQuestions(newQuestions);
  };

  const clearQuestions = () => setQuestions([]);

  const onDeleteQuestionClick = (id: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions?.filter((question) => question?.id !== id)
    );
  };

  return {
    questions,
    haveNoQuestions,
    addQuestion,
    editQuestion,
    clearQuestions,
    onDeleteQuestionClick,
  } as const;
};
