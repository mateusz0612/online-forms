import { FC } from "react";
import { Stack, Progress } from "libs/ui";
import { Renderer } from "libs/development-kit/api";
import {
  FormAnswerHeader,
  FormQuestions,
  FormAnswerSuccessModal,
} from "../components";
import { useFormAnswer } from "../logic";

const Pending: FC = () => (
  <Stack width="100%" justifyContent="center" alignItems="center">
    <Progress />
  </Stack>
);

export const FormAnswerContainer: FC = () => {
  const {
    fetchState,
    formState,
    control,
    isFormPending,
    isSuccessModalOpen,
    register,
    onSuccessModalConfirm,
    onFormSubmit,
  } = useFormAnswer();

  return (
    <Renderer
      state={fetchState}
      pending={() => <Pending />}
      fail={() => <p>Error occured</p>}
    >
      {(formWithUserData) => {
        return (
          <Stack>
            <FormAnswerHeader formWithUserData={formWithUserData} />
            <FormQuestions
              formWithUserData={formWithUserData}
              formState={formState}
              control={control}
              isFormPending={isFormPending}
              register={register}
              onFormSubmit={onFormSubmit}
            />
            <FormAnswerSuccessModal
              isOpen={isSuccessModalOpen}
              onConfirm={onSuccessModalConfirm}
            />
          </Stack>
        );
      }}
    </Renderer>
  );
};
