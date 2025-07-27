import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    openMenu(!menu);
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    openMenu(false);
    setShowMenu(true);
  };

  return (
    <nav className='flex flex-wrap justify-between md:items-center bg-black text-white px-10 pt-6 md:px-20 fixed top-0 left-0 w-full z-50'>
      <a href="#Home">
        <span className='text-xl font-bold tracking-wide'>Portfolio</span>
      </a>

      <ul
        className={`${menu ? "block" : "hidden"} mx-24 mt-4 font-semibold md:mt-5
        bg-black px-2 rounded-xl bg-opacity-30 md:border-none 
        text-center md:bg-transparent md:static
        md:mx-0 md:flex gap-6`}
      >
        <a href="#About" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
        </a>
        <a href="#Experience" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
        </a>
        <a href="#Projects" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#Footer" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
