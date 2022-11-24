import { FC } from "react";
import { Tile, Stack, PrimaryButton } from "libs/ui";
import { FormView } from "online-forms/shared/FormView";
import { IForm, IUserData } from "online-forms/types";
import { IControl, IFormState, IRegister } from "libs/development-kit/form";
import * as Styled from "./FormQuestion.styled";

interface Props {
  formWithUserData: IForm & IUserData;
  control: IControl<unknown>;
  isFormPending: boolean;
  formState: IFormState<unknown>;
  register: IRegister<unknown>;
  onFormSubmit: () => void;
}

export const FormQuestions: FC<Props> = ({
  formWithUserData,
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
        questions={formWithUserData?.questions}
        control={control}
        formState={formState}
        register={register}
      />
      <Styled.SubmitAnswers onClick={onFormSubmit} disabled={isFormPending}>
        Submit form
      </Styled.SubmitAnswers>
    </Tile>
  );
};