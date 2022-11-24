import { forwardRef, RefObject } from "react";
import { TextField as MaterialTextField, TextFieldProps } from "@mui/material";

export const TextField = forwardRef((props: TextFieldProps, ref) => (
  <MaterialTextField ref={ref as RefObject<HTMLDivElement>} {...props}>
    {props.children}
  </MaterialTextField>
));
