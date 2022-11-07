import { FC } from "react";
import { FormList } from "../components";
import { useForms } from "../logic";
import { ModuleProps } from "../FormList.types";

export const FormListContainer: FC<ModuleProps> = ({ limit }) => {
  const { forms } = useForms();

  return <FormList forms={forms?.state} limit={limit} />;
};
