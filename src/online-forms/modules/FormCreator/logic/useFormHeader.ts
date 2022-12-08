import { useForm } from "libs/development-kit/form";
import { IFormHeaderValues } from "../FormCreator.types";
import * as yup from "yup";

const DEFAULT_VALUES: IFormHeaderValues = {
  name: "",
  description: "",
};

const createFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(4, "Min 4 characters")
    .max(60, "Max 60 characters"),
  description: yup
    .string()
    .trim()
    .required("Description is required")
    .min(8, "Min 8 characters")
    .max(1024, "Max 1024 characters"),
});

export const useFormHeader = () => {
  const { register, getValues, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: createFormSchema,
    reValidateMode: "onChange",
  });
  const values = getValues();

  return {
    values,
    formState,
    register,
  } as const;
};
