import { DeepPartial, useForm as useHookForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";

interface IForm<T> {
  defaultValues: T;
  validationSchema: AnyObjectSchema;
}

export const useForm = <T>({ defaultValues, validationSchema }: IForm<T>) => {
  return useHookForm<T>({
    defaultValues: defaultValues as DeepPartial<T>,
    resolver: yupResolver(validationSchema),
  });
};
