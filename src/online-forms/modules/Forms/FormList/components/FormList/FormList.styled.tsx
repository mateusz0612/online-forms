import styled from "styled-components";
import { Stack } from "libs/ui";

export const IconWrapper = styled.div<{ variant: "small" | "medium" }>`
  svg {
    font-size: ${(props) => (props?.variant === "small" ? "24px" : "36px")};

    :hover {
      color: ${(props) => props.theme.pallete.primary};
    }
  }
`;

export const LoadingWrapper = styled(Stack)`
  width: 100%;
  min-height: 200px;
`;

export const NoFormsLabel = styled.p`
  width: 100%;
  text-align: center;
`;
