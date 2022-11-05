import { Navigate, Route } from "react-router-dom";

import { LandingPage } from "online-forms/pages/LandingPage";
import { DashboardPage } from "online-forms/pages/DashboardPage";

export enum Paths {
  Landing = "/",
  Dashboard = "/dashboard",
  DefaultRoute = "/*",
}

export const AppRoutes = [
  <Route path={Paths.Landing} key={Paths.Landing} element={<LandingPage />} />,
  <Route
    path={Paths.DefaultRoute}
    key={Paths.DefaultRoute}
    element={<Navigate to={Paths.Landing} />}
  />,
];

export const AuthAppRoutes = [
  <Route
    path={Paths.Dashboard}
    key={Paths.Dashboard}
    element={<DashboardPage />}
  />,
  <Route
    path={Paths.DefaultRoute}
    key={Paths.DefaultRoute}
    element={<Navigate to={Paths.Dashboard} />}
  />,
];
