import { Modal, Stack } from "libs/ui";
import styled from "styled-components";

export const Content = styled(Stack)`
  min-width: 45%;
  min-height: 150px;
  padding: 20px;
  margin: auto 20px;
  background-color: ${(props) => props.theme.pallete.white};
  border-radius: 10px;
  text-align: center;
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  span {
    font-weight: 600;
  }
`;

export const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
`;
