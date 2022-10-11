import React from "react";

type TFooter = {};

const Footer = ({}: TFooter) => {
  return (
    <div className="flex flex-col bg-orange-100 p-4">
      <h3 className="text-lg font-bold">
        SweetDeal -{" "}
        <a
          className="text-lg font-light tracking-widest"
          href="https://github.com/billsakkas"
        >
          Github
        </a>
      </h3>
      <p className="text-md font-thin">
        This project was created just for fun. It is not a real estate
        application. It is just a project to practice my skills and try new
        things. However, I believe that it is a good start for a real estate
        application. I hope you like it.
      </p>
    </div>
  );
};

export default Footer;
