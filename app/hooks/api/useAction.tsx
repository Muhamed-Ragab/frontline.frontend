import apiClient from "@/utils/api-client";
import { useRequest } from "ahooks";
import type { AxiosError } from "axios";
import type { ErrorResponse, UseAction } from "./types";
import useError from "./useError";

const useAction = <T, K>({
  method,
  endpoint,
  requestOptions,
  axiosOptions,
}: UseAction<T>) => {
  const { errorHandler } = useError();

  return useRequest(
    (data: K) =>
      apiClient
        .request<T>({
          method: method,
          url: endpoint,
          data: data,
          ...axiosOptions,
        })
        .then(res => res.data),
    {
      manual: true,
      onError: error => {
        errorHandler(error as AxiosError<ErrorResponse>);
      },
      ...requestOptions,
    }
  );
};

export default useAction;
