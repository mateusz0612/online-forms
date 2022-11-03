import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      background-image: ${(props) => props.theme.pallete.backgroundPrimary};
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: rgba(0, 0, 0, 0.6);
    }

    * {
      box-sizing: border-box;
    }
`;

export const theme: DefaultTheme = {
  pallete: {
    backgroundPrimary:
      "linear-gradient(0deg, rgba(40, 103, 178, 0.29), rgb(255, 255, 255) 71%);",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  queries: {
    mobile: "(max-width 480px)",
    tablet: "(min-width: 688px)",
    desktop: "(min-width: 1312px)",
  },
};
