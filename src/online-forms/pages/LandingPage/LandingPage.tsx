import { FC, useState } from "react";
import { Login } from "online-forms/modules/Login";
import { Register } from "online-forms/modules/Register";
import Logo from "/logo.png";
import * as Styled from "./LandingPage.styled";

enum FormKeys {
  login = "login",
  register = "register",
}

const useLandingPage = () => {
  const [showedForm, setShowedForm] = useState(FormKeys.login);

  const isLoginFormShowed = showedForm === FormKeys.login;

  const switchShowedForm = () =>
    isLoginFormShowed
      ? setShowedForm(FormKeys.register)
      : setShowedForm(FormKeys.login);

  return {
    isLoginFormShowed,
    switchShowedForm,
  } as const;
};

export const LandingPage: FC = () => {
  const { isLoginFormShowed, switchShowedForm } = useLandingPage();

  return (
    <Styled.Wrapper justifyContent="center">
      <Styled.Logo alt="Logo" src={Logo} />
      {isLoginFormShowed ? <Login /> : <Register />}
      <Styled.SwitchFormLink onClick={switchShowedForm}>
        {isLoginFormShowed
          ? `Don't have an account? Register`
          : `Already have an account? Login`}
      </Styled.SwitchFormLink>
    </Styled.Wrapper>
  );
};
