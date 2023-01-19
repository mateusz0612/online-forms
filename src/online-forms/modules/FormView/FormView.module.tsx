import { FC } from "react";
import { FormViewProps } from "./FormView.types";
import { FormViewContainer } from "./containers";

export const FormView: FC<FormViewProps> = (props) => {
  return <FormViewContainer {...props} />;
};
