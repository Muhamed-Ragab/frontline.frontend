import { useAuthStore } from "@/stores/auth_store";
import { motion } from "framer-motion";
import { Link } from "react-router";
import TypeWriter from "./components/TypeWriter";

export default function FrontlineIntroPage() {
  const { user } = useAuthStore();

  return (
    <section className='flex-grow flex items-center justify-center container'>
      <div>
        <TypeWriter
          typingSpeed={75}
          text={`Hi there, ${user?.name} ! \n Ready to share your sales journey properly?`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 5.5 }}
          className='mt-7'
        >
          <Link
            to='/create-chat'
            className='bg-customPrimary rounded-full text-[13px] font-roobert-pro px-8 py-2.5 active:scale-95 hover:opacity-90 duration-300'
          >
            Let's go
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
