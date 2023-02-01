import { IControl, IFormState } from "libs/development-kit/form";
import { IQuestion, FormData, IAnswer } from "online-forms/types";

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
  onQuestionClick?: (id: string) => void;
}

export type FormViewAnswerComponent = Partial<
  Omit<FormViewProps, "questions"> & {
    questionId: string;
    multiple: boolean;
    answers: IAnswer[];
  }
>;
