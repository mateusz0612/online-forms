import { FC } from "react";
import { Progress, Table } from "libs/ui";
import { ArrowRight } from "libs/ui/Icons";
import { IForm } from "online-forms/shared/types";
import * as Styled from "./FormList.styled";

interface Props {
  forms: IForm[];
  isLoading: boolean;
}

export const FormList: FC<Props> = ({ forms, isLoading }) => {
  if (isLoading) {
    return (
      <Styled.LoadingWrapper justifyContent="center" alignItems="center">
        <Progress />
      </Styled.LoadingWrapper>
    );
  }

  return (
    <Table
      renderHead={(TableCell) => (
        <>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Created at</TableCell>
          <TableCell align="center">See details</TableCell>
        </>
      )}
      renderRows={(TableCell, TableRow) => (
        <>
          {forms?.map((form) => (
            <TableRow key={form?.id}>
              <TableCell>{form?.name}</TableCell>
              <TableCell>{form?.description}</TableCell>
              <TableCell>{form?.createdAt}</TableCell>
              <TableCell align="center">
                <Styled.IconWrapper>
                  <ArrowRight />
                </Styled.IconWrapper>
              </TableCell>
            </TableRow>
          ))}
        </>
      )}
    />
  );
};
