import Link from "next/link";
import React from "react";

type TNavbar = {};

const navbarLinks = [
  {
    href: "/",
    text: "Home",
  },
  // {
  //   href: "/about",
  //   text: "About",
  // },
  // {
  //   href: "/contact",
  //   text: "Contact",
  // },
];

const Navbar = ({}: TNavbar) => {
  return (
    <nav className="flex h-16 flex-col items-center justify-center bg-black">
      <ul className="flex justify-center">
        {navbarLinks.map((link) => (
          <li key={link.href} className="mr-4">
            <Link href={link.href}>
              <a className="text-white">{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
