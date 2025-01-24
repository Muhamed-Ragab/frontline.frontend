import { useAuthStore } from "@/stores/auth_store";
import { cn } from "@nextui-org/theme";
import { LuUser } from "react-icons/lu";
import { RiHome6Line, RiRobot2Line, RiSettingsLine } from "react-icons/ri";
import { Link, useLocation } from "react-router";

const DrawerLinks = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { pathname } = useLocation();
  const { isFirstSale } = useAuthStore();
  const links = [
    {
      title: "Home Dashboard",
      path: "/dashboard",
      icon: <RiHome6Line />,
    },
    {
      title: "Main Profile",
      path: "/profile",
      icon: <LuUser />,
    },
    {
      title: "Frontline AI",
      path: isFirstSale ? "/frontline-intro" : "/create-chat",
      icon: <RiRobot2Line />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <RiSettingsLine />,
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          onClick={() => setIsDrawerOpen(false)}
          className={cn(
            "flex items-center gap-4 px-5 py-4 rounded-3xl w-full active:scale-95 hover:opacity-90 duration-300 cursor-pointer hover:bg-[#ededed]",
            pathname === link.path ? "bg-[#ededed]" : ""
          )}
        >
          <span className='text-3xl'>{link.icon}</span>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default DrawerLinks;
