import { State, Status } from "./useFetch";

export const combineFetchStates = <T, K>(
  firstFetchState: State<T>,
  secondFetchState: State<K>
): State<T & K> => {
  const getStatus = (
    firstFetchStatus: Status,
    secondFetchStatus: Status
  ): Status => {
    if (firstFetchStatus === "loading" || secondFetchStatus === "loading") {
      return "loading";
    }

    if (firstFetchStatus === "error" || secondFetchStatus === "error") {
      return "error";
    }

    if (firstFetchStatus === "success" || secondFetchStatus === "success") {
      return "success";
    }

    return "idle";
  };

  return {
    data: { ...firstFetchState?.data, ...secondFetchState?.data },
    status: getStatus(firstFetchState?.status, secondFetchState?.status),
    error: firstFetchState?.error || secondFetchState?.error,
  };
};
