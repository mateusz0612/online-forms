import {
  collection,
  Collections,
  db,
  getDocs,
  query,
  where,
} from "online-forms/firebase";
import { IUserData } from "online-forms/types";

export const UsersService = {
  getUserData: async (id: string) => {
    const q = query(collection(db, Collections.users), where("id", "==", id));

    const userDoc = await getDocs(q);

    const user = userDoc?.docs[0]?.data();

    return user as IUserData;
  },
};
