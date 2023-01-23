import {
  FormState,
  UseFormRegister,
  Control,
  UseFormTrigger,
  UseFormHandleSubmit,
  FieldValues,
} from "react-hook-form";

export type IRegister<T extends FieldValues> = UseFormRegister<T>;
export type IFormState<T extends FieldValues> = FormState<T>;
export type IControl<T extends FieldValues> = Control<T>;
export type ITrigger<T extends FieldValues> = UseFormTrigger<T>;
export type IHandleSubmit<T extends FieldValues> = UseFormHandleSubmit<T>;
