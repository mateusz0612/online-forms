import { FC } from "react";
import { IForm } from "online-forms/types";
import { Progress, Table, ArrowRight, CopyIcon } from "libs/ui";
import { State, Renderer } from "libs/development-kit/api";
import { formatDate } from "libs/development-kit/helpers/formatDate";
import * as Styled from "./FormList.styled";

interface Props {
  forms: State<IForm[]>;
  onCopyFormLinkClick: (link: string, formName: string) => void;
  limit?: number;
}

const Loader = () => (
  <Styled.LoadingWrapper justifyContent="center" alignItems="center">
    <Progress />
  </Styled.LoadingWrapper>
);

const Error = () => <p>Error occured</p>;

export const FormList: FC<Props> = ({
  forms,
  limit = 999,
  onCopyFormLinkClick,
}) => {
  return (
    <Renderer<IForm[]> state={forms} pending={Loader} fail={Error}>
      {(data) => {
        if (data?.length === 0) {
          return (
            <Styled.NoFormsLabel>No forms created yet.</Styled.NoFormsLabel>
          );
        }

        return (
          <Table
            renderHead={(TableCell) => (
              <>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Created at</TableCell>
                <TableCell align="center">See details</TableCell>
                <TableCell align="center">Copy link</TableCell>
              </>
            )}
            renderRows={(TableCell, TableRow) => (
              <>
                {data?.slice(0, limit)?.map((form) => (
                  <TableRow key={form?.id}>
                    <TableCell>{form?.name}</TableCell>
                    <TableCell>{form?.description}</TableCell>
                    <TableCell align="center">
                      {formatDate(form?.createdAt, "MM/dd/yyyy")}
                    </TableCell>
                    <TableCell align="center">
                      <Styled.IconWrapper variant="medium">
                        <ArrowRight />
                      </Styled.IconWrapper>
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onCopyFormLinkClick(form?.id, form?.name)}
                    >
                      <Styled.IconWrapper variant="small">
                        <CopyIcon />
                      </Styled.IconWrapper>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          />
        );
      }}
    </Renderer>
  );
};
