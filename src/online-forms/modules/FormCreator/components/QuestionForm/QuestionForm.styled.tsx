import styled from "styled-components";
import { PrimaryButton, DefaultButton } from "libs/ui";

export const HelperText = styled.p`
  font-size: 10px;
  padding-left: 2px;
`;

export const Submit = styled(PrimaryButton)`
  width: 25%;
  align-self: end;
  margin-top: 15px;
`;

export const SelectStyles = {
  width: "150%",
};

export const Answer = styled(DefaultButton)`
  text-transform: capitalize;
`;
