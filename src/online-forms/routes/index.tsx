import { Route } from "react-router-dom";

import { LandingPage } from "online-forms/pages/LandingPage";

export enum Paths {
  LandingPage = "/",
  DefaultRoute = "/*",
}

export const AppRoutes = [
  <Route
    path={Paths.LandingPage}
    key={Paths.LandingPage}
    element={<LandingPage />}
  />,
];

export const AuthAppRoutes = [];
