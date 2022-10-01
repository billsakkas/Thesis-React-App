import React from "react";

type TCircularButton = {
  title: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const CircularButton = ({ title, isActive, onClick }: TCircularButton) => {
  const activeStyle = isActive ? "bg-orange-400 text-white" : "text-orange-400";

  return (
    <div
      className={`grow rounded-xl text-center font-semibold  outline outline-2 outline-orange-400 transition ${activeStyle}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default CircularButton;
