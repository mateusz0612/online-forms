import { FC } from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar as MaterialToolbar,
  AppBarProps,
} from "@mui/material";

export const AppBar: FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <MaterialAppBar {...props}>
      <MaterialToolbar>{children}</MaterialToolbar>
    </MaterialAppBar>
  );
};
