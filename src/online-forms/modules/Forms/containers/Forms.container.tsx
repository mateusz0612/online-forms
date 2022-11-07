import { FC } from "react";
import { FormList } from "../components";
import { useForms } from "../logic";
import { ModuleProps } from "../Forms.types";

export const FormsContainer: FC<ModuleProps> = (props) => {
  const { forms } = useForms();

  return <FormList forms={forms?.state} />;
};
