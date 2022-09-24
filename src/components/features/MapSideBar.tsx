import React from "react";

type TMapSideBar = {
  children: React.ReactNode;
};

const MapSideBar = ({ children }: TMapSideBar) => {
  return (
    <div className="flex w-60 flex-col gap-3 p-4">
      <h1 className="text-center text-2xl font-bold text-black">
        Available estates
      </h1>
      {children}
    </div>
  );
};

export default MapSideBar;
