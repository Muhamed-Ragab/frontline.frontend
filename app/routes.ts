import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout/index.tsx", [
    // Public Pages
    index("pages/Landing/index.tsx"),
    // Auth Layout & Auth Pages
    layout("./layouts/AuthLayout/index.tsx", [
      ...prefix("/auth", [
        route("/login", "pages/Auth/Login/index.tsx"),
        route("/register", "pages/Auth/Register/index.tsx"),
        route("/forget-password", "pages/Auth/ForgetPassword/index.tsx"),
        route("/new-password", "pages/Auth/NewPassword/index.tsx"),
      ]),
    ]),
    // Protected Pages Layout & Pages
    layout("./layouts/PagesLayout/index.tsx", [
      ...prefix("/", [
        route("/dashboard", "pages/dashboard/index.tsx"),
        route("/frontline-intro", "pages/frontline-intro/index.tsx"),
        route("/create-chat", "pages/create-chat/index.tsx"),
        route("/frontline-ai/:id", "pages/frontline-ai/index.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
