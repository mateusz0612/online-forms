import {
  db,
  query,
  collection,
  where,
  getDocs,
  addDoc,
  doc,
  getDoc,
  Collections,
} from "online-forms/firebase";
import { IForm, IFormAnswersRequest } from "online-forms/types";

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
  getForm: async (id: string) => {
    const formRef = doc(db, Collections.forms, id);

    const formDoc = await getDoc(formRef);

    return { ...formDoc?.data(), id: formDoc?.id } as IForm;
  },
  createFormAnswer: async (formAnswersData: IFormAnswersRequest) => {
    const createdAnswer = await addDoc(
      collection(db, Collections.answers),
      formAnswersData
    );

    return createdAnswer;
  },
};
