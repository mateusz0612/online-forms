import { FC } from "react";
import { FormListContainer } from "./containers";
import { ModuleProps } from "./FormList.types";

export const FormList: FC<ModuleProps> = (props) => {
  return <FormListContainer {...props} />;
};
