import { AuthError } from "firebase/auth";

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}

export type AuthErrorType = AuthError;
