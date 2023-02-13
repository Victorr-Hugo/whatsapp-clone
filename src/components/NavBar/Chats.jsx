import React from "react";
import { useChat } from "../../context/chatContext";

const Chats = () => {
  const { user, handleSelect, chats } = useChat();

  return (
    <div className="w-full">
      <div className="w-full my-auto flex-col flex">
        {chats?.length > 0
          ? Object.entries(chats)
              ?.sort((a, b) => b[1].date - a[1].date)
              .map((chat) => (
                <div
                  key={chat[0]}
                  onClick={() => handleSelect(chat[1].userInfo)}
                  className="w-full flex-row h-full flex my-auto px-4 py-1 cursor-pointer border-b hover:bg-[#eae6df]"
                >
                  <img
                    alt=""
                    src={chat[1].userInfo.photoURL}
                    className="w-12 h-12 rounded-full my-auto object-cover"
                  />
                  <div className="flex-col flex w-full py-3 h-full text-left px-4">
                    <div className="font-medium">
                      {chat[1].userInfo.displayName}
                    </div>
                    <div>{chat[1].lastMessage?.text}</div>
                  </div>
                </div>
              ))
          : null}
      </div>
    </div>
  );
};

export default Chats;
