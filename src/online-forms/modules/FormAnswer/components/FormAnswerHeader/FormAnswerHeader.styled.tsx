import styled from "styled-components";
import { Tile, Stack } from "libs/ui";

export const Wrapper = styled(Tile)`
  h1,
  h2 {
    font-size: 30px;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 0px;
    margin: 7px 7px 7px 0px;
  }

  p {
    span {
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }
  }
`;

export const Description = styled.p`
  white-space: pre-wrap;
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`;

export const WelcomeSectionWrapper = styled(Stack)`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${(props) => props.theme.queries.tablet} {
    flex-direction: row;
  }
`;
