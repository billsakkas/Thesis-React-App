import React from "react";
import { GoLocation } from "react-icons/go";

type TListingHeader = {
  title: string;
  address: string;
  city: string;
  country: string;
};

const ListingHeader = ({ title, address, city, country }: TListingHeader) => {
  return (
    <div className="px-4">
      <h3 className="text-2xl">{`${title}`}</h3>
      <div className="flex flex-row items-center">
        <GoLocation />
        <span className="text-sm text-slate-500">{`${address}, ${city}, ${country}`}</span>
      </div>
    </div>
  );
};

export default ListingHeader;
