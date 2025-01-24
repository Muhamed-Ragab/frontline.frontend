import { useChatStore } from "@/stores/chat_store";
import { MessageType, type Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import useAction from "../api/useAction";

const useSendMessage = () => {
  const { id } = useParams();
  const {
    setChatData,
    addMessage,
    filterOutLatestMessage,
    messages,
    isProcessing,
  } = useChatStore();
  const [answer, setAnswer] = useState("");
  const [latestMessageId, setLatestMessageId] = useState<string>("");

  const { runAsync, loading } = useAction({
    method: "PUT",
    endpoint: `/chats/${id}`,
    requestOptions: {
      onSuccess: (chat: Chat) => {
        setChatData({ messages: chat.messages });
        setAnswer("");
      },
      onError: () => {
        filterOutLatestMessage(latestMessageId);

        toast.error("Something went wrong, please answer again");
      },
    },
  });

  useEffect(() => {
    setChatData({ isLoading: loading });
  }, [loading]);

  const setLatestMessageAsProcessing = () => {
    setChatData({ isProcessing: true });

    setTimeout(() => {
      setChatData({ isProcessing: false });
    }, 4000);
  };

  const appendMessage = () => {
    addMessage({
      text: answer,
      type: MessageType.ANSWER,
      _id: answer.split(" ").join("-"),
      fixed: "",
    });
    setLatestMessageId(answer?.split(" ")?.join("-"));

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    setLatestMessageAsProcessing();
    appendMessage();

    runAsync({ text: answer });
  };

  return { loading, answer, setAnswer, handleSendMessage, isProcessing };
};

export default useSendMessage;
