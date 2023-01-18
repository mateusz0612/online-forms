import { FC } from "react";
import {
  FormList,
  DeleteFormConfirmationModal,
  FormPreviewModal,
} from "../components";
import { useForms } from "../logic";
import { ModuleProps } from "../FormList.types";

export const FormListContainer: FC<ModuleProps> = ({ limit }) => {
  const {
    isFormDeletePending,
    isFormDeleteConfirmationModalOpen,
    isFormPreviewModalOpen,
    forms,
    currentPickedForm,
    onCopyFromLinkClick,
    onAnalyzeFormClick,
    onDeleteFormClick,
    onRejectDeleteFormClick,
    onConfirmDeleteFormClick,
    onCloseFormPreviewClick,
    onShowFormPreviewClick,
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
        onShowFormClick={onShowFormPreviewClick}
      />
      <DeleteFormConfirmationModal
        formName={currentPickedForm?.name}
        isOpen={isFormDeleteConfirmationModalOpen}
        onClose={onRejectDeleteFormClick}
        onConfirm={() => onConfirmDeleteFormClick(currentPickedForm?.id)}
      />
      <FormPreviewModal
        isOpen={isFormPreviewModalOpen}
        currentPickedForm={currentPickedForm}
        onConfirm={onCloseFormPreviewClick}
      />
    </>
  );
};
