import { format as fnsFormat } from "date-fns";

export const formatDate = (timestamp: number, format: string) =>
  fnsFormat(new Date(timestamp), format);
