import { State } from "libs/development-kit/api";
import { IFormAnswer, IForm } from "online-forms/types";

export type AnswerWithFormState = State<{
  firstStateData: IFormAnswer[];
  secondStateData: IForm;
}>;

export interface IQuestionAnswersGraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}
