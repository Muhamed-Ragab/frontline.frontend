import type { User } from "@/types/user";
import apiClient from "@/utils/api-client";
import type { RegisterData } from "@/utils/validations/auth";
import { useRequest } from "ahooks";

type RegisterError = {
  message: string;
  errorCode: string;
};

type RegisterResponse = {
  message: string;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
};

export default function useRegister() {
  return useRequest(
    (data: RegisterData) =>
      apiClient.post<RegisterError, RegisterResponse>("/auth/register", data),
    {
      manual: true,
      onError: error => {
        console.log(error);
      },
    }
  );
}
