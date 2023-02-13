import React from "react";
import { useChat } from "../../context/chatContext";
import Messages from "../Chat/Messages";
import ChatForm from "../Chat/ChatForm";

const Chat = () => {
  const { data } = useChat();
  return (
    <div className="w-full h-full relative bg-app_background">
      <div className="border-b z-50 fixed bg-alternative_app_background  w-full cursor-pointer py-3 flex-row flex px-4">
        <img
          alt=""
          src={data.user?.photoURL}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-[16px] px-4 font-normal leading-[21px] text-[#111b21]">
          {data.user.displayName}
        </div>
        <div className="mr-0 ml-auto  flex-row flex my-auto">
          <div className="mx-4">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill=""
                d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
              ></path>
            </svg>
          </div>
          <div className="mx-4">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill=""
                d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
              ></path>
            </svg>
          </div>
          <div></div>
        </div>
      </div>
      <Messages />
      <ChatForm />
    </div>
  );
};

export default Chat;
