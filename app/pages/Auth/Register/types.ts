import type { JSX } from "react";

export type ComponentScreen =
  | "email"
  | "verifyEmail"
  | "password"
  | "name"
  | "companyName"
  | "companyWebsite"
  | "jobDetails"
  | "allDone";

export type Components = Record<ComponentScreen, JSX.Element>;
