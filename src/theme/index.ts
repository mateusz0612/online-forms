import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.pallete.backgroundPrimary};
      padding: 0;
      margin: 0;
    }
`;

export const theme: DefaultTheme = {
  pallete: {
    backgroundPrimary: "#fff",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  queries: {
    mobile: "(max-width: 480px)",
    tablet: "(max-width: 768px)",
  },
};
