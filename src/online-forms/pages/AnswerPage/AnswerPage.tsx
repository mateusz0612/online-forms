import { FC } from "react";
import { Stack } from "libs/ui";
import { FormAnswer } from "online-forms/modules/Forms/FormAnswer";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  width: 85%;
  margin: auto;

  @media ${(props) => props.theme.queries.tablet} {
    width: 50%;
  }
`;

export const AnswerPage: FC = () => {
  return (
    <Wrapper pt={5}>
      <FormAnswer />
    </Wrapper>
  );
};
