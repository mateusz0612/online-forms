import { useState, useRef } from "react";
import { useForm } from "libs/development-kit/form";
import { useOutsideClick } from "libs/development-kit/helpers/useOutsideClick";
import { ICreateForm } from "../FormCreator.types";
import * as yup from "yup";

const DEFAULT_VALUES: ICreateForm = {
  title: "",
  description: "",
};

const createFormSchema = yup.object().shape({
  title: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

export const useFormCreator = () => {
  const [isFormHeaderEdited, setIsFormHeaderEdited] = useState(true);
  const formHeaderRef = useRef();

  const { register, getValues, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: createFormSchema,
    reValidateMode: "onChange",
  });

  const onFormHeaderClick = () => setIsFormHeaderEdited(true);

  const onFormHeaderOutsideClick = () => {
    const { title, description } = getValues();

    if (title.trim() === "" || description.trim() === "") {
      return;
    }

    setIsFormHeaderEdited(false);
  };

  useOutsideClick(formHeaderRef, onFormHeaderOutsideClick);

  return {
    isFormHeaderEdited,
    formHeaderRef,
    values: getValues(),
    formState,
    register,
    onFormHeaderClick,
  } as const;
};
