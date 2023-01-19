import { FC } from "react";
import { FormsContainer } from "./containers";
import { ModuleProps } from "./Forms.types";

export const Forms: FC<ModuleProps> = (props) => {
  return <FormsContainer {...props} />;
};
