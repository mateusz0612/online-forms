import { FC } from "react";
import { Modal as MaterialModal, ModalProps } from "@mui/material";

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return <MaterialModal {...props}>{children}</MaterialModal>;
};
