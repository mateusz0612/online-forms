import {
  FormState,
  UseFormRegister,
  Control,
  UseFormTrigger,
} from "react-hook-form";

export type IRegister<T> = UseFormRegister<T>;
export type IFormState<T> = FormState<T>;
export type IControl<T> = Control<T>;
export type ITrigger<T> = UseFormTrigger<T>;
