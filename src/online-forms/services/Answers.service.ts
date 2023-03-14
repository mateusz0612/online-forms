import {
  db,
  addDoc,
  collection,
  query,
  where,
  Collections,
  getDocs,
} from "online-forms/firebase";
import { IFormAnswer } from "online-forms/types";

export const AnswersService = {
  create: async (formAnswersData: Omit<IFormAnswer, "id">) => {
    const createdAnswer = await addDoc(
      collection(db, Collections.answers),
      formAnswersData
    );

    return createdAnswer;
  },
  get: async (formId: string) => {
    const q = query(
      collection(db, Collections.answers),
      where("formId", "==", formId)
    );

    const docs = await getDocs(q);

    if (!docs) {
      throw new Error("No form answers data");
    }

    const data = docs?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));

    return data as IFormAnswer[];
  },
};
