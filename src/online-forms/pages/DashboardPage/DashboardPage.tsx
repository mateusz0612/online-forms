import { FC } from "react";
import { Stack } from "libs/ui";
import { AddIcon, AccountIcon } from "libs/ui/Icons";
import { Forms } from "online-forms/modules/Forms";
import * as Styled from "./Dashboard.styled";

const MAX_LATEST_FORMS_AMOUT = 3;

export const DashboardPage: FC = () => {
  return (
    <Styled.Wrapper pb={4}>
      <Styled.Tile width="100%" minHeight="300px" mt={4} pb={6}>
        <h2>Latest forms</h2>
        <Styled.SeeAll>See all</Styled.SeeAll>
        <Forms limit={MAX_LATEST_FORMS_AMOUT} />
      </Styled.Tile>
      <Stack justifyContent="space-between" flexDirection="row" mt={4} gap={3}>
        <Styled.Tile width="50%" minHeight="250px">
          <h3>Create form</h3>
          <Styled.IconWrapper>
            <AddIcon />
          </Styled.IconWrapper>
        </Styled.Tile>
        <Styled.Tile width="50%" minHeight="250px">
          <h3>Edit profile</h3>
          <Styled.IconWrapper>
            <AccountIcon />
          </Styled.IconWrapper>
        </Styled.Tile>
      </Stack>
    </Styled.Wrapper>
  );
};
