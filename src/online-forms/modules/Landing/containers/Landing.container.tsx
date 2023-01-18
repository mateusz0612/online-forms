import { FC } from "react";
import { LandingView } from "../components";
import { useLanding } from "../logic";

export const LandingContainer: FC = () => {
  const { isLoginFormShowed, onSwitchShowedForm } = useLanding();

  return (
    <LandingView
      isLoginFormShowed={isLoginFormShowed}
      onSwitchShowedForm={onSwitchShowedForm}
    />
  );
};
