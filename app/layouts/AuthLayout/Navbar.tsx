import NavLink from "@/components/shared/NavLink";
import { logo } from "@/constants/images";
import { useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === "/auth/login";

  return (
    <nav className='h-28 flex justify-between items-center container'>
      <img src={logo} alt='logo' width={150} />
      <NavLink
        to={isLogin ? "/auth/register" : "/auth/login"}
        variant='primary'
        className='px-8'
      >
        {isLogin ? "Sign up" : "Login"}
      </NavLink>
    </nav>
  );
};

export default Navbar;
