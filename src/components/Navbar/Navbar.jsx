import { RiClockwise2Line, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";
import Resume from "../../assets/Resume.pdf"

function Navbar() {
  const [menu, openMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(true);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-lg rounded-b-xl flex justify-between items-center text-white px-10 py-4 md:px-16">
      <span className="text-2xl font-bold tracking-wider text-indigo-400">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-8`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            Internship
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            Projects
          </li>
        </a>
        <a href="#Achievements">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            Achievements
          </li>
        </a>
        {/* <a href="#Contact">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            Contact
          </li>
        </a> */}
        {/* download="Aditi_Resume.pdf" -- put inside a tag */} 
        <a href={Resume}  target="_blank" rel="noopener noreferrer">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            Download CV
          </li>
        </a>
      </ul>

      {showmenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 text-white"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showmenu);
          }}
        />
      ) : (
        <RiClockwise2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 text-white"
        />
      )}
    </nav>
  );
}

export default Navbar;
