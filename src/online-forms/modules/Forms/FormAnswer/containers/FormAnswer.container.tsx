import { FC } from "react";
import { Stack, Progress } from "libs/ui";
import { Renderer } from "libs/development-kit/api";
import { FormAnswerHeader, FormQuestions } from "../components";
import { useFormAnswer } from "../logic";

const Pending: FC = () => (
  <Stack width="100%" justifyContent="center" alignItems="center">
    <Progress />
  </Stack>
);

export const FormAnswerContainer: FC = () => {
  const { fetchState, control, isFormPending, register, onFormSubmit } =
    useFormAnswer();

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
              control={control}
              isFormPending={isFormPending}
              register={register}
              onFormSubmit={onFormSubmit}
            />
          </Stack>
        );
      }}
    </Renderer>
  );
};
