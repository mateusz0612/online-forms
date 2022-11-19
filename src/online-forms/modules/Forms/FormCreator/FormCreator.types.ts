import { IControl, IFormState, IRegister } from "libs/development-kit/form";
import { IAnswer, IQuestion, QuesitonType } from "online-forms/types";

export interface IFormHeaderValues {
  name: string;
  description: string;
}

export interface QuestionFormProps {
  currentPickedType: QuesitonType;
  control: IControl<IQuestion>;
  formState: IFormState<IQuestion>;
  answerFormState: IFormState<IAnswer>;
  answers: IAnswer[];
  register: IRegister<IQuestion>;
  answerRegister: IRegister<IAnswer>;
  onAddQuestionClick: () => void;
  onRemoveQuestionClick: (id: string) => void;
  onAddAnswerClick: () => void;
}
