import React from "react";
import { useChat } from "../../context/chatContext";
import Message from "./Message";
import background from "../../resources/background.png";

const Messages = () => {
  const { messages } = useChat();
  return (
    <div className="w-full h-full ">
      <div
        className=" h-full w-full"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full h-full box-border overflow-auto pt-[59px] px-7 pb-20 flex-col flex">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
