import React from "react";
import Image from "next/image";

type TCard = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const Card = ({ title, subtitle, description, image }: TCard) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <Image
        className="z-0"
        layout="intrinsic"
        width="300"
        height="200"
        src={image}
        priority
      />
      <div className="absolute bottom-0 z-50 flex h-full w-full items-end justify-between">
        <div className="flex h-1/3 w-full items-center bg-gradient-to-t from-black px-2">
          <div className="grow">
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-white">{subtitle}</p>
          </div>

          <div className="flex items-center">
            <p className="font-semibold text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
