import useLogout from "@/hooks/auth/use-logout";
import { useAuthStore } from "@/stores/auth_store";
import { Button } from "@nextui-org/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import DrawerLinks from "./DrawerLinks";

const NavDrawer = () => {
  const { user } = useAuthStore();
  const { runAsync: logout, loading } = useLogout();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button
        isIconOnly
        variant='bordered'
        radius='full'
        size='lg'
        onPress={() => setIsDrawerOpen(prev => !prev)}
      >
        {isDrawerOpen ? (
          <IoMdClose className='text-2xl text-foreground' />
        ) : (
          <HiOutlineMenuAlt3
            style={{ transform: "rotateX(180deg)" }}
            className='text-2xl text-foreground'
          />
        )}
      </Button>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2}}
            onClick={() => setIsDrawerOpen(false)}
            className='fixed fade-in-20 animate-in top-[97px] left-0 w-screen h-[calc(100vh-97px)] bg-[#262626]/60 z-10'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed fade-in-20 animate-in flex flex-col justify-between top-[117px] right-5 w-[340px] h-[calc(100vh-137px)] bg-[#f8f8f8] z-20 px-5 py-8 pt-10 gap-5 duration-300 ease-in-out rounded-2xl'
          >
            <div>
              <h2 className='text-xl px-5 mb-8'>Menu</h2>
              <DrawerLinks setIsDrawerOpen={setIsDrawerOpen} />
            </div>
            <div className='border-t-1.5 border-[#DBDBDB] pt-7 mx-4 flex items-center justify-between gap-1'>
              <div className='flex items-center gap-2'>
                <img
                  className='w-12 h-12 rounded-full object-cover'
                  src={user?.image || ""}
                  alt=''
                />
                <div>
                  <h2 className='text-sm font-medium font-clash-display'>
                    {user?.name}
                  </h2>
                  <p className='text-xs text-foreground-secondary'>
                    {user?.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => logout()}
                disabled={loading}
                style={{ opacity: loading ? 0.2 : 1 }}
                className='px-1.5 py-2 rounded-lg text-foreground text-2xl hover:bg-[#ff4e4e] duration-300 hover:text-white active:scale-90 '
              >
                <IoLogOutOutline />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavDrawer;
