import { useState, useRef } from "react";
import { useForm } from "libs/development-kit/form";
import { useOutsideClick } from "libs/development-kit/helpers/hooks/useOutsideClick";
import { IFormHeaderValues } from "../FormCreator.types";
import * as yup from "yup";

const DEFAULT_VALUES: IFormHeaderValues = {
  name: "",
  description: "",
};

const createFormSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required("Name is required")
    .max(60, "Max 60 characters"),
  description: yup
    .string()
    .trim()
    .required("Description is required")
    .max(1024, "Max 1024 characters"),
});

export const useFormHeader = () => {
  const [isFormHeaderEdited, setIsFormHeaderEdited] = useState(true);
  const formHeaderRef = useRef();

  const { register, getValues, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: createFormSchema,
    reValidateMode: "onChange",
  });
  const values = getValues();

  const onFormHeaderClick = () => setIsFormHeaderEdited(true);

  const onFormHeaderOutsideClick = () => {
    const { name, description } = getValues();

    if (name.trim() === "" || description.trim() === "") {
      return;
    }

    setIsFormHeaderEdited(false);
  };

  useOutsideClick(formHeaderRef, onFormHeaderOutsideClick);

  return {
    isFormHeaderEdited,
    formHeaderRef,
    values,
    formState,
    register,
    onFormHeaderClick,
  } as const;
};
