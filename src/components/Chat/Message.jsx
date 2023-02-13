import React, { useEffect, useRef } from "react";
import { useChat } from "../../context/chatContext";
import { useUsers } from "../../context/userContext";

const Message = ({ message }) => {
  const { currentUser } = useUsers();
  const { data, messages } = useChat();

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log(messages);
  return (
    <div className="w-full py-2" ref={ref}>
      <div
        className={
          message.senderId === currentUser.uid
            ? "text-right float-right bg-[#d9fdd3] w-fit px-2 rounded-[6px] py-1 shadow"
            : "text-left float-left bg-white w-fit px-2 rounded-[6px] py-1 shadow"
        }
      >
        {" "}
        {message.img && (
          <img
            alt=""
            src={message.img}
            className="w-full h-[321px] pb-2 object-cover rounded-[6px]"
          />
        )}
        {message.text}
      </div>
    </div>
  );
};

export default Message;
