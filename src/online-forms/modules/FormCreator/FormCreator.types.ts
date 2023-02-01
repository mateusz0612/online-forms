import { IControl } from "libs/development-kit/form";
import { IAnswer, IQuestion, QuesitonType } from "online-forms/types";

export interface IFormHeaderValues {
  name: string;
  description: string;
}

export interface QuestionFormProps {
  currentPickedType: QuesitonType;
  answers: IAnswer[];
  questionControl: IControl<IQuestion>;
  answerControl: IControl<IAnswer>;
  onAddQuestionClick: () => void;
  onRemoveQuestionClick: (id: string) => void;
  onAddAnswerClick: () => void;
}
