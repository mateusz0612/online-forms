import {
  db,
  query,
  collection,
  where,
  getDocs,
  addDoc,
  Collections,
} from "online-forms/firebase";
import { IForm } from "online-forms/types";

export const FormsService = {
  userFormsList: async (userId: string) => {
    const q = query(
      collection(db, Collections.forms),
      where("userId", "==", userId)
    );

    const docs = await getDocs(q);

    const data = docs?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));

    return data as IForm[];
  },
  createForm: async (form: Omit<IForm, "id">) => {
    const createdForm = await addDoc(collection(db, Collections.forms), form);

    return createdForm;
  },
};
