import ProjectCard from "./ProjectCard";
import mern from "../../assets/mern.png";
import Ecom from "../../assets/Ecom.jpeg";
import Bug from "../../assets/Bug.svg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-5 md:p-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 text-center">
        Projects
      </h1>
      <div className="py-15 px-8 flex flex-wrap gap-10 justify-center">
        <ProjectCard
          title="Bug Tracking System "
          main="• Developed a bug tracking system with modules for login, admin, customer, and expert functionalities."
          main2="• Managed user accounts, reported and tracked bugs, and assigned issues to experts for resolution using Python and
          MySQL."
          pic={Bug}
          codeLink={"https://github.com/Adiihub/Bug-Tracking-System"}
        />
        <ProjectCard
          title="Ecommerce Backend"
          main="Built secure user authentication and authorization systems.
                • Designed APIs for managing product inventory, orders, and user accounts."
          main2="Node.js, Express.js, MongoDB, JavaScript, RESTful APIs"
          pic={Ecom}
          codeLink={"https://github.com/Adiihub/EComm-Backend"}
        />
        <ProjectCard
          title="E-commerce Site"
          main="A full-fledged e-commerce platform built with React and Node.js for seamless online shopping experience."
          pic={mern}
          codeLink={""}
        />
      </div>
    </div>
  );
};

export default Projects;
