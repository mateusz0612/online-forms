import { useAuthContext } from "online-forms/shared/Auth";
import { useFetch } from "libs/development-kit/api";
import { FormsService } from "online-forms/modules/Forms/services";
import { CacheKeys } from "online-forms/types";

export const useForms = () => {
  const { user } = useAuthContext();

  const forms = useFetch(
    [CacheKeys.forms, `${user?.uid}`],
    async () => await FormsService.userFormsList(`${user?.uid}`)
  );

  return {
    forms,
  } as const;
};
