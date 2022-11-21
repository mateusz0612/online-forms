import {
  db,
  auth,
  addDoc,
  collection,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  query,
  where,
  getDocs,
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
  getUserData: async (id: string) => {
    const q = query(collection(db, Collections.users), where("id", "==", id));

    const userDoc = await getDocs(q);

    const user = userDoc?.docs[0]?.data();

    return user as IUserData;
  },
};
