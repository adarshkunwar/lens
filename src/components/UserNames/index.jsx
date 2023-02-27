import React from "react";
import List from "./List";

const UserNames = () => {
  return (
    <div className="bg-gray-600 w-[50rem] text-white text-center px-2 flex flex-col gap-5 pt-4">
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold">Buy and Sell Usernames</div>
        <div>
          Secure your name with blockchain in an ecosystem of 700+ million users
          and assign it as a link for your personal account, channel or group.
          Learn more
        </div>
      </div>
      <div className="bg-gray-400 flex items-center text-xl">
        <div>Search</div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="py-2  px-2 border-0 focus:outline-none bg-transparent text-white"
          placeholder="Enter a Lens username"
        />
      </div>
      <List />
    </div>
  );
};

export default UserNames;
