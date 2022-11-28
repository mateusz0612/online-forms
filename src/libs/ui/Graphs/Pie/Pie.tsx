import { FC } from "react";
import { Pie as PieChart } from "react-chartjs-2";
import { GraphProps } from "../Graphs.types";

export const Pie: FC<GraphProps> = ({ data }) => {
  return <PieChart data={data} />;
};
