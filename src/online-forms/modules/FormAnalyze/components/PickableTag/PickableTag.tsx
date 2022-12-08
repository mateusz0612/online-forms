import { FC } from "react";
import * as Styled from "./PickableTag.styled";

interface Props {
  label: string;
  isPicked: boolean;
  onClick?: () => void;
}

export const PickableTag: FC<Props> = ({ label, isPicked, onClick }) => {
  return (
    <Styled.Tag isPicked={isPicked} onClick={onClick ? onClick : undefined}>
      {label}
    </Styled.Tag>
  );
};
