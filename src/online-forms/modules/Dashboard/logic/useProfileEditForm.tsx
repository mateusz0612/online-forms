import { useState } from "react";
import { useForm } from "libs/development-kit/form";
import { useQueryClient, usePost } from "libs/development-kit/api";
import { toast } from "libs/development-kit/toasts";
import { useAuthContext } from "online-forms/shared/Auth";
import { CacheKeys, IUserData } from "online-forms/types";
import { UserService } from "online-forms/shared/Users";
import * as yup from "yup";

const userFormValidationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(6, "Enter atleast 6 characters")
    .max(32, "Username cannot be longer than 32 characters"),
});

export const useProfileEditForm = () => {
  const [isProfileEditFormOpen, setIsProfileEditFormOpen] = useState(false);
  const { userData } = useAuthContext();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState } = useForm<IUserData>({
    defaultValues: userData,
    validationSchema: userFormValidationSchema,
  });

  const { mutateAsync: editUser, isLoading: isUserEditingPending } =
    usePost<IUserData>({
      mutationFn: async (userData) => await UserService.editUser(userData),
      onSuccess: (_, userData) => {
        toast("success", "Profile edited!");
        reset(userData);
      },
      onError: () => {
        toast("error", "Something went wrong please try again");
      },
    });

  const disableSubmit =
    isUserEditingPending || Object.keys(formState?.dirtyFields)?.length === 0;

  const onEditProfileClick = () => setIsProfileEditFormOpen(true);

  const onEditProfileClose = () => setIsProfileEditFormOpen(false);

  const onUserEditSubmit = handleSubmit(async (userData) => {
    console.log(userData);

    await editUser(userData);

    queryClient.invalidateQueries([CacheKeys.user, `${userData?.id}`]);
  });

  return {
    isProfileEditFormOpen,
    disableSubmit,
    userData,
    register,
    onEditProfileClick,
    onEditProfileClose,
    onUserEditSubmit,
  } as const;
};
