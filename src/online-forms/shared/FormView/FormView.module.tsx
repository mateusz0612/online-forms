import { FC } from "react";
import { FormViewContainer } from "./containers/FormView.container";
import { FormViewProps } from "./FormView.types";

export const FormView: FC<FormViewProps> = (props) => {
  return <FormViewContainer {...props} />;
};
