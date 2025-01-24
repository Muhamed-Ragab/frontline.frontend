import Cookies from "./cookies";

export const checkAuthentication = () => {
  if (typeof document === "undefined") return false;
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  return !!accessToken && !!refreshToken;
};
