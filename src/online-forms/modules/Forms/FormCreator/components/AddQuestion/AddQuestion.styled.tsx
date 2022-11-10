import { Modal, Stack } from "libs/ui";
import styled from "styled-components";

export const StyledModal = styled(Modal)<{
  isAnswerAdderVisible: boolean;
  haveAnswers: boolean;
}>`
  display: flex;
  justify-content: center;
  max-height: ${(props) => (props.isAnswerAdderVisible ? "95%" : "65%")};

  @media ${(props) => props.theme.queries.tablet} {
    max-height: ${(props) =>
      props?.isAnswerAdderVisible
        ? props.haveAnswers
          ? "60%"
          : "58%"
        : "40%"};
  }
`;

export const Content = styled(Stack)`
  width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: scroll;
`;

export const ModalHeader = styled(Stack)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  svg {
    cursor: pointer;
    font-size: 30px;
  }
`;
