import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import useRefreshToken from "../auth/use-refresh-token";
import type { ErrorResponse } from "./types";

const useError = () => {
  const { refreshTokenMutate } = useRefreshToken();

  const errorHandler = (error: AxiosError<ErrorResponse>) => {
    if (error?.response?.status === 401) {
      refreshTokenMutate();
    } else {
      toast.error(error?.response?.data?.message || "An error occurred");
    }
  };

  return { errorHandler };
};

export default useError;
