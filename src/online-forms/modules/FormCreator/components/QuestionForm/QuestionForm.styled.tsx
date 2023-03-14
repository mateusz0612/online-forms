import styled from "styled-components";
import { PrimaryButton, DefaultButton, Stack } from "libs/ui";

export const HelperText = styled.p`
  font-size: 10px;
  padding-left: 2px;
`;

export const Submit = styled(PrimaryButton)`
  width: 25%;
  align-self: end;
  margin-top: 15px;
`;

export const Answer = styled(DefaultButton)`
  text-transform: capitalize;
`;

export const SwitchWrapper = styled(Stack)`
  width: 90px;
  text-align: center;

  @media ${(props) => props.theme.queries.desktop} {
    width: 130px;
  }
`;

export const SelectStyles = {
  width: "150%",
};
