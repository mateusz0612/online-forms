import { useForm } from "libs/development-kit/form";
import { useNavigate } from "libs/development-kit/routing";
import * as validation from "libs/development-kit/validation";
import { Paths } from "online-forms/routes";
import { useAuthContext } from "online-forms/shared/Auth";
import { IRegisterCredentials } from "online-forms/types";

const DEFAULT_VALUES: IRegisterCredentials = {
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
};

const registerFormSchema = validation.object().shape({
  email: validation
    .string()
    .trim()
    .email("Enter valid email")
    .required("Email is required"),
  username: validation
    .string()
    .trim()
    .required("Username is required")
    .min(6, "Enter atleast 6 characters")
    .max(32, "Username cannot be longer than 32 characters"),
  password: validation
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters long")
    .max(32, "Password cannot be longer than 32 characters"),
  repeatPassword: validation
    .string()
    .trim()
    .required("Repeat password is required")
    .oneOf([validation.ref("password"), null], "Passwords must match"),
});

const errorCodes = {
  emailUsed: "auth/email-already-in-use",
};

const errorMessages = {
  emailUsed: "Email is already used",
};

export const useRegisterForm = () => {
  const { handleSubmit, register, setError, formState } =
    useForm<IRegisterCredentials>({
      defaultValues: DEFAULT_VALUES,
      validationSchema: registerFormSchema,
    });

  const navigate = useNavigate();
  const { registerUser } = useAuthContext();

  const onError = (errorCode: string) => {
    switch (errorCode) {
      case errorCodes?.emailUsed:
        setError("email", { message: errorMessages?.emailUsed });
      default:
        return;
    }
  };

  const onSubmit = handleSubmit(async (credentials) => {
    await registerUser(
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
