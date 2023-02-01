import { FC } from "react";
import { FormHelperText } from "@mui/material";
import styled from "styled-components";

type Apperance = "error" | "default";

interface Props {
  text: string;
  apperance?: Apperance;
}

const FormHelperTextWrapper = styled(FormHelperText)<{ apperance: Apperance }>`
  color: ${(props) =>
    props.apperance === "error"
      ? props.theme.pallete.error
      : props.theme.pallete.black};
`;

export const HelperText: FC<Props> = ({ text, apperance = "default" }) => {
  return (
    <FormHelperTextWrapper apperance={apperance}>{text}</FormHelperTextWrapper>
  );
};
