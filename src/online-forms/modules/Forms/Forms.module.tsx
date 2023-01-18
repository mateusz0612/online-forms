import { FC } from "react";
import { FormsContainer } from "./containers";
import { ModuleProps } from "./Formstypes";

export const Forms: FC<ModuleProps> = (props) => {
  return <FormsContainer {...props} />;
};
