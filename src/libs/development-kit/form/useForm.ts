import {
  DeepPartial,
  useForm as useHookForm,
  FieldValues,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema, object } from "yup";

interface IForm<T> {
  defaultValues?: T;
  validationSchema?: AnyObjectSchema;
  reValidateMode?: "onBlur" | "onChange" | "onSubmit";
}

export const useForm = <T extends FieldValues>({
  defaultValues,
  validationSchema = object(),
  reValidateMode,
}: IForm<T>) => {
  return useHookForm<T>({
    defaultValues: defaultValues as DeepPartial<T>,
    resolver: yupResolver(validationSchema),
    reValidateMode,
  });
};
