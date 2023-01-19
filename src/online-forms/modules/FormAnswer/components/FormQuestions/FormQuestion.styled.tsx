import { PrimaryButton } from "libs/ui";
import styled from "styled-components";

export const QuestionsLabel = styled.p`
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SubmitAnswers = styled(PrimaryButton)`
  width: 150px;
  align-self: end;
  margin-top: 5px;
`;
