import { FC } from "react";
import { Tile } from "libs/ui";
import { FormView } from "online-forms/modules/FormView";
import { IForm, IUserData, FormData } from "online-forms/types";
import { IControl, IFormState, IRegister } from "libs/development-kit/form";
import * as Styled from "./FormQuestion.styled";

interface Props {
  formData: IForm;
  control: IControl<FormData>;
  isFormPending: boolean;
  formState: IFormState<FormData>;
  register: IRegister<FormData>;
  onFormSubmit: () => void;
}

export const FormQuestions: FC<Props> = ({
  formData,
  formState,
  control,
  isFormPending,
  register,
  onFormSubmit,
}) => {
  return (
    <Tile pl={5} pr={5} pb={2} mt={3} mb={3}>
      <Styled.QuestionsLabel>Questions:</Styled.QuestionsLabel>
      <FormView
        isEditable={false}
        questions={formData?.questions}
        control={control}
        formState={formState}
      />
      <Styled.SubmitAnswers onClick={onFormSubmit} disabled={isFormPending}>
        Submit form
      </Styled.SubmitAnswers>
    </Tile>
  );
};
