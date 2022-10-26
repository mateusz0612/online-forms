import { FC } from "react";
import { LoginForm } from "../components";
import { useLoginForm } from "../logic";

export const LoginFormContainer: FC = () => {
  const { register, onSubmit, errors } = useLoginForm();

  return <LoginForm register={register} onSubmit={onSubmit} errors={errors} />;
};
