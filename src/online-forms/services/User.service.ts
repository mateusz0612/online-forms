import {
  collection,
  Collections,
  db,
  getDocs,
  doc,
  setDoc,
  query,
  where,
} from "online-forms/firebase";
import { IUserData } from "online-forms/types";

export const UserService = {
  getUserData: async (id: string) => {
    const q = query(collection(db, Collections.users), where("id", "==", id));

    const userDoc = await getDocs(q);

    const user = userDoc?.docs[0]?.data();

    return user as IUserData;
  },
  editUser: async (userData: IUserData) => {
    const userDoc = doc(db, Collections.users, userData?.id);

    await setDoc(userDoc, userData).catch((error) => {
      throw new Error(error);
    });
  },
};
