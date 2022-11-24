import {
  db,
  auth,
  addDoc,
  collection,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  Collections,
} from "online-forms/firebase";
import {
  ILoginCredentials,
  IRegisterCredentials,
  IUserData,
} from "online-forms/types";

export const AuthService = {
  register: async (credentials: IRegisterCredentials) => {
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(
      auth,
      credentials?.email,
      credentials?.password
    );

    const userData: IUserData = {
      username: credentials?.username,
      email: credentials?.email,
      id: uid,
    };

    await addDoc(collection(db, Collections.users), userData);
  },
  login: async (credentials: ILoginCredentials) => {
    await signInWithEmailAndPassword(
      auth,
      credentials?.email,
      credentials?.password
    );
  },
  signOut: async () => await signOut(auth),
};
