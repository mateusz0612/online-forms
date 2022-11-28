import { FC } from "react";
import { Doughnut as ChartDoughnut } from "react-chartjs-2";
import { GraphProps } from "../Graphs.types";

export const Doughnut: FC<GraphProps> = ({ data }) => {
  return <ChartDoughnut data={data} />;
};
