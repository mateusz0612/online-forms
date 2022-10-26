import { FC, BaseSyntheticEvent } from "react";
import { IRegister, IErrors } from "libs/development-kit/form";
import { ILoginCredentials } from "../../Login.types";
import { TextField, Stack, FormLabel, PrimaryButton } from "libs/ui";
import Logo from "assets/images/logo.png";
import * as Styled from "./LoginForm.styled";

interface Props {
  register: IRegister<ILoginCredentials>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  errors: Partial<IErrors<ILoginCredentials>>;
}

export const LoginForm: FC<Props> = ({ register, onSubmit, errors }) => {
  return (
    <Stack spacing={2}>
      <Styled.Logo src={Logo} alt="Online Forms Logo" />
      <FormLabel>Login</FormLabel>
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
      <PrimaryButton onClick={onSubmit}>Login</PrimaryButton>
    </Stack>
  );
};
