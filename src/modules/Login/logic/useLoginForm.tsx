import { useForm } from "libs/development-kit/form";
import { ILoginCredentials } from "../Login.types";
import * as yup from "yup";

const DEFAULT_LOGIN_FORM_VALUES: ILoginCredentials = {
  email: "",
  password: "",
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email("Enter valid email").required("Field is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must contains atleast 8 characters")
    .max(32, "Password cannot be longer than 32 characters"),
});

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginCredentials>({
    defaultValues: DEFAULT_LOGIN_FORM_VALUES,
    validationSchema: loginFormSchema,
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return {
    register,
    onSubmit,
    errors,
  } as const;
};
