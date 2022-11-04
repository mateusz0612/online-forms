import { useForm } from "libs/development-kit/form";
import { useNavigate } from "libs/development-kit/router";
import { useAuthContext } from "online-forms/shared/auth";
import { ILoginCredentials } from "online-forms/shared/types";
import { Paths } from "online-forms/routes";
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

const errorCodes = {
  userNotFound: "auth/user-not-found",
  userWrongPassword: "auth/wrong-password",
};

const errorCodesMessages = {
  userNotFound: `User with this email doesn't exits`,
  userWrongPassword: "Given password is wrong",
};

export const useLoginForm = () => {
  const { register, handleSubmit, setError, formState } =
    useForm<ILoginCredentials>({
      defaultValues: DEFAULT_LOGIN_FORM_VALUES,
      validationSchema: loginFormSchema,
    });

  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  const onError = (errorCode: string) => {
    switch (errorCode) {
      case errorCodes?.userNotFound:
        setError("email", { message: errorCodesMessages?.userNotFound });
        break;
      case errorCodes?.userWrongPassword:
        setError("password", {
          message: errorCodesMessages?.userWrongPassword,
        });
      default:
        return;
    }
  };

  const onSubmit = handleSubmit(async (credentials) => {
    await loginUser(
      credentials,
      () => navigate(Paths.Dashboard),
      (error) => onError(error?.code)
    );
  });

  return {
    register,
    onSubmit,
    formState,
  } as const;
};
