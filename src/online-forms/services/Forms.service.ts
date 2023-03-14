import {
  db,
  query,
  collection,
  where,
  getDocs,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
  Collections,
} from "online-forms/firebase";
import { IForm } from "online-forms/types";

export const FormsService = {
  userList: async (userId: string) => {
    const q = query(
      collection(db, Collections.forms),
      where("userId", "==", userId)
    );

    const docs = await getDocs(q);

    if (!docs) {
      throw new Error("No user forms data");
    }

    const data = docs?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));

    return data as IForm[];
  },
  create: async (form: Omit<IForm, "id">) => {
    const createdForm = await addDoc(collection(db, Collections.forms), form);

    return createdForm;
  },
  get: async (formId: string) => {
    const formRef = doc(db, Collections.forms, formId);

    const formDoc = await getDoc(formRef);

    if (!formDoc?.data()) {
      throw new Error("No form data");
    }

    return { ...formDoc?.data(), id: formDoc?.id } as IForm;
  },
  delete: async (formId: string) => {
    const formToDelete = doc(db, Collections.forms, formId);

    await deleteDoc(formToDelete);
  },
};
