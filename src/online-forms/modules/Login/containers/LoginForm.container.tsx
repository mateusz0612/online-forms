import { FC } from "react";
import { LoginForm } from "../components";
import { useLoginForm } from "../logic";

export const LoginFormContainer: FC = () => {
  const { register, onSubmit, formState } = useLoginForm();

  return (
    <LoginForm register={register} onSubmit={onSubmit} formState={formState} />
  );
};
