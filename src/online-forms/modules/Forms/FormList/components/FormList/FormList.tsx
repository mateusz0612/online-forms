import { FC } from "react";
import { Progress, Table } from "libs/ui";
import { ArrowRight } from "libs/ui/Icons";
import { IForm } from "online-forms/types";
import { State, Renderer } from "libs/development-kit/api";
import * as Styled from "./FormList.styled";

interface Props {
  forms: State<IForm[]>;
  limit?: number;
}

const Loader = () => (
  <Styled.LoadingWrapper justifyContent="center" alignItems="center">
    <Progress />
  </Styled.LoadingWrapper>
);

const Error = () => <p>Error occured</p>;

export const FormList: FC<Props> = ({ forms, limit = 999 }) => {
  return (
    <Renderer<IForm[]> state={forms} pending={Loader} fail={Error}>
      {(data) => (
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
              {data?.slice(0, limit)?.map((form) => (
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
      )}
    </Renderer>
  );
};
