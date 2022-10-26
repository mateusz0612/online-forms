import { FC } from "react";
import { CircularProgress } from "@mui/material";

interface Props {
  fullPage?: boolean;
}

export const Progress: FC<Props> = ({ fullPage }) => {
  if (fullPage) {
    return (
      <div
        style={{
          minWidth: "99vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return <CircularProgress />;
};
