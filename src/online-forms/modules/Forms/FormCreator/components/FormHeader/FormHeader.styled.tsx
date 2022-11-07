import styled from "styled-components";
import { Stack } from "libs/ui";

type Align = { align: "center" | "left" };

export const Wrapper = styled(Stack)`
  cursor: pointer;
  padding: 12px;

  @media ${(props) => props.theme.queries.tablet} {
    padding: 22px 36px;
  }

  @media ${(props) => props.theme.queries.desktop} {
    padding: 32;
  }
`;

export const Heading = styled.p<Align>`
  font-size: 26px;
  text-align: ${(props) => props.align};
  margin: 4px 0px;
  letter-spacing: 1px;
`;

export const Label = styled.p<Align>`
  text-align: ${(props) => props.align};
  font-size: 16px;
  margin: 4px 0;
  text-transform: capitalize;
  white-space: pre-wrap;
  font-weight: 700;
`;

export const HelperText = styled.p<Align>`
  font-size: 10px;
  margin: 0;
  margin-bottom: 6px;
  text-align: ${(props) => props.align};
`;
