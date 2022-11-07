import { FC } from "react";
import { Stack, StackProps } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledTile = styled(Stack)<{ hoverEnabled: boolean }>`
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid rgba(198, 198, 207, 0.5);
  box-shadow: 0px 0px 23px 6px rgba(198, 198, 207, 0.5);
  position: relative;
  overflow: hidden;

  h2,
  h3 {
    font-size: 30px;
    font-weight: 400;
    padding: 0 20px;
    letter-spacing: 2px;
  }

  ${(props) =>
    props?.hoverEnabled &&
    css`
      cursor: pointer;

      :hover {
        color: ${(props) => props.theme.pallete.primary};
      }
    `}
`;

export const Tile: FC<StackProps & { hoverEnabled?: boolean }> = ({
  children,
  hoverEnabled = false,
  ...props
}) => {
  return (
    <StyledTile hoverEnabled={hoverEnabled} {...props}>
      {children}
    </StyledTile>
  );
};
