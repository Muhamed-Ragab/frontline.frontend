import AsyncDataWrapper from "@/components/shared/AsyncDataWrapper";
import useChat from "@/hooks/chat/useChat";
import ChatInput from "./components/ChatInput";
import ConversationItem from "./components/ConversationItem";

export default function FrontlineAiPage() {
  const { chatData, loading, error } = useChat();

  return (
    <section className='flex-grow flex flex-col'>
      <AsyncDataWrapper
        isLoading={loading}
        isError={!!error}
        isSuccess={!!chatData}
      >
        <div className='px-8 max-w-[1000px] w-full mx-auto mt-10 h-full flex-grow relative flex flex-col justify-between'>
          <ConversationItem isCompleted={!!chatData?.isCompleted} />
          {!chatData?.isCompleted && <ChatInput />}
        </div>
      </AsyncDataWrapper>
    </section>
  );
}
