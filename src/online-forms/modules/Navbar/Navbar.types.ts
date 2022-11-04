import { Paths } from "online-forms/routes";

export interface ILink {
  label: string;
  to: Paths;
}

export interface ISetting {
  label: string;
  onClick: () => void;
}
