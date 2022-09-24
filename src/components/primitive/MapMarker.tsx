import React from "react";

type TMapMarker = {
  text: string;
  lat: number;
  lng: number;
  $hover?: boolean;
};

const MapMarker = ({ text, $hover }: TMapMarker) => {
  return (
    <div className="absolute h-fit w-fit -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-4 text-white">
      {$hover ? "hover" : text}
    </div>
  );
};

export default MapMarker;
