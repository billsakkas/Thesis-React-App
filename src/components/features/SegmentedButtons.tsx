import React from "react";
import SegmentedButton from "../primitive/SegmentedButton";

type TSegmentedButtons = {
  name: string;
  buttons: {
    id: number;
    title: string;
  }[];
  activeButton: string;
  setActiveButton: (name: string, value: string) => void;
};

const SegmentedButtons = ({
  name,
  buttons,
  activeButton,
  setActiveButton,
}: TSegmentedButtons) => {
  return (
    <div className="flex rounded-xl bg-white outline outline-orange-400">
      {buttons.map((button) => (
        <SegmentedButton
          key={button.id}
          isActive={activeButton === `${button.id}`}
          title={button.title}
          onClick={() => setActiveButton(name, `${button.id}`)}
        />
      ))}
    </div>
  );
};

export default SegmentedButtons;
