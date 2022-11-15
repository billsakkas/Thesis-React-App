import Link from "next/link";
import React from "react";
import HamburgerMenu from "../primitive/HamburgerMenu";
import SearchHeader, { TInputs } from "./SearchHeader";

type THeader = {
  type?: "search";
  searchHeaderInputs?: TInputs;
};

const Header = ({ type, searchHeaderInputs }: THeader) => {
  return (
    <nav className="flex flex-col gap-8 bg-orange-100 py-2" id="nav">
      <div className="flex items-center justify-between px-2">
        <Link href="/">
          <a>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏘️</span>
              <h1 className="text-lg font-bold">SweetDeal</h1>
            </div>
          </a>
        </Link>
        <HamburgerMenu />
      </div>
      {type && type === "search" && (
        <SearchHeader Inputs={searchHeaderInputs} />
      )}
    </nav>
  );
};

export default Header;
