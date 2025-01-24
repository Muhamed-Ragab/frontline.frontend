import { motion } from "framer-motion";
import logo from "public/images/frontline-logo.png";
import { CiBookmark } from "react-icons/ci";
import { IoCheckboxOutline } from "react-icons/io5";
import { RiLoader4Fill } from "react-icons/ri";

const ChatLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid grid-cols-[auto_1fr] gap-5 min-w-0'
    >
      <div className='w-11 h-11 min-w-0 flex items-center justify-center rounded-full bg-black'>
        <img src={logo} alt='logo' className='w-6 h-6 object-cover invert' />
      </div>
      <div className='bg-[#F4F4F4] w-full max-w-[350px] flex flex-col gap-2 p-5 px-8 rounded-[40px] border-1 border-[#E2E2E2]'>
        <div className='flex items-center gap-2'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <IoCheckboxOutline className='text-xl' />
          </motion.span>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            Checking possible enhancements
          </motion.p>
        </div>
        <div className='flex items-center gap-2'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <CiBookmark className='text-xl' />
          </motion.span>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            Saving your answer
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className='text-customPrimary animate-spin w-fit'
        >
          <RiLoader4Fill className='text-2xl' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatLoading;
