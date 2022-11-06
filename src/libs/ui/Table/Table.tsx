import { FC } from "react";
import {
  Table as MaterialTable,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableCellProps,
  TableRowProps,
} from "@mui/material";

type RenderContent = (
  TableCell: FC<TableCellProps>,
  TableRow: FC<TableRowProps>
) => React.ReactElement | React.ReactElement[];

interface Props {
  renderHead: RenderContent;
  renderRows: RenderContent;
}

export const Table: FC<Props> = ({ renderHead, renderRows }) => {
  return (
    <TableContainer component={Paper} style={{ boxShadow: "none" }}>
      <MaterialTable sx={{ minWidth: 650 }} aria-label="Table">
        <TableHead>
          <TableRow>{renderHead(TableCell, TableRow)}</TableRow>
        </TableHead>
        <TableBody>{renderRows(TableCell, TableRow)}</TableBody>
      </MaterialTable>
    </TableContainer>
  );
};
