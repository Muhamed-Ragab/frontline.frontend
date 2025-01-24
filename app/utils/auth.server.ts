import type { LoaderFunctionArgs } from "react-router";
import { getCookie } from "./cookies.server";

export const checkAuthentication = (request: LoaderFunctionArgs["request"]) => {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return false;

  const accessToken = getCookie(cookie, "accessToken");
  const refreshToken = getCookie(cookie, "refreshToken");
  return !!accessToken && !!refreshToken;
};
