import { Navigate, Route } from "react-router-dom";

import { Landing } from "online-forms/modules/Landing";
import { Dashboard } from "online-forms/modules/Dashboard";
import { FormAnalyze } from "online-forms/modules/FormAnalyze";
import { FormAnswer } from "online-forms/modules/FormAnswer";
import { FormCreator } from "online-forms/modules/FormCreator";

export enum Paths {
  Landing = "/",
  Dashboard = "/dashboard",
  CreateForm = "/form-creator",
  AnswerForm = "/form-answer/:formId",
  AnalyzeForm = "/form-analyze/:formId",
  DefaultRoute = "/*",
}

export const AppRoutes = [
  <Route path={Paths.Landing} key={Paths.Landing} element={<Landing />} />,
  <Route
    path={Paths.AnswerForm}
    key={Paths.AnswerForm}
    element={<FormAnswer />}
  />,
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
    element={<Dashboard />}
  />,
  <Route
    path={Paths.CreateForm}
    key={Paths.CreateForm}
    element={<FormCreator />}
  />,
  <Route
    path={Paths.AnswerForm}
    key={Paths.AnswerForm}
    element={<FormAnswer />}
  />,
  <Route
    path={Paths.AnalyzeForm}
    key={Paths.AnalyzeForm}
    element={<FormAnalyze />}
  />,
  <Route
    path={Paths.DefaultRoute}
    key={Paths.DefaultRoute}
    element={<Navigate to={Paths.Dashboard} />}
  />,
];
