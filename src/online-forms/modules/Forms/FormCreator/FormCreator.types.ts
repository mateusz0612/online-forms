import { IControl, IFormState, IRegister } from "libs/development-kit/form";
import { IAnswer, IQuestion, QuesitonType } from "online-forms/types";

export interface ICreateForm {
  title: string;
  description: string;
}

export interface AddQuestionProps {
  register: IRegister<IQuestion>;
  answerRegister: IRegister<IAnswer>;
  onAddQuestionClick: () => void;
  onAddAnswerClick: () => void;
  currentPickedType: QuesitonType;
  control: IControl<IQuestion>;
  formState: IFormState<IQuestion>;
  answerFormState: IFormState<IAnswer>;
  answers: IAnswer[];
}
