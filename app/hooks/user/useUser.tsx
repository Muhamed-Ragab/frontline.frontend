import { useAuthStore } from "@/stores/auth_store";
import type { User } from "@/types/user";
import apiClient from "@/utils/api-client";
import { useRequest } from "ahooks";
import { useEffect } from "react";

const useUser = () => {
  const { setAuth } = useAuthStore();
  const { data } = useRequest(() => apiClient.get<User>(`/users/me`), {
    onError: error => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (data?.data) {
      setAuth({ user: data?.data });
    }
  }, [data]);
};

export default useUser;
