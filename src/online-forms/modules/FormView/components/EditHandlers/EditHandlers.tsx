import { FC } from "react";
import { DeleteIcon, EditIcon } from "libs/ui";
import { IHandlers } from "../../FormView.types";
import * as Styled from "./EditHandlers.styled";

interface Props {
  id: string;
  handlers?: IHandlers;
}

export const EditHandlers: FC<Props> = ({ handlers, id }) => {
  return (
    <Styled.IconsWrapper flexDirection="row" gap={1}>
      <Styled.IconWrapper
        onClick={handlers ? () => handlers?.onDeleteClick(id) : undefined}
      >
        <DeleteIcon />
      </Styled.IconWrapper>
      <Styled.IconWrapper
        onClick={handlers ? () => handlers?.onEditClick(id) : undefined}
      >
        <EditIcon />
      </Styled.IconWrapper>
    </Styled.IconsWrapper>
  );
};
