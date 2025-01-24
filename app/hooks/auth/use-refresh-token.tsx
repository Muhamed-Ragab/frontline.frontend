import apiClient from "@/utils/api-client";
import Cookies from "@/utils/cookies";
import { useRequest } from "ahooks";
import useLogout from "./use-logout";

type RefreshTokenError = {
  message: string;
  errorCode: string;
};

type RefreshTokenResponse = {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export default function useRefreshToken() {
  const refreshToken =
    typeof document !== "undefined" ? Cookies.get("refreshToken") : "";
  const { runAsync: logout } = useLogout();

  const { runAsync } = useRequest(
    () =>
      apiClient.get<RefreshTokenError, RefreshTokenResponse>("/auth/refresh", {
        withCredentials: true,
        headers: {
          "refresh-token": refreshToken,
        },
      }),
    {
      manual: true,
      onSuccess: response => {
        Cookies.set({
          name: "accessToken",
          value: response.data.accessToken,
          httpOnly: import.meta.env.DEV ? false : true,
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: "/",
          sameSite: "strict",
        });
        Cookies.set({
          name: "refreshToken",
          value: response.data.refreshToken,
          httpOnly: import.meta.env.DEV ? false : true,
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
          sameSite: "strict",
        });
      },
      onError: () => {
        logout();
      },
    }
  );

  const refreshTokenMutate = () => {
    if (refreshToken) {
      runAsync();
    } else {
      logout();
    }
  };

  return { refreshTokenMutate };
}
