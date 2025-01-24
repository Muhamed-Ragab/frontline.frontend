import { Outlet, redirect } from "react-router";

import DashboardNav from "@/pages/dashboard/components/nav/DashboardNav";

import useUser from "@/hooks/user/useUser";
import { checkAuthentication } from "@/utils/auth.server";
import type { Route } from "./+types";

export function loader({ request }: Route.LoaderArgs) {
  const isAuthenticated = checkAuthentication(request);

  if (!isAuthenticated) return redirect("/auth/login");
}

export default function PagesLayout() {
  useUser();

  return (
    <main className='font-clash-display bg-[#FAFAFA] min-h-screen relative flex flex-col'>
      <DashboardNav />
      <Outlet />
    </main>
  );
}
