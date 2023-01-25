import { FC } from "react";
import { LoginForm } from "../components";
import { useLoginForm } from "../logic";

export const LoginFormContainer: FC = () => {
  const { control, formState, onSubmit } = useLoginForm();

  return (
    <LoginForm control={control} formState={formState} onSubmit={onSubmit} />
  );
};
