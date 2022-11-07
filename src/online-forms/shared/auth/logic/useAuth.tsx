import { useAuthState } from "online-forms/firebase";
import { AuthService } from "../services";
import {
  IRegisterCredentials,
  AuthErrorType,
  ILoginCredentials,
} from "online-forms/types";

export const useAuth = () => {
  const [user, loading] = useAuthState();

  const registerUser = async (
    credentials: IRegisterCredentials,
    onSuccess: () => void,
    onError: (error: AuthErrorType) => void
  ) => {
    try {
      await AuthService.register(credentials);
      onSuccess();
    } catch (error: unknown) {
      onError(error as AuthErrorType);
    }
  };

  const loginUser = async (
    credentials: ILoginCredentials,
    onSuccess: () => void,
    onError: (error: AuthErrorType) => void
  ) => {
    try {
      await AuthService.login(credentials);
      onSuccess();
    } catch (error: unknown) {
      onError(error as AuthErrorType);
    }
  };

  const signOutUser = async () => await AuthService.signOut();

  return {
    loading,
    user,
    registerUser,
    loginUser,
    signOutUser,
  } as const;
};
