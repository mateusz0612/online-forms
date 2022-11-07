import { BaseSyntheticEvent, FC } from "react";
import { TextField, Stack, PrimaryButton } from "libs/ui";
import { IFormState, IRegister } from "libs/development-kit/form";
import { IRegisterCredentials } from "online-forms/types";
import * as Styled from "./RegisterForm.styled";

interface Props {
  register: IRegister<IRegisterCredentials>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  formState: IFormState<IRegisterCredentials>;
}

export const RegisterForm: FC<Props> = ({ onSubmit, register, formState }) => {
  const { errors, isSubmitting } = formState;

  return (
    <Stack justifyContent="center" spacing={2}>
      <Styled.RegisterFormLabel>Register</Styled.RegisterFormLabel>
      <TextField
        label="Email"
        placeholder="Enter email..."
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        label="Username"
        placeholder="Enter username..."
        error={!!errors?.username}
        helperText={errors?.username?.message}
        {...register("username")}
      />
      <TextField
        label="Password"
        placeholder="Enter password..."
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <TextField
        label="Repeat password"
        placeholder="Enter repeat password..."
        type="password"
        error={!!errors?.repeatPassword}
        helperText={errors?.repeatPassword?.message}
        {...register("repeatPassword")}
      />
      <PrimaryButton onClick={onSubmit} disabled={isSubmitting}>
        Register
      </PrimaryButton>
    </Stack>
  );
};
