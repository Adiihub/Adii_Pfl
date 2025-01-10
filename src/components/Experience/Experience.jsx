import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaGit,
  FaNodeJs,
} from "react-icons/fa";
import { MdSchema } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa";
import {
  SiPython,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiC,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { FaCube } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="mt-20 p-10 md:p-24 bg-gradient-to-b from-gray-900 via-black to-gray-800"
    >
      <h1 className="text-4xl text-indigo-400 font-bold mb-12 text-center">
        Internship & Trainings
      </h1>

      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 justify-center py-10">
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <FaHtml5 color="#F16529" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiTailwindcss color="#38BDF8" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiTypescript color="#3178C6" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiRedux color="#764ABC" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiNextdotjs color="#000000" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiMysql color="#4479A1" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiC color="#00599C" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiPython color="#3776AB" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <FaNodeJs color="#8CC84B" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <SiExpress color="#000000" size={50} />
          </span>
          <span className="p-4 bg-gray-800 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <FaGit color="#F15029" size={50} />
          </span>
        </div>

        {/* Work Experience Section */}
        <div className="flex flex-col gap-8 w-full md:w-2/5">
          {/* Naai India */}
          <div className="flex gap-6 bg-gray-800 bg-opacity-50 shadow-lg rounded-lg p-6 items-center hover:scale-105 transition duration-300">
            <MdSchema color="#FF9900" size={50} />
            <div className="text-gray-300">
              <h2 className="text-xl font-semibold text-indigo-400">
                Frontend Developer, Naai India
              </h2>
              <p className="text-sm font-light mb-3">Oct 2024 - Nov 2024</p>
              <ul className="list-disc list-inside">
                <li>
                  Developed responsive and scalable user interfaces using
                  Next.js, TypeScript, React.js, and Tailwind CSS.
                </li>
              </ul>
            </div>
          </div>

          {/* Coding Blocks */}
          <div className="flex gap-6 bg-gray-800 bg-opacity-50 shadow-lg rounded-lg p-6 items-center hover:scale-105 transition duration-300">
            <FaCube color="#E5097k" size={50} />
            <div className="text-gray-300">
              <h2 className="text-xl font-semibold text-indigo-400">
                DSA trainee | Data Structure & Algorithm, Coding Blocks
              </h2>
              <p className="text-sm font-light mb-3">Jun 2024 - Sep 2024</p>
              <ul className="list-disc list-inside">
                <li>
                  Mastered essential data structures: arrays, linked lists,
                  stacks, queues, trees, graphs, DP, Greedy Algorithms
                </li>
              </ul>
            </div>
          </div>

          {/* IITK */}
          <div className="flex gap-6 bg-gray-800 bg-opacity-50 shadow-lg rounded-lg p-6 items-center hover:scale-105 transition duration-300">
            <FaPuzzlePiece color="#4285F4" size={50} />
            <div className="text-gray-300">
              <h2 className="text-xl font-semibold text-indigo-400">
                Python for Data-Science, IIT Kanpur
              </h2>
              <p className="text-sm font-light mb-3">Jun 2023 - Jul 2023</p>
              <ul className="list-disc list-inside">
                <li>
                  Gained hands-on experience in various Python libraries such as
                  NumPy, Pandas, and Matplotlib & learned how to apply them to
                  real-world data problems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
