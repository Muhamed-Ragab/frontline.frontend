import Loader from "@/components/shared/Loader";
import RequestError from "@/components/shared/RequestError";
import useAction from "@/hooks/api/useAction";
import type { Chat } from "@/types/chat";
import { useNavigate } from "react-router";

export default function CreateChatPage() {
  const navigate = useNavigate();
  const { error } = useAction({
    endpoint: "/chats",
    method: "POST",
    requestOptions: {
      manual: false,
      onSuccess: (data: Chat) => {
        navigate(`/frontline-ai/${data._id}`);
      },
    },
  });

  if (error) {
    return (
      <div className='w-full flex items-center justify-center row-span-2 container flex-grow'>
        <RequestError
          message={
            "An error occurred while creating new chat, please try again later"
          }
        />
      </div>
    );
  }

  return (
    <div className='w-full flex items-center justify-center row-span-2 container flex-grow'>
      <Loader />
    </div>
  );
}
