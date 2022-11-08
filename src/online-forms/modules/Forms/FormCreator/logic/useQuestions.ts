import { useState } from "react";
import { IQuestion } from "online-forms/types";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const addQuestion = (question: IQuestion) =>
    setQuestions((prevQuestions) => [...prevQuestions, question]);

  return {
    questions,
    addQuestion,
  } as const;
};
