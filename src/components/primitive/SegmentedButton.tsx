import React from "react";

type TSegmentedButton = {
  title: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const SegmentedButton = ({ title, isActive, onClick }: TSegmentedButton) => {
  const activeStyle = isActive ? "bg-orange-400 text-white" : "";

  return (
    <div
      className={`grow rounded-xl text-center transition ${activeStyle}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SegmentedButton;
