import { FC } from "react";
import {
  FormList,
  DeleteFormConfirmationModal,
  FormQuestionsPreviewModal,
} from "../components";
import { useForms } from "../logic";
import { ModuleProps } from "../FormList.types";

export const FormListContainer: FC<ModuleProps> = ({ limit }) => {
  const {
    isFormDeletePending,
    isFormDeleteConfirmationModalOpen,
    isFormQuestionPreviewModalOpen,
    forms,
    currentPickedForm,
    onCopyFromLinkClick,
    onAnalyzeFormClick,
    onDeleteFormClick,
    onRejectDeleteFormClick,
    onConfirmDeleteFormClick,
    onCloseFormQuestionPreviewClick,
    onShowFormQuestionsClick,
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
        onShowFormClick={onShowFormQuestionsClick}
      />
      <DeleteFormConfirmationModal
        formName={currentPickedForm?.name}
        isOpen={isFormDeleteConfirmationModalOpen}
        onClose={onRejectDeleteFormClick}
        onConfirm={() => onConfirmDeleteFormClick(currentPickedForm?.id)}
      />
      <FormQuestionsPreviewModal
        isOpen={isFormQuestionPreviewModalOpen}
        currentPickedForm={currentPickedForm}
        onConfirm={onCloseFormQuestionPreviewClick}
      />
    </>
  );
};
