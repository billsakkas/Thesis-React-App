import React from "react";
import SearchHeader, { TInputs, TSearchHeader } from "./SearchHeader";

type THeader = {
  type?: "search";
  searchHeaderInputs?: TInputs;
};

const Header = ({ type, searchHeaderInputs }: THeader) => {
  return (
    <nav className="flex flex-col gap-8 bg-orange-100 py-2">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏘️</span>
          <h1 className="text-lg font-bold">SweetDeal</h1>
        </div>
        <span className="text-2xl">🥪</span>
      </div>
      {type && type === "search" && (
        <SearchHeader Inputs={searchHeaderInputs} />
      )}
    </nav>
  );
};

export default Header;
