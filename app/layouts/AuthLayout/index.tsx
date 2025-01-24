import { Outlet, redirect } from "react-router";
// import type { Route } from '../../+types/root';
import { checkAuthentication } from "@/utils/auth.server";
import type { Route } from "./+types";
import Footer from "./Footer";
import Navbar from "./Navbar";

export function loader({ request }: Route.LoaderArgs) {
  const isAuthenticated = checkAuthentication(request);

  if (isAuthenticated) return redirect("/");
}

export default function AuthLayout() {
  return (
    <main className='h-screen container flex flex-col justify-between'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
