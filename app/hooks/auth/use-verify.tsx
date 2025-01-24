import apiClient from "@/utils/api-client";
import type {
  VerifyEmailCodeSchema,
  VerifyForgotTokenSchema,
} from "@/utils/validations/auth";
import { useRequest } from "ahooks";

type VerifyCodeError = {
  message: string;
  errorCode: string;
};

type SendCodeData = {
  verifiedToken: string;
};

type ForgotPasswordData = {
  resetToken: string;
};

type SendCodeResponse<T extends "email" | "password"> = {
  message: string;
  data: T extends "email" ? SendCodeData : ForgotPasswordData;
};

export function useVerify<T extends "email" | "password">(type: T) {
  return useRequest(
    (
      data: typeof type extends "email"
        ? VerifyEmailCodeSchema
        : VerifyForgotTokenSchema
    ) =>
      apiClient.post<VerifyCodeError, SendCodeResponse<typeof type>>(
        `/auth/${type}/verify`,
        data
      ),
    {
      manual: true,
      onError: error => {
        console.log(error);
      },
    }
  );
}
