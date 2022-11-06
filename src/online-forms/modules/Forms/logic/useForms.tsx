import { useState, useEffect } from "react";
import { IForm } from "online-forms/shared/types";
import { ModuleProps } from "../Forms.types";

export const useForms = ({ limit }: ModuleProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const MOCK_FORMS: IForm[] = [
    {
      id: "form1",
      userId: "dupa",
      createdAt: "26-12-2022",
      description: "Choose the best footballer players of 2022",
      name: "Best players of 2022",
      questions: [
        {
          content: "Best goalkeeper",
          answers: [{ content: "De gea", id: "De gea" }],
        },
      ],
    },
    {
      id: "form2",
      userId: "dupa",
      createdAt: "26-12-2022",
      description: "Choose the best footballer players of 2021",
      name: "Best players of 2021",
      questions: [
        {
          content: "Best goalkeeper",
          answers: [{ content: "Fabianski", id: "Fabianski" }],
        },
      ],
    },
    {
      id: "form3",
      userId: "dupa",
      createdAt: "26-12-2022",
      description: "Choose the best footballer players of 2020",
      name: "Best players of 2020",
      questions: [
        {
          content: "Best goalkeeper",
          answers: [{ content: "Kasijas", id: "Kasijas" }],
        },
      ],
    },
  ];

  useEffect(() => {
    window.addEventListener("click", () => setIsLoading(false));
  }, []);

  return {
    isLoading,
    forms: MOCK_FORMS.slice(0, limit || MOCK_FORMS?.length),
  } as const;
};
