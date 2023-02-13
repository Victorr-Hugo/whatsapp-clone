import React, { useState, useEffect } from "react";
import { useUsers } from "../../context/userContext";

const SearchBar = () => {
  const { handleSearch, setUser, user } = useUsers();
  const [username, setUsername] = useState("");

  const handleKey = async (e) => {
    if (e.code === "Enter") {
      await handleSearch(username);
      setUsername("");
    }
  };

  return (
    <div className="w-full border-b box-border bg-white">
      <div className="py-1 px-2 w-full h-full">
        <div className="w-full h-full flex-row flex">
          <div className="flex-row flex rounded-[7px] px-2 py-1 h-full bg-[#f0f2f5]">
            <button className="">
              {user ? (
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMidmeet"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                  fill="#008069"
                  onClick={() => setUser(null)}
                >
                  <path d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMidmeet"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                  fill="#54656f"
                >
                  <path d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
                </svg>
              )}
            </button>
            <div className="w-full h-full my-auto">
              <input
                placeholder="Search a chat or start a new one."
                type="text"
                onKeyDown={handleKey}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="bg-transparent px-1 outline-none my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
