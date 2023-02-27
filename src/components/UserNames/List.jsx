import React from "react";
import { DummyData } from "./DummyData";
const titles = ["Username", "Minimum Bid", "Auction ends in"];

const List = () => {
  return (
    <div>
      {/* Actions */}
      <div className="text-2xl">Actions</div>
      {/* List */}
      <div>
        {/* titles */}
        <div className="grid grid-cols-3">
          {titles.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>

        {/* data here */}
        <div className="flex flex-col">
          {DummyData.map((val, i) => (
            <div key={i} className="grid grid-cols-3">
              <div>{val.userName}</div>
              <div>{val.minimumBid}</div>
              <div>{`${val.days} days ${val.hours} hours `}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
