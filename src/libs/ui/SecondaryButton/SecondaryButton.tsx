import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";

export const SecondaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="outlined" {...props}>
      {children}
    </Button>
  );
};
