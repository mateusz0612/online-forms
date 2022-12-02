import { FC } from "react";
import { FormView } from "../components";
import { FormViewProps } from "../FormView.types";

export const FormViewContainer: FC<FormViewProps> = (props) => {
  return <FormView {...props} />;
};
