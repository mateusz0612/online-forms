import { FC } from "react";
import { Landing } from "../components";
import { useLanding } from "../logic";

export const LandingContainer: FC = () => {
  const { isLoginFormShowed, onSwitchShowedForm } = useLanding();

  return (
    <Landing
      isLoginFormShowed={isLoginFormShowed}
      onSwitchShowedForm={onSwitchShowedForm}
    />
  );
};
