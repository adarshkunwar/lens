import React from "react";
import { DummyData } from "./DummyData";
const titles = ["Username", "Minimum Bid", "Auction ends in"];

const List = () => {
  return (
    <div>
      {/* Actions */}
      {/* <div className="text-2xl">Actions</div> */}
      {/* List */}
      <div>
        {/* titles */}
        <div className="grid grid-cols-3 bg-secondary py-2 rounded-t-lg ">
          {titles.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>

        {/* data here */}
        <div className="flex flex-col mt-0.5 divide-y-[0.1rem] divide-secondary">
          {DummyData.map((val, i) => (
            <div key={i}>
              <div className="grid grid-cols-3 py-2  hover:bg-secondary">
                <div>{val.userName}</div>
                <div>{val.minimumBid}</div>
                <div>{`${val.days} days ${val.hours} hours `}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
