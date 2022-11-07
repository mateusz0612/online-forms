import { FC, BaseSyntheticEvent } from "react";
import { IRegister, IFormState } from "libs/development-kit/form";
import { ILoginCredentials } from "online-forms/types";
import { TextField, Stack, PrimaryButton } from "libs/ui";
import * as Styled from "./LoginForm.styled";

interface Props {
  register: IRegister<ILoginCredentials>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  formState: IFormState<ILoginCredentials>;
}

export const LoginForm: FC<Props> = ({ register, onSubmit, formState }) => {
  const { errors, isSubmitting } = formState;

  return (
    <Stack spacing={2}>
      <Styled.LoginFormLabel>Login</Styled.LoginFormLabel>
      <TextField
        label="Email"
        placeholder="Enter username..."
        type="email"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        label="Password"
        placeholder="Enter password..."
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <PrimaryButton onClick={onSubmit} disabled={isSubmitting}>
        Login
      </PrimaryButton>
    </Stack>
  );
};
