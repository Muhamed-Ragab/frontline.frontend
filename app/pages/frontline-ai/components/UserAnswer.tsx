import { useAuthStore } from "@/stores/auth_store";
import type { Message } from "@/types/chat";
import { motion } from "framer-motion";

const UserAnswer = ({ message }: { message: Message }) => {
  const { user } = useAuthStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='grid grid-cols-[auto_1fr] gap-5 min-w-0'
    >
      <div className='w-11 h-11 min-w-0 rounded-full bg-black overflow-hidden'>
        <img
          src={user?.image}
          alt='logo'
          className='w-full h-full object-cover'
        />
      </div>
      <p className='mt-2 font-medium text-lg font-roobert-pro bg-[#f4f4f4] rounded-full px-5 py-3 border-1 border-[#E2E2E2]'>
        {message?.text}
      </p>
    </motion.div>
  );
};

export default UserAnswer;
