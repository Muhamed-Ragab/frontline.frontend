import type { Message } from "@/types/chat";
import { create } from "zustand";

type ChatStore = {
  isProcessing: boolean;
  isLoading: boolean;
  messages: Message[] | null;
  setChatData: (data: Partial<ChatStore>) => void;
  addMessage: (newMessage: Message) => void;
  filterOutLatestMessage: (latestMessageId: string) => void;
};

export const useChatStore = create<ChatStore>()(set => ({
  isProcessing: false,
  isLoading: false,
  messages: null,
  setChatData: (data: Partial<ChatStore>) => set(data),
  addMessage: (newMessage: Message) =>
    set(state => {
      return {
        messages: state.messages?.concat(newMessage),
      };
    }),
  filterOutLatestMessage: (latestMessageId: string) =>
    set(state => {
      return {
        messages: state.messages?.filter(
          message => message._id !== latestMessageId
        ),
      };
    }),
}));
