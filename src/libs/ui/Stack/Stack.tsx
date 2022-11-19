import { FC, forwardRef } from "react";
import { Stack as MaterialStack, StackProps } from "@mui/material";

export const Stack: FC<StackProps> = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <MaterialStack ref={ref} {...props}>
        {children}
      </MaterialStack>
    );
  }
);
