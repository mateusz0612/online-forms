interface IDatasets {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

export interface GraphProps {
  data: { labels: string[]; datasets: IDatasets[] };
}
