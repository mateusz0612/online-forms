import {
  collection,
  Collections,
  db,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "online-forms/firebase";
import { IUserData } from "online-forms/types";
import { id } from "libs/development-kit/helpers/id";

export const UserService = {
  get: async (id: string) => {
    const q = query(collection(db, Collections.users), where("id", "==", id));

    const userDoc = await getDocs(q);

    const user = userDoc?.docs[0]?.data();

    return user as IUserData;
  },
  edit: async (userData: IUserData, profileImage: File | null) => {
    const userDoc = doc(db, Collections.users, userData?.id);

    if (profileImage) {
      const storageRef = ref(storage, `avatars/${id()}`);

      const uploadProfileImage = await uploadBytesResumable(
        storageRef,
        profileImage
      );

      const profileImageUrl = await getDownloadURL(uploadProfileImage.ref);

      await setDoc(userDoc, { ...userData, profileImageUrl }).catch((error) => {
        throw new Error(error);
      });

      return;
    }

    await setDoc(userDoc, userData).catch((error) => {
      throw new Error(error);
    });
  },
};
