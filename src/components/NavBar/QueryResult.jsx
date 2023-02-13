import React, { useEffect, useState } from "react";
import { useChat } from "../../context/chatContext";
import { useUsers } from "../../context/userContext";
import icon from "../../resources/icon.png";

const QueryResult = () => {
  const { user, handleSelect } = useChat();
  console.log(user);
  return (
    <div className="w-full h-full py-3 px-5">
      <div className="w-full">
        <div className="text-left text-app_background_stripe text-[16px]">
          Users
        </div>
        <div className="w-full pt-4">
          <div
            onClick={handleSelect}
            className="w-full flex-row flex bg-[#f0f2f5] px-4 py-2 cursor-pointer"
          >
            <img
              alt=""
              src={user?.photoURL ? user?.photoURL : icon}
              className="w-10 h-10 rounded-full"
            />
            <div className="text-[#008069] font-bold ml-4">
              {user?.displayName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryResult;
