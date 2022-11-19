import { toast as toastify, ToastOptions } from "react-toastify";

type ToastType = "default" | "info" | "success" | "error";

const defaultOptions: ToastOptions = {
  autoClose: 2500,
  position: "bottom-right",
  pauseOnFocusLoss: false,
  pauseOnHover: false,
};

export const toast = (
  type: ToastType,
  text: string,
  hideProgressBar = false
) => {
  switch (type) {
    case "default":
      return toastify(text, { ...defaultOptions, hideProgressBar });
    case "info":
      return toastify.info(text, { ...defaultOptions, hideProgressBar });
    case "success":
      return toastify.success(text, { ...defaultOptions, hideProgressBar });
    case "error":
      return toastify.error(text, { ...defaultOptions, hideProgressBar });
    default:
      return toastify(text, { ...defaultOptions, hideProgressBar });
  }
};
