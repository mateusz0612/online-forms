import { FC } from "react";
import { FormList, DeleteFormConfirmationModal } from "../components";
import { useForms } from "../logic";
import { ModuleProps } from "../FormList.types";

export const FormListContainer: FC<ModuleProps> = ({ limit }) => {
  const {
    isFormDeletePending,
    isFormDeleteConfirmationModalOpen,
    forms,
    currentPickedForm,
    onCopyFromLinkClick,
    onAnalyzeFormClick,
    onDeleteFormClick,
    onRejectDeleteFormClick,
    onConfirmDeleteFormClick,
  } = useForms();

  return (
    <>
      <FormList
        isFormDeletePending={isFormDeletePending}
        forms={forms?.state}
        limit={limit}
        onCopyFormLinkClick={onCopyFromLinkClick}
        onDeleteFormCLick={onDeleteFormClick}
        onAnalyzeFormClick={onAnalyzeFormClick}
      />
      <DeleteFormConfirmationModal
        formName={currentPickedForm?.name}
        isOpen={isFormDeleteConfirmationModalOpen}
        onClose={onRejectDeleteFormClick}
        onConfirm={() => onConfirmDeleteFormClick(currentPickedForm?.id)}
      />
    </>
  );
};
