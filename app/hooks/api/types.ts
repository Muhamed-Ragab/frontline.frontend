import type { Options } from "ahooks/lib/useRequest/src/types";
import type { AxiosRequestConfig } from "axios";

export type UseGet<T> = {
  endpoint: string;
  cacheKey: string;
  requestOptions?: Options<T, any>;
  axiosOptions?: AxiosRequestConfig;
};

export type ErrorResponse = {
  message: string;
  errorCode?: string;
};

export type UseAction<T> = {
  method: "POST" | "PUT" | "DELETE" | "PATCH";
  endpoint: string;
  requestOptions?: Options<T, any>;
  axiosOptions?: AxiosRequestConfig;
};
