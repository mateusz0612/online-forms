import { FC } from "react";
import { RegisterForm } from "../components";
import { useRegisterForm } from "../logic";

export const RegisterFormContainer: FC = () => {
  const { control, formState, onSubmit } = useRegisterForm();

  return (
    <RegisterForm control={control} formState={formState} onSubmit={onSubmit} />
  );
};
