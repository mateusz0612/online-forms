import { FC } from "react";
import { Stack } from "libs/ui";
import { FormCreator } from "online-forms/modules/Forms/FormCreator";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin: 0;
  letter-spacing: 1px;
`;

export const CreateFormPage: FC = () => {
  return (
    <Stack mt={4}>
      <Title>Create Form</Title>
      <FormCreator />
    </Stack>
  );
};
