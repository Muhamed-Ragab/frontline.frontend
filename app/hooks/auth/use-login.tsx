import { useAuthStore } from "@/stores/auth_store";
import type { User } from "@/types/user";
import apiClient from "@/utils/api-client";
import Cookies from "@/utils/cookies";
import type { LoginData } from "@/utils/validations/auth";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

type LoginError = {
  message: string;
  errorCode: string;
};

type LoginResponse = {
  message: string;
  data: {
    user: User | null;
    accessToken: string;
    refreshToken: string;
  };
};

export default function useLogin() {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const accessToken = useSearchParams()[0].get("accessToken");
  const refreshToken = useSearchParams()[0].get("refreshToken");
  const handleSuccess = (data: LoginResponse) => {
    Cookies.set({
      name: "accessToken",
      value: data.data.accessToken,
      httpOnly: import.meta.env.DEV ? false : true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
      sameSite: "strict",
    });
    Cookies.set({
      name: "refreshToken",
      value: data.data.refreshToken,
      httpOnly: import.meta.env.DEV ? false : true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      sameSite: "strict",
    });

    if (data.data.user) {
      setAuth({ user: data.data.user });
    }

    navigate("/dashboard", {
      replace: true,
    });
  };

  useEffect(() => {
    if (accessToken && refreshToken) {
      handleSuccess({
        message: "Success",
        data: {
          user: null,
          accessToken,
          refreshToken,
        },
      });
    }
  }, [accessToken, refreshToken]);

  const { runAsync: login, loading } = useRequest(
    (data: LoginData) =>
      apiClient.post<LoginError, LoginResponse>("/auth/login", data),
    {
      manual: true,
      onSuccess: (data: LoginResponse) => handleSuccess(data),
    }
  );

  return { login, loading };
}
