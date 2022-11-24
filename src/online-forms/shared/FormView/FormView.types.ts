import { IControl, IFormState, IRegister } from "libs/development-kit/form";
import { IQuestion } from "online-forms/types";

export interface IHandlers {
  onDeleteClick: (questionId: string) => void;
  onEditClick: (questionId: string) => void;
}

export interface FormViewProps {
  questions: IQuestion[];
  isEditable: boolean;
  control?: IControl<unknown>;
  handlers?: IHandlers;
  formState?: IFormState<unknown>;
  register?: IRegister<unknown>;
}

export type FormViewAnswerComponent = Partial<
  Omit<FormViewProps, "questions"> & { questionId: string }
>;
