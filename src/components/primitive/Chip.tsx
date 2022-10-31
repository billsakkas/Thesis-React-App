import React from "react";
import { IconType } from "react-icons";

type TChip = {
  Icon: IconType;
  text: string;
};

const Chip = ({ Icon, text }: TChip) => {
  return (
    <div className="flex w-fit flex-row items-center gap-1 rounded-lg bg-orange-100 px-3 py-1 shadow-sm shadow-orange-200">
      <Icon />
      <span className="text-yellow-600">{text}</span>
    </div>
  );
};

export default Chip;
