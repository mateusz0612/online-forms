import { useAuthState } from "online-forms/firebase";
import { AuthService } from "../services";
import {
  IRegisterCredentials,
  AuthErrorType,
  ILoginCredentials,
} from "online-forms/shared/types";

export const useAuth = () => {
  const [user, loading] = useAuthState();

  const registerUser = async (
    credentials: IRegisterCredentials,
    onError?: (error: AuthErrorType) => void
  ) => {
    try {
      await AuthService.register(credentials);
    } catch (error: unknown) {
      if (onError) {
        onError(error as AuthErrorType);
      }
    }
  };

  const loginUser = async (
    credentials: ILoginCredentials,
    onError?: (error: AuthErrorType) => void
  ) => {
    try {
      await AuthService.login(credentials);
    } catch (error: unknown) {
      if (onError) {
        onError(error as AuthErrorType);
      }
    }
  };

  const signOutUser = async () => await AuthService.signOut();

  return {
    loading,
    user,
    registerUser,
    loginUser,
    signOutUser,
  };
};
