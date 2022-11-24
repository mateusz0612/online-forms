import { FC } from "react";
import { FormHelperText } from "@mui/material";
import styled from "styled-components";

interface Props {
  text: string;
}

const FormHelperTextWrapper = styled(FormHelperText)`
  color: ${(props) => props.theme.pallete.error};
`;

export const HelperText: FC<Props> = ({ text }) => {
  return <FormHelperTextWrapper>{text}</FormHelperTextWrapper>;
};
