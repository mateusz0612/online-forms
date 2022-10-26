import { FC } from "react";
import { FormLabel as MaterialFormLabel, FormLabelProps } from "@mui/material";

export const FormLabel: FC<FormLabelProps> = ({ children, ...props }) => {
  return <MaterialFormLabel {...props}>{children}</MaterialFormLabel>;
};
