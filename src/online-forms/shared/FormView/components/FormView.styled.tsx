import styled, { css } from "styled-components";
import { Stack } from "libs/ui";

export const Wrapper = styled(Stack)`
  width: 90%;
  margin: auto;
`;

export const QuestionWrapper = styled(Stack)`
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  position: relative;

  -webkit-box-shadow: 0px 0px 9px -2px rgba(142, 142, 142, 1);
  -moz-box-shadow: 0px 0px 9px -2px rgba(142, 142, 142, 1);
  box-shadow: 0px 0px 9px -2px rgba(142, 142, 142, 1);
`;

export const QuestionHeader = styled.p<{ isQuestionRequired: boolean }>`
  margin: 2px 0;
  width: 90%;

  ${(props) =>
    props.isQuestionRequired &&
    css`
      ::after {
        content: " *";
        color: red;
      }
    `}
`;

export const IconsWrapper = styled(Stack)`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
`;

export const IconWrapper = styled.div`
  :hover {
    color: ${(props) => props.theme.pallete.primary};
  }
`;
