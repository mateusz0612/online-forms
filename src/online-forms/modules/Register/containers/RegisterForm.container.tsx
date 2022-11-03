import { FC } from "react";
import { RegisterForm } from "../components";
import { useRegisterForm } from "../logic";

export const RegisterFormContainer: FC = () => {
  const { register, onSubmit, formState } = useRegisterForm();

  return (
    <RegisterForm
      register={register}
      onSubmit={onSubmit}
      formState={formState}
    />
  );
};
