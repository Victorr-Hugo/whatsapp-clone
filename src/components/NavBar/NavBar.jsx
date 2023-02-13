import React from "react";
import { useUsers } from "../../context/userContext";
import QueryResult from "./QueryResult";
import Chats from "./Chats";
import ConfigNav from "./ConfigNav";
import SearchBar from "./SearchBar";
import icon from "../../resources/icon.png";

const NavBar = () => {
  const { currentUser, user, setConfigNav, configNav } = useUsers();

  return (
    <div className="fixed top-0 bottom-0 left-0 w-[346px]">
      <div className="w-full pb-2 px-4 pt-4 border-b flex-row flex">
        <div className="w-10 h-10">
          <img
            onClick={() => setConfigNav(true)}
            alt=""
            src={currentUser.photoURL ? currentUser.photoURL : icon}
            className="w-full h-full rounded-full object-cover cursor-pointer hover:opacity-90 min-w-[40px]"
          />
        </div>
        <div className="w-full flex-row flex h-full my-auto">
          <div className="mr-0 ml-auto h-full justify-center items-center flex-row flex">
            <div className="my-auto mx-3 cursor-pointer h-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="block m-auto"
                fill="#54656f"
              >
                <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM5.683,16H1a1,1,0,0,1-1-1A6.022,6.022,0,0,1,5.131,9.084a1,1,0,0,1,1.1,1.266A6.009,6.009,0,0,0,6,12a5.937,5.937,0,0,0,.586,2.57,1,1,0,0,1-.9,1.43ZM17,24H7a1,1,0,0,1-1-1,6,6,0,0,1,12,0A1,1,0,0,1,17,24ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm17,8H18.317a1,1,0,0,1-.9-1.43A5.937,5.937,0,0,0,18,12a6.009,6.009,0,0,0-.236-1.65,1,1,0,0,1,1.105-1.266A6.022,6.022,0,0,1,24,15,1,1,0,0,1,23,16Z"></path>
              </svg>
            </div>
            <div className="my-auto mx-3 cursor-pointer h-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="block m-auto"
                fill="#54656f"
              >
                <path d="M2,12H0c0-1.1,.15-2.19,.44-3.24l1.93,.54c-.24,.87-.37,1.78-.37,2.7ZM6.95,3.37l-1.01-1.72c-1.77,1.04-3.26,2.53-4.3,4.3l1.73,1.01c.87-1.48,2.11-2.72,3.58-3.59Zm5.05-1.37V0c-1.1,0-2.19,.15-3.24,.44l.54,1.93c.87-.24,1.78-.37,2.7-.37Zm0,20c-.92,0-1.83-.12-2.7-.37l-.54,1.93c1.05,.29,2.14,.44,3.24,.44v-2Zm-5.05-1.37c-1.48-.87-2.72-2.11-3.59-3.58l-1.72,1.01c1.04,1.77,2.53,3.26,4.3,4.3l1.01-1.73ZM2.37,14.7c-.24-.87-.37-1.78-.37-2.7H0c0,1.1,.15,2.19,.44,3.24l1.93-.54Zm21.63-2.7h-2c0,.92-.12,1.83-.37,2.7l1.93,.54c.29-1.05,.44-2.14,.44-3.24Zm-1.64,6.06l-1.73-1.01c-.87,1.48-2.11,2.72-3.58,3.59l1.01,1.72c1.77-1.04,3.26-2.53,4.3-4.3Zm-7.12,5.5l-.54-1.93c-.87,.24-1.78,.37-2.7,.37v2c1.1,0,2.19-.15,3.24-.44ZM15.24,.44c-1.05-.29-2.14-.44-3.24-.44V2c.92,0,1.83,.12,2.7,.37l.54-1.93Zm7.12,5.5c-1.04-1.77-2.53-3.26-4.3-4.3l-1.01,1.73c1.48,.87,2.72,2.11,3.59,3.58l1.72-1.01Zm1.2,2.82l-1.93,.54c.24,.87,.37,1.78,.37,2.7h2c0-1.1-.15-2.19-.44-3.24Z"></path>
              </svg>
            </div>
            <div className="my-auto mx-3 cursor-pointer h-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="block m-auto"
                fill="#54656f"
              >
                <path d="M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,9.044H7.041V7.1h9.975V9.044z"></path>
              </svg>
            </div>
            <div className="mr-auto mx-3 cursor-pointer h-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="block m-auto"
                fill="#54656f"
              >
                <path d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <SearchBar />
      <div className="w-full h-full bg-white">
        {user ? <QueryResult /> : <Chats />}
      </div>
    </div>
  );
};

export default NavBar;
