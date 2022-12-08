import { FC } from "react";
import { Stack, Progress } from "libs/ui";
import { Renderer } from "libs/development-kit/api";
import {
  FormAnswerHeader,
  FormQuestions,
  FormAnswerSuccessModal,
} from "../components";
import { useFormAnswer } from "../logic";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  width: 85%;
  margin: auto;

  @media ${(props) => props.theme.queries.tablet} {
    width: 50%;
  }
`;

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
    <Wrapper>
      <Renderer
        state={fetchState}
        pending={() => <Pending />}
        fail={() => <p>Error occured</p>}
      >
        {(formWithUserData) => {
          return (
            <Stack mt={2}>
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
    </Wrapper>
  );
};
