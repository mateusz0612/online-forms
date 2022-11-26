import { State } from "libs/development-kit/api";
import { IFormAnswer, IForm } from "online-forms/types";

export type AnswerWithFormState = State<{
  firstStateData: IFormAnswer[];
  secondStateData: IForm;
}>;
