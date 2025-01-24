import { useAuthStore } from "@/stores/auth_store";
import apiClient from "@/utils/api-client";
import Cookies from "@/utils/cookies";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router";

type LogoutError = {
  message: string;
  errorCode: string;
};

type LogoutResponse = {
  message: string;
};

export default function useLogout() {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();
  return useRequest(
    () => apiClient.get<LogoutError, LogoutResponse>("/auth/logout"),
    {
      manual: true,
      onFinally: () => {
        Cookies.clear();
        clearAuth();
        navigate("/");
      },
    }
  );
}
