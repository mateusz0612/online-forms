import { FC } from "react";
import { IForm, IUserData } from "online-forms/types";
import * as Styled from "./FormAnswerHeader.styled";

interface Props {
  formWithUserData: IForm & IUserData;
}

export const FormAnswerHeader: FC<Props> = ({ formWithUserData }) => {
  return (
    <Styled.Wrapper p={3}>
      <h1>Welcome!</h1>
      <p>
        <span>
          {formWithUserData?.username} ({formWithUserData?.email})
        </span>{" "}
        requested your answers on <span>{formWithUserData?.name}</span>
      </p>
      <h2>About</h2>
      <Styled.Description>{formWithUserData?.description}</Styled.Description>
    </Styled.Wrapper>
  );
};
