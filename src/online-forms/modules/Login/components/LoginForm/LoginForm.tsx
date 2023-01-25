import { FC, BaseSyntheticEvent } from "react";
import { IControl, IFormState } from "libs/development-kit/form";
import { ILoginCredentials } from "online-forms/types";
import { TextField, Stack, PrimaryButton } from "libs/ui";
import * as Styled from "./LoginForm.styled";

interface Props {
  control: IControl<ILoginCredentials>;
  formState: IFormState<ILoginCredentials>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
}

export const LoginForm: FC<Props> = ({ control, onSubmit, formState }) => {
  const { isSubmitting } = formState;

  return (
    <Stack spacing={2}>
      <Styled.LoginFormLabel>Login</Styled.LoginFormLabel>
      <TextField
        name="email"
        label="Email"
        placeholder="Enter username..."
        type="email"
        control={control}
      />
      <TextField
        name="password"
        label="Password"
        placeholder="Enter password..."
        type="password"
        control={control}
      />
      <PrimaryButton onClick={onSubmit} disabled={isSubmitting}>
        Login
      </PrimaryButton>
    </Stack>
  );
};
