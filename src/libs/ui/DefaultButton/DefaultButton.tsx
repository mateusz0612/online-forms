import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";

export const DefaultButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
