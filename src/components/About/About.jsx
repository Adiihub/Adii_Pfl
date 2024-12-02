import { IoArrowForward } from "react-icons/io5";
import C from "../../assets/C.jpg";

const About = () => {
  return (
    <div id="About" className="text-gray-200 flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-800 shadow-2xl mx-4 md:mx-20 rounded-xl p-10 md:p-16 my-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-indigo-300 inline-block">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <img
          className="w-72 h-72 md:w-96 md:h-96 rounded-lg object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
          src={C}
          alt="About Me"
        />

        <ul className="space-y-10 max-w-2xl text-left">
          <li className="flex gap-4">
            <IoArrowForward
              size={36}
              className="text-indigo-500 mt-1 animate-pulse"
            />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                Frontend Developer
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I specialize in building responsive and visually appealing user
                interfaces with modern tools like React, Tailwind CSS, and
                Next.js, ensuring seamless user experiences.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <IoArrowForward
              size={36}
              className="text-indigo-500 mt-1 animate-pulse"
            />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                Backend Developer
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Experienced in creating robust backend systems with Node.js,
                Express, and MongoDB. I focus on performance, scalability, and
                security in every solution I craft.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <IoArrowForward
              size={36}
              className="text-indigo-500 mt-1 animate-pulse"
            />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                Fullstack Developer
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Adept at creating complete solutions that seamlessly connect
                backend and frontend systems, delivering smooth user
                interactions and powerful functionality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
