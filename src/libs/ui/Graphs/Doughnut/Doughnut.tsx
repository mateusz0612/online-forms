import { FC } from "react";
import { Doughnut as ChartDoughnut } from "react-chartjs-2";

interface IDatasets {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

interface DoughnutProps {
  data: { labels: string[]; datasets: IDatasets[] };
}

export const Doughnut: FC<DoughnutProps> = ({ data }) => {
  return <ChartDoughnut data={data} />;
};
