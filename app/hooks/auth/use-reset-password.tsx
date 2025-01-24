import apiClient from "@/utils/api-client";
import type { ResetPasswordSchema } from "@/utils/validations/auth";
import { useRequest } from "ahooks";

type ResetPasswordError = {
  message: string;
  errorCode: string;
};

type ResetPasswordResponse = {
  message: string;
};

export default function useResetPassword() {
  return useRequest(
    (data: ResetPasswordSchema) =>
      apiClient.post<ResetPasswordError, ResetPasswordResponse>(
        "/auth/password/reset",
        data
      ),
    { manual: true }
  );
}
