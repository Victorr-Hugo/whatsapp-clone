import React from "react";
import Chat from "../components/LandPage/Chat";

import CoverPage from "../components/LandPage/CoverPage";
import NavBar from "../components/NavBar/NavBar";
import { useChat } from "../context/chatContext";

export const HomePage = () => {
  const { data } = useChat();
  console.log(data);
  return (
    <div className="w-full h-full">
      <div className="bg-alternative_app_background shadow w-full h-full">
        <div className="w-full h-full flex-row flex">
          <div className="w-1/4 h-full border-r">
            <NavBar />
          </div>
          <div className="w-3/4 h-full relative translate grow ">
            {data.chatId !== "null" ? <Chat /> : <CoverPage />}
          </div>
        </div>
      </div>
    </div>
  );
};
