import { useState } from "react";
import { useForm } from "libs/development-kit/form";
import { useQueryClient, usePost } from "libs/development-kit/api";
import { toast } from "libs/development-kit/toasts";
import * as validation from "libs/development-kit/validation";
import { useAuthContext } from "online-forms/modules/Auth";
import { CacheKeys, IUserData } from "online-forms/types";
import { ProfileEditModuleProps } from "online-forms/modules/ProfileEdit/ProfileEdit.types";
import { UserService } from "online-forms/services";

const getSubmitButtonDisabilityState = ({
  isUserEditingPending,
  hasDirtyField,
  hasImage,
}: {
  isUserEditingPending: boolean;
  hasDirtyField: boolean;
  hasImage: boolean;
}) => {
  if (isUserEditingPending) {
    return true;
  }

  if (hasImage) {
    return false;
  }

  if (hasDirtyField) {
    return true;
  }

  return false;
};

const userFormValidationSchema = validation.object().shape({
  username: validation
    .string()
    .trim()
    .required("Username is required")
    .min(6, "Enter atleast 6 characters")
    .max(32, "Username cannot be longer than 32 characters"),
});

export const useProfileEditForm = ({ onClose }: ProfileEditModuleProps) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const { userData } = useAuthContext();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState } = useForm<IUserData>({
    defaultValues: userData,
    validationSchema: userFormValidationSchema,
  });

  const { mutateAsync: editUser, isLoading: isUserEditingPending } =
    usePost<IUserData>({
      mutationFn: async (userData) => {
        await UserService.editUser(userData, profileImage);
        await queryClient.invalidateQueries([
          CacheKeys.user,
          `${userData?.id}`,
        ]);
      },
      onSuccess: (_, userData) => {
        toast("success", "Profile edited!");
        reset(userData);
        setProfileImage(null);
      },
      onError: () => {
        toast("error", "Something went wrong please try again");
      },
    });

  const disableSubmit = getSubmitButtonDisabilityState({
    isUserEditingPending,
    hasDirtyField: Object.keys(formState?.dirtyFields)?.length === 0,
    hasImage: profileImage !== null,
  });

  const onProfileImageAdd = (file: File) => {
    setProfileImage(file);
  };

  const onUserEditClose = () => {
    setProfileImage(null);
    reset(userData);

    onClose();
  };

  const onUserEditSubmit = handleSubmit(async (userData) => {
    await editUser({ ...userData });
  });

  return {
    disableSubmit,
    isUserEditingPending,
    userData,
    formState,
    register,
    onUserEditClose,
    onProfileImageAdd,
    onUserEditSubmit,
  } as const;
};
