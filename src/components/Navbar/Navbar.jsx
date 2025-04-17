import { RiClockwise2Line, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";
// import Resume from "../../assets/Resume.pdf";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, openMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(true);

  return (
    <nav className="flex justify-between items-center text-white px-10 py-6 md:px-16 bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-lg rounded-b-xl">
      <span className="text-2xl font-bold tracking-wider text-indigo-400">
        <Link to="/">Portfolio</Link>
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-8`}
      >
        <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
          <Link to="/about">About</Link>
        </li>
        <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
          <Link to="experience">Internship</Link>
        </li>
        <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
          <Link to="/acheivements">Acheivements</Link>
        </li>
        {/* <a href="#Contact">
          <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
            Contact
          </li>
        </a> */}
        {/* download="Aditi_Resume.pdf" -- put inside a tag */}

        {/* <li className="text-md transition-all duration-300 p-2 hover:text-indigo-400 hover:scale-105">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </li> */}
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
