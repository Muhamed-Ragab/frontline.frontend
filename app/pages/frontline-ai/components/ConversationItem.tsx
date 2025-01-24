import { useChatStore } from "@/stores/chat_store";
import { MessageType } from "@/types/chat";
import BotQuestion from "./BotQuestion";
import ChatLoading from "./ChatLoading";
import UserAnswer from "./UserAnswer";

const ConversationItem = ({ isCompleted }: { isCompleted: boolean }) => {
  const { isLoading, isProcessing, messages } = useChatStore();
  const isLastMessageQuestion =
    messages && messages[messages.length - 1].type === MessageType.QUESTION;
  const visibleMessages =
    (isProcessing || isLoading) && isLastMessageQuestion
      ? messages?.slice(0, messages.length - 1)
      : messages;

  return (
    <div className='font-roobert-pro flex flex-col gap-14 pb-24'>
      {visibleMessages?.map((message, index) => {
        if (message.type === MessageType.QUESTION) {
          return (
            <BotQuestion
              key={message._id}
              message={message}
              isFirstMessage={index === 0}
            />
          );
        } else {
          return <UserAnswer key={message._id} message={message} />;
        }
      })}
      {(isProcessing || isLoading) && <ChatLoading />}
      {isCompleted && (
        <BotQuestion
          key='congratulations'
          message={{
            _id: "",
            text: "",
            type: MessageType.QUESTION,
            fixed:
              "Well done and congratulations on your deal!! sales people are the core of any comapny yet they don't get the recognition they deserve, set back, relax and let me get you something that you can actually show to impress",
          }}
        />
      )}
    </div>
  );
};

export default ConversationItem;
