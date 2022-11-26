import { IControl, IFormState, IRegister } from "libs/development-kit/form";
import { IQuestion, FormData } from "online-forms/types";

export interface IHandlers {
  onDeleteClick: (questionId: string) => void;
  onEditClick: (questionId: string) => void;
}

export interface FormViewProps {
  questions: IQuestion[];
  isEditable: boolean;
  isValueEditDisabled?: boolean;
  control?: IControl<FormData>;
  handlers?: IHandlers;
  formState?: IFormState<FormData>;
  register?: IRegister<FormData>;
}

export type FormViewAnswerComponent = Partial<
  Omit<FormViewProps, "questions"> & { questionId: string }
>;
