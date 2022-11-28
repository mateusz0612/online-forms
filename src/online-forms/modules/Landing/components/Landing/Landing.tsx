import { FC } from "react";
import { Login } from "online-forms/modules/Login";
import { Register } from "online-forms/modules/Register";
import Logo from "/logo.png";
import * as Styled from "./Landing.styled";

interface Props {
  isLoginFormShowed: boolean;
  onSwitchShowedForm: () => void;
}

export const Landing: FC<Props> = ({
  isLoginFormShowed,
  onSwitchShowedForm,
}) => {
  return (
    <Styled.Wrapper justifyContent="center">
      <Styled.Logo alt="Logo" src={Logo} />
      {isLoginFormShowed ? <Login /> : <Register />}
      <Styled.SwitchFormLink onClick={onSwitchShowedForm}>
        {isLoginFormShowed
          ? `Don't have an account? Register`
          : `Already have an account? Login`}
      </Styled.SwitchFormLink>
    </Styled.Wrapper>
  );
};
