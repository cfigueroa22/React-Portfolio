import { useState } from "react";
import TabLogo from "../../src/assets/Port-Logo.png";

const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Logo */}
      <div className="bg-white">
        <img src={TabLogo} alt="logo" className="w-16 pl-2 bg-white" />
      </div>
      {/* Close/Open Icon */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="absolute top-0 right-0 pt-2 pr-1 text-4xl bg-white lg:hidden"
      >
        {open ? (
          <div className="bg-white hover:cursor-pointer hover:text-gray-300">
            <ion-icon name="close"></ion-icon>
          </div>
        ) : (
          <div className="bg-white hover:cursor-pointer hover:text-gray-300">
            <ion-icon name="menu"></ion-icon>
          </div>
        )}
      </div>
      {/* Menu */}
      <div>
        <ul
          className={`text-center w-full absolute bg-main z-50 transition-all duration-500 ease-in lg:top-0 lg:flex lg:bg-transparent lg:justify-end lg:gap-6 lg:pr-2 ${
            open ? "top-12" : "top-[-1000px]"
          }`}
        >
          {" "}
          <li
            onClick={() => setOpen(false)}
            className="z-50 py-6 bg-main lg:bg-transparent lg:py-1"
          >
            <a
              href="#home"
              className="text-4xl bg-main hover:cursor-pointer font-playfair hover:text-white lg:bg-transparent lg:text-2xl lg:hover:text-main"
            >
              Home
            </a>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="z-50 py-6 bg-main lg:bg-transparent lg:py-1"
          >
            <a
              href="#about"
              className="text-4xl bg-main hover:cursor-pointer font-playfair hover:text-white lg:bg-transparent lg:text-2xl lg:hover:text-main"
            >
              About
            </a>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="z-50 py-6 bg-main lg:bg-transparent lg:py-1"
          >
            <a
              href="#projects"
              className="text-4xl bg-main hover:cursor-pointer font-playfair hover:text-white lg:bg-transparent lg:text-2xl lg:hover:text-main"
            >
              Projects
            </a>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="z-50 py-6 bg-main lg:bg-transparent lg:py-1"
          >
            <a
              href="#contact"
              className="text-4xl bg-main hover:cursor-pointer font-playfair hover:text-white lg:bg-transparent lg:text-2xl lg:hover:text-main"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
