import { FC } from "react";
import { Stack } from "libs/ui";
import { AddIcon, AccountIcon } from "libs/ui/Icons";
import * as Styled from "./Dashboard.styled";

export const DashboardPage: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Tile width="100%" minHeight="300px" mt={4}>
        <p>Latest forms</p>
      </Styled.Tile>
      <Stack justifyContent="space-between" flexDirection="row" mt={4} gap={3}>
        <Styled.Tile width="50%" minHeight="250px">
          <p>Create form</p>
          <AddIcon />
        </Styled.Tile>
        <Styled.Tile width="50%" minHeight="250px">
          <p>Edit profile</p>
          <AccountIcon />
        </Styled.Tile>
      </Stack>
    </Styled.Wrapper>
  );
};
