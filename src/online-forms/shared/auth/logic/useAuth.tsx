import { useAuthState } from "online-forms/firebase";
import { useFetch } from "libs/development-kit/api";
import {
  IRegisterCredentials,
  AuthErrorType,
  ILoginCredentials,
  CacheKeys,
} from "online-forms/types";
import { AuthService } from "../services";

export const useAuth = () => {
  const [user, isAuthStateLoading] = useAuthState();

  const { state: userDataFetchState } = useFetch(
    [CacheKeys.user, `${user?.uid}`],
    async () => await AuthService.getUserData(`${user?.uid}`)
  );

  const loading =
    isAuthStateLoading || userDataFetchState?.status === "loading";
  const userData = userDataFetchState?.data;

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
    userData,
    registerUser,
    loginUser,
    signOutUser,
  } as const;
};
