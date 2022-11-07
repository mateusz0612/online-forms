import { useAuthContext } from "online-forms/shared/Auth";
import { useFetch } from "libs/development-kit/api";
import { FormsService } from "../services";
import { CacheKeys } from "online-forms/types";

export const useForms = () => {
  const { user } = useAuthContext();

  const forms = useFetch(
    [CacheKeys.forms, `${user?.uid}`],
    async () => await FormsService.userFormsList(`${user?.uid}`)
  );

  console.log(forms);

  return {
    forms,
  } as const;
};
