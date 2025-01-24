import apiClient from "@/utils/api-client";
import { useRequest } from "ahooks";

import type { AxiosError } from "axios";
import type { ErrorResponse, UseGet } from "./types";
import useError from "./useError";

const useGet = <T,>({
  endpoint,
  cacheKey,
  requestOptions,
  axiosOptions,
}: UseGet<T>) => {
  const { errorHandler } = useError();

  return useRequest(
    () =>
      apiClient
        .request<T>({
          method: "get",
          url: endpoint,
          ...axiosOptions,
        })
        .then(res => res.data),
    {
      cacheKey: cacheKey,
      onError: error => {
        errorHandler(error as AxiosError<ErrorResponse>);
      },
      ...requestOptions,
    }
  );
};

export default useGet;
