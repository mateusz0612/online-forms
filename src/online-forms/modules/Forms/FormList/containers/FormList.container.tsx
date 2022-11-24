import { FC } from "react";
import { FormList } from "../components";
import { useForms } from "../logic";
import { ModuleProps } from "../FormList.types";

export const FormListContainer: FC<ModuleProps> = ({ limit }) => {
  const { isFormDeletePending, forms, onCopyFromLinkClick, onDeleteFormClick } =
    useForms();

  return (
    <FormList
      isFormDeletePending={isFormDeletePending}
      forms={forms?.state}
      limit={limit}
      onCopyFormLinkClick={onCopyFromLinkClick}
      onDeleteFormCLick={onDeleteFormClick}
    />
  );
};
