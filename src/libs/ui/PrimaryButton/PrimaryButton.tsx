import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
};
