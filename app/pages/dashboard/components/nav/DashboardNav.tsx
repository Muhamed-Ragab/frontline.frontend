import { Button } from "@nextui-org/button";
import { BiUser } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router";
import NavDrawer from "./NavDrawer";
import SalesSearch from "./SalesSearch";
import logo from "/images/frontline-logo.png";

const DashboardNav = () => {
  return (
    <header className='py-5 background-[#fafafa] relative z-20'>
      <div className='flex justify-between items-center container'>
        <Link to='/dashboard' className='flex items-center gap-5'>
          <img className='w-12' src={logo} alt='' />
          <div>
            <h2 className='text-2xl font-clash-display flex items-center gap-1 font-medium'>
              <span>Danny Hyson</span>
              <span className='text-[#49adf4]'>
                <VscVerifiedFilled />
              </span>
            </h2>
            <p className='text-sm text-foreground-secondary'>Sales Executive</p>
          </div>
        </Link>
        <div className='flex items-center gap-3'>
          <SalesSearch />
          <Button isIconOnly variant='bordered' radius='full' size='lg'>
            <BiUser className='text-2xl text-foreground' />
          </Button>
          <NavDrawer />
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
