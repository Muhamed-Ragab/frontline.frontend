import type { Message } from "@/types/chat";
import { motion } from "framer-motion";
import logo from "public/images/frontline-logo.png";

const BotQuestion = ({
  message,
  isFirstMessage,
}: {
  message: Message;
  isFirstMessage?: boolean;
}) => {
  return (
    <div
      className='grid grid-cols-[auto_1fr] gap-5 min-w-0'
    >
      <div className='w-11 h-11 min-w-0 flex items-center justify-center rounded-full bg-black'>
        <img src={logo} alt='logo' className='w-6 h-6 object-cover invert' />
      </div>
      <div className='mt-2 font-normal text-lg font-roobert-pro'>
        {isFirstMessage && (
          <p className='text-xl font-medium font-clash-display mb-3'>
            Welcome there !
          </p>
        )}
        <p>
          {message?.fixed} <span className='font-bold'>{message?.text}</span>
        </p>
      </div>
    </div>
  );
};

export default BotQuestion;
