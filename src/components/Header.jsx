import { useState } from "react";
import { Link } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import TabLogo from "../../src/assets/Port-Logo.png";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-7xl">
      <div className="md:flex items-center justify-between py-2 md:px-10 px-7">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <img src={TabLogo} alt="tab_logo" className="w-16"></img>
        </div>
        {/* Menu Icons */}
        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden absolute"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Nav Links */}
        <ul
          className={`flex flex-col items-center justify-evenly md:flex md:items-center md:pb-0 absolute md:static md:z-auto md:flex-row z-10 right-0 w-full ml-20 rounded-lg md:w-auto mt-4 md:mt-0 md:pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="font-lato md:ml-8 md:my-0 my-7 font-semibold md:hover:transform md:hover:transition-all md:hover:-translate-y-0.5 md:hover:ease-in-out md:hover:duration-300 "
            >
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="transition-all duration-500 hover:text-secondary cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
