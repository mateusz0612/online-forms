import { collection, query, where, getDocs } from "firebase/firestore";
import { db, Collections } from "online-forms/firebase";
import { IForm } from "online-forms/types";

export const FormsService = {
  userFormsList: async (userId: string) => {
    const q = query(
      collection(db, Collections.forms),
      where("userId", "==", userId)
    );

    const docs = await getDocs(q);

    const data = docs?.docs?.map((doc) => doc.data());

    return data as IForm[];
  },
};
