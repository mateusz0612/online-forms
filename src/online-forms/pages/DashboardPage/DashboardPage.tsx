import { FC, useState } from "react";
import { useNavigate } from "libs/development-kit/routing";
import { Stack, Tile } from "libs/ui";
import { AddIcon, AccountIcon } from "libs/ui/Icons";
import { FormList } from "online-forms/modules/Forms/FormList";
import { Paths } from "online-forms/routes";
import * as Styled from "./Dashboard.styled";

const DEFAULT_VISIBLE_FORM_LIMIT = 3;
const MAX_VISIBLE_FORMS_LIMIT = 99999;

const useDashboardPage = () => {
  const [visibleFormsLimit, setVisibleFormsLimit] = useState(
    DEFAULT_VISIBLE_FORM_LIMIT
  );
  const navigate = useNavigate();

  const route = (path: Paths) => navigate(path);

  const onSeeAllClick = () => setVisibleFormsLimit(MAX_VISIBLE_FORMS_LIMIT);

  const onSeeLessClick = () => setVisibleFormsLimit(DEFAULT_VISIBLE_FORM_LIMIT);

  const allFormsVisible = visibleFormsLimit === MAX_VISIBLE_FORMS_LIMIT;

  return {
    visibleFormsLimit,
    allFormsVisible,
    route,
    onSeeAllClick,
    onSeeLessClick,
  } as const;
};

export const DashboardPage: FC = () => {
  const {
    visibleFormsLimit,
    allFormsVisible,
    route,
    onSeeAllClick,
    onSeeLessClick,
  } = useDashboardPage();

  return (
    <Styled.Wrapper pb={4}>
      <Tile width="100%" minHeight="300px" mt={4} pb={6} hoverEnabled>
        <h2>Latest forms</h2>
        {allFormsVisible ? (
          <Styled.SeeButton onClick={onSeeLessClick}>See less</Styled.SeeButton>
        ) : (
          <Styled.SeeButton onClick={onSeeAllClick}>See all</Styled.SeeButton>
        )}
        <FormList limit={visibleFormsLimit} />
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
