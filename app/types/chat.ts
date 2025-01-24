export enum MessageType {
  QUESTION = "question",
  ANSWER = "answer",
  ENHANCED_ANSWER = "enhancedAnswer",
}

export type Message = {
  _id: string;
  text: string;
  fixed: string;
  type: MessageType;
};

export type Chat = {
  _id: string;
  userId: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
};
