import { FC } from "react";
import { IForm, IUserData } from "online-forms/types";
import * as Styled from "./FormAnswerHeader.styled";

interface Props {
  userData: IUserData;
  formData: IForm;
}

export const FormAnswerHeader: FC<Props> = ({ userData, formData }) => {
  return (
    <Styled.Wrapper p={3}>
      <h1>Welcome!</h1>
      <Styled.WelcomeSectionWrapper gap={2}>
        <Styled.Avatar
          src={userData?.profileImageUrl}
          alt="Form owner avatar"
        />
        <p>
          <span>
            {userData?.username} ({userData?.email})
          </span>{" "}
          requested your answers on <span>{formData?.name}</span>
        </p>
      </Styled.WelcomeSectionWrapper>
      <h2>About</h2>
      <Styled.Description>{formData?.description}</Styled.Description>
    </Styled.Wrapper>
  );
};
