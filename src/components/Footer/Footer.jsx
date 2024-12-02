import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex flex-wrap justify-between bg-gradient-to-t from-gray-900 via-slate-900 to-gray-800 text-white p-10 md:p-14 items-center rounded-t-xl shadow-lg"
    >
      {/* Contact Heading */}
      <div className="text-center md:text-left mb-6 md:mb-0 md:ml-16">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-400">
          Contact
        </h1>
        <h3 className="text-md md:text-2xl font-normal text-gray-300 mt-2 mb-12">
          Feel Free to Reach Out!
        </h3>
      </div>

      {/* Contact Details */}
      <ul className="flex flex-col gap-3 text-sm md:text-lg">
        <li className="flex gap-2 items-center text-gray-300 hover:text-indigo-400 transition duration-300">
          <MdOutlineEmail size={25} />
          <a href="mailto:aditi22202@gmail.com" className="hover:underline">
            aditi22202@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center text-gray-300 hover:text-indigo-400 transition duration-300">
          <CiLinkedin size={25} />
          <a
            href="https://www.linkedin.com/in/aditi71/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Linkedin
          </a>
        </li>
        <li className="flex gap-2 items-center text-gray-300 hover:text-indigo-400 transition duration-300">
          <FaGithub size={25} />
          <a
            href="https://github.com/Adiihub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Adiihub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
