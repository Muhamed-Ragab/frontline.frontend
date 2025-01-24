import apiClient from "@/utils/api-client";
import type {
  ForgotPasswordSchema,
  SendEmailCodeSchema,
} from "@/utils/validations/auth";
import { useRequest } from "ahooks";

type SendCodeError = {
  message: string;
  errorCode: string;
};

type SendCodeData = {
  verificationToken: string;
};

type ForgotPasswordData = {
  forgotToken: string;
};

type SendCodeResponse<T extends "email" | "password"> = {
  message: string;
  data: T extends "email" ? SendCodeData : ForgotPasswordData;
};

export function useSendCode<T extends "email" | "password">(type: T) {
  const url = type === "email" ? "/auth/email/send" : "/auth/password/forgot";

  return useRequest(
    (
      data: typeof type extends "email"
        ? SendEmailCodeSchema
        : ForgotPasswordSchema
    ) =>
      apiClient.post<SendCodeError, SendCodeResponse<typeof type>>(url, data),
    { manual: true }
  );
}
