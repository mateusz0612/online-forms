import { FC } from "react";
import { useNavigate } from "libs/development-kit/routing";
import { Stack, Tile } from "libs/ui";
import { AddIcon, AccountIcon } from "libs/ui/Icons";
import { FormList } from "online-forms/modules/Forms/FormList";
import { Paths } from "online-forms/routes";
import * as Styled from "./Dashboard.styled";

const MAX_LATEST_FORMS_AMOUT = 3;

const useDashboardPage = () => {
  const navigate = useNavigate();

  const route = (path: Paths) => navigate(path);

  return {
    route,
  } as const;
};

export const DashboardPage: FC = () => {
  const { route } = useDashboardPage();

  return (
    <Styled.Wrapper pb={4}>
      <Tile width="100%" minHeight="300px" mt={4} pb={6} hoverEnabled>
        <h2>Latest forms</h2>
        <Styled.SeeAll>See all</Styled.SeeAll>
        <FormList limit={MAX_LATEST_FORMS_AMOUT} />
      </Tile>
      <Stack justifyContent="space-between" flexDirection="row" mt={4} gap={3}>
        <Tile
          width="50%"
          minHeight="250px"
          hoverEnabled
          onClick={() => route(Paths.CreateForm)}
        >
          <h3>Create form</h3>
          <Styled.IconWrapper>
            <AddIcon />
          </Styled.IconWrapper>
        </Tile>
        <Tile width="50%" minHeight="250px" hoverEnabled>
          <h3>Edit profile</h3>
          <Styled.IconWrapper>
            <AccountIcon />
          </Styled.IconWrapper>
        </Tile>
      </Stack>
    </Styled.Wrapper>
  );
};
