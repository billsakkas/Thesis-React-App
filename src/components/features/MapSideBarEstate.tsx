import React from "react";
import Image from "next/image";

type TMapSideBarEstate = {
  id: string;
  name: string;
  price: string;
  address: string;
  description: string;
  image: string;
  stars: number;
};

const MapSideBarEstate = ({
  id,
  name,
  price,
  address,
  description,
  image,
  stars,
}: TMapSideBarEstate) => {
  return (
    <div className="over relative h-32">
      <div className="relative z-50 flex h-full w-full items-end rounded">
        <div className="flex h-1/3 w-full justify-between rounded-b-2xl bg-gradient-to-t from-black px-2 pb-2">
          <div className="w-4/6">
            <h3 className="text-sm font-semibold text-white">{name}</h3>
            <p className="text-xs text-white">⭐{stars}</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs font-semibold">{price} €</p>
          </div>
        </div>
      </div>
      <Image className="z-0 rounded-2xl" layout="fill" src={image} priority />
    </div>
  );
};

export default MapSideBarEstate;
