import { useForm } from "libs/development-kit/form";
import * as validation from "libs/development-kit/validation";
import { IFormHeaderValues } from "../FormCreator.types";

const DEFAULT_VALUES: IFormHeaderValues = {
  name: "",
  description: "",
};

const formHeaderSchema = validation.object().shape({
  name: validation
    .string()
    .trim()
    .required("Name is required")
    .min(4, "Min 4 characters")
    .max(60, "Max 60 characters"),
  description: validation
    .string()
    .trim()
    .required("Description is required")
    .min(8, "Min 8 characters")
    .max(1024, "Max 1024 characters"),
});

export const useFormHeader = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: formHeaderSchema,
  });

  return {
    formState,
    register,
    handleSubmit,
  } as const;
};
