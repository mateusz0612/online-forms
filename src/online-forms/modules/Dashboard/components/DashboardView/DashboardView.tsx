import { FC } from "react";
import { Tile, Stack, AddIcon, AccountIcon } from "libs/ui";
import { Forms } from "online-forms/modules/Forms";
import * as Styled from "./DashboardView.styled";

interface Props {
  allFormsVisible: boolean;
  visibleFormsLimit: number;
  onSeeLessClick: () => void;
  onSeeAllClick: () => void;
  onCreateFormClick: () => void;
  onEditProfileClick: () => void;
}

export const DashboardView: FC<Props> = ({
  allFormsVisible,
  visibleFormsLimit,
  onSeeAllClick,
  onSeeLessClick,
  onCreateFormClick,
  onEditProfileClick,
}) => {
  return (
    <Styled.Wrapper pb={4}>
      <Tile width="100%" minHeight="300px" mt={4} pb={6} hoverEnabled>
        <h2>Latest forms</h2>
        {allFormsVisible ? (
          <Styled.SeeButton onClick={onSeeLessClick}>See less</Styled.SeeButton>
        ) : (
          <Styled.SeeButton onClick={onSeeAllClick}>See all</Styled.SeeButton>
        )}
        <Forms limit={visibleFormsLimit} />
      </Tile>
      <Stack justifyContent="space-between" flexDirection="row" mt={4} gap={3}>
        <Tile
          width="50%"
          minHeight="250px"
          hoverEnabled
          onClick={onCreateFormClick}
        >
          <h3>Create form</h3>
          <Styled.IconWrapper>
            <AddIcon />
          </Styled.IconWrapper>
        </Tile>
        <Tile
          width="50%"
          minHeight="250px"
          hoverEnabled
          onClick={onEditProfileClick}
        >
          <h3>Edit profile</h3>
          <Styled.IconWrapper>
            <AccountIcon />
          </Styled.IconWrapper>
        </Tile>
      </Stack>
    </Styled.Wrapper>
  );
};
