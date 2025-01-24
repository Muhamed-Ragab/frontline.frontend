import NavLink from "@/components/shared/NavLink";
import { logo } from "@/constants/images";
import { checkAuthentication } from "@/utils/auth";

export default function LandingNavbar() {
  const isLoggedIn = checkAuthentication();

  return (
    <div className='bg-white relative z-50'>
      <nav className='h-28 container'>
        <section className='flex justify-center items-center h-full'>
          <div className='flex justify-between items-center w-full px-12'>
            <div className='flex justify-between items-center gap-3 max-w-[346px] w-full'>
              <NavLink to='/contact' className='w-[94px] '>
                Contact
              </NavLink>
              <NavLink to='/about-us' className='w-[103px]'>
                About Us
              </NavLink>
              <NavLink to='/enterprises' className='w-[125px]'>
                Enterprises
              </NavLink>
            </div>
            <img src={logo} alt='logo' width={150} />
            <div className='flex justify-between items-center gap-3 max-w-[346px] w-full'>
              <NavLink to='/pricing' className='w-[94px]'>
                Pricing
              </NavLink>
              {isLoggedIn ? (
                <NavLink
                  to='/dashboard'
                  className='flex-grow '
                  style={{ wordSpacing: "2px" }}
                  variant='primary'
                >
                  View Dashboard
                </NavLink>
              ) : (
                <>
                  <NavLink to='/auth/login' className='w-[103px]'>
                    Login
                  </NavLink>
                  <NavLink
                    to='/auth/register'
                    variant='primary'
                    className='w-[125px]'
                  >
                    Sign up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
//YTK : مشكلة حوار العرض  بتاع كل زرار مش شغالة بأي شكل
