import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "online-forms/theme";
import { AuthModule } from "online-forms/modules/Auth";
import { ToastContainer } from "react-toastify";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <AuthModule>
          <App />
        </AuthModule>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
