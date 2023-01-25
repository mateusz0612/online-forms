import { BaseSyntheticEvent, FC } from "react";
import { TextField, Stack, PrimaryButton } from "libs/ui";
import { IFormState, IControl } from "libs/development-kit/form";
import { IRegisterCredentials } from "online-forms/types";
import * as Styled from "./RegisterForm.styled";

interface Props {
  control: IControl<IRegisterCredentials>;
  formState: IFormState<IRegisterCredentials>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
}

export const RegisterForm: FC<Props> = ({ onSubmit, control, formState }) => {
  const { isSubmitting } = formState;

  return (
    <Stack justifyContent="center" spacing={2}>
      <Styled.RegisterFormLabel>Register</Styled.RegisterFormLabel>
      <TextField
        name="email"
        label="Email"
        placeholder="Enter email..."
        control={control}
      />
      <TextField
        name="username"
        label="Username"
        placeholder="Enter username..."
        control={control}
      />
      <TextField
        name="password"
        label="Password"
        placeholder="Enter password..."
        type="password"
        control={control}
      />
      <TextField
        name="repeatPassword"
        label="Repeat password"
        placeholder="Enter repeat password..."
        type="password"
        control={control}
      />
      <PrimaryButton onClick={onSubmit} disabled={isSubmitting}>
        Register
      </PrimaryButton>
    </Stack>
  );
};
