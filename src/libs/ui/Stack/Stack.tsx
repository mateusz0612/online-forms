import { FC } from "react";
import { Stack as MaterialStack, StackProps } from "@mui/material";

export const Stack: FC<StackProps> = ({ children, ...props }) => {
  return <MaterialStack {...props}>{children}</MaterialStack>;
};
