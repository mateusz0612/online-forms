import { useState } from "react";

enum FormKeys {
  login = "login",
  register = "register",
}

export const useLanding = () => {
  const [showedForm, setShowedForm] = useState(FormKeys.login);

  const isLoginFormShowed = showedForm === FormKeys.login;

  const onSwitchShowedForm = () =>
    isLoginFormShowed
      ? setShowedForm(FormKeys.register)
      : setShowedForm(FormKeys.login);

  return {
    isLoginFormShowed,
    onSwitchShowedForm,
  } as const;
};
