import useSendMessage from "@/hooks/chat/useSendMessage";
import { BsSend } from "react-icons/bs";
import { PiMagicWandLight } from "react-icons/pi";

const ChatInput = () => {
  const { loading, answer, setAnswer, handleSendMessage, isProcessing } =
    useSendMessage();

  return (
    <form
      onSubmit={e => handleSendMessage(e)}
      className='sticky bottom-10 max-w-[935px] w-full bg-[#f4f4f4] rounded-full border-1 border-[#E2E2E2] flex items-center gap-3 px-5 py-3'
    >
      <PiMagicWandLight className='text-2xl' />
      <input
        className='flex-grow bg-transparent focus:outline-none text-foreground font-roobert-pro h-full'
        placeholder='Reply to the AI or ask a question....'
        value={answer}
        disabled={loading || isProcessing}
        onChange={e => setAnswer(e.target.value)}
        type='text'
      />
      <p className='text-foreground-secondary text-sm font-roobert-pro'>
        {answer.length}/3000
      </p>
      <button
        disabled={loading || isProcessing}
        className='bg-customPrimary w-10 h-10 rounded-full flex items-center justify-center duration-300 hover:opacity-85 active:scale-95 disabled:opacity-50'
      >
        <BsSend className='text-lg -ml-0.5' />
      </button>
    </form>
  );
};

export default ChatInput;
