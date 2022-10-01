import React from "react";

type TMapSideBar = {
  children: React.ReactNode;
};

const MapSideBar = ({ children }: TMapSideBar) => {
  return (
    <div className="flex w-fit flex-col gap-3">
      <h1 className="text-center text-2xl font-bold text-black">
        Available estates
      </h1>
      {children}
    </div>
  );
};

export default MapSideBar;
