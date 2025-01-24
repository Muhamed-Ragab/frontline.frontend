import { useChatStore } from "@/stores/chat_store";
import type { Chat } from "@/types/chat";
import { useEffect } from "react";
import { useParams } from "react-router";
import useGet from "../api/useGet";

const useChat = () => {
  const { id } = useParams();
  const { setChatData } = useChatStore();
  const {
    data: chatData,
    loading,
    error,
  } = useGet<Chat>({
    endpoint: `/chats/${id}`,
    cacheKey: `chat-${id}`,
    requestOptions: {
      refreshDeps: [id],
    },
  });

  useEffect(() => {
    if (!chatData?.messages) return;

    setChatData({ messages: chatData.messages });
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  }, [chatData]);


  return { chatData, loading, error };
};

export default useChat;
