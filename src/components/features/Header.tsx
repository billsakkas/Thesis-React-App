import React from "react";
import SearchHeader, { TInputs, TSearchHeader } from "./SearchHeader";

type THeader = {
  type?: "search";
  searchHeaderInputs?: TInputs;
};

const Header = ({ type, searchHeaderInputs }: THeader) => {
  return (
    <nav className="flex flex-col gap-8 bg-orange-100">
      <div className="flex items-center justify-between px-2 pt-2">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <h1 className="text-lg font-bold">SweetDeal</h1>
        </div>
        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
      </div>
      {type && type === "search" && (
        <SearchHeader Inputs={searchHeaderInputs} />
      )}
    </nav>
  );
};

export default Header;
