import { FC } from "react";
import { IForm } from "online-forms/types";
import {
  Progress,
  Table,
  AnalyticsIcon,
  CopyIcon,
  DeleteIcon,
  OpenIcon,
} from "libs/ui";
import { State, Renderer } from "libs/development-kit/api";
import { formatDate } from "libs/development-kit/helpers/formatDate";
import * as Styled from "./FormList.styled";

interface Props {
  forms: State<IForm[]>;
  isFormDeletePending: boolean;
  limit?: number;
  onAnalyzeFormClick: (id: string) => void;
  onCopyFormLinkClick: (link: string, formName: string) => void;
  onDeleteFormCLick: (id: string) => void;
  onShowFormClick: (id: string) => void;
}

const Pending: FC = () => (
  <Styled.LoadingWrapper justifyContent="center" alignItems="center">
    <Progress />
  </Styled.LoadingWrapper>
);

export const FormList: FC<Props> = ({
  forms,
  isFormDeletePending,
  limit = 999,
  onAnalyzeFormClick,
  onCopyFormLinkClick,
  onDeleteFormCLick,
  onShowFormClick,
}) => {
  return (
    <Renderer
      state={forms}
      pending={() => <Pending />}
      fail={() => <p>Error occured</p>}
    >
      {(forms) => {
        if (forms?.length === 0) {
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
                <TableCell align="center">Show</TableCell>
                <TableCell align="center">Analyze</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">Delete</TableCell>
              </>
            )}
            renderRows={(TableCell, TableRow) => (
              <>
                {forms?.slice(0, limit)?.map((form) => (
                  <TableRow key={form?.id}>
                    <TableCell>{form?.name}</TableCell>
                    <TableCell>{form?.description}</TableCell>
                    <TableCell align="center">
                      {formatDate(form?.createdAt, "dd/MM/yyyy")}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onShowFormClick(form?.id)}
                    >
                      <Styled.IconWrapper>
                        <OpenIcon />
                      </Styled.IconWrapper>
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onAnalyzeFormClick(form?.id)}
                    >
                      <Styled.IconWrapper>
                        <AnalyticsIcon />
                      </Styled.IconWrapper>
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onCopyFormLinkClick(form?.id, form?.name)}
                    >
                      <Styled.IconWrapper>
                        <CopyIcon />
                      </Styled.IconWrapper>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        pointerEvents: isFormDeletePending ? "none" : "auto",
                      }}
                      onClick={() => onDeleteFormCLick(form?.id)}
                    >
                      <Styled.IconWrapper>
                        <DeleteIcon />
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
