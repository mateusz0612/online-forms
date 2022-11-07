import { AuthError } from "firebase/auth";

export enum CacheKeys {
  forms = "forms",
}

export type AuthErrorType = AuthError;

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

export interface IAnswer {
  id: string;
  content: string;
}

export interface IQuestion {
  content: string;
  answers: IAnswer[];
}

export interface IForm {
  id: string;
  userId: string;
  name: string;
  description: string;
  createdAt: string;
  questions: IQuestion[];
}
