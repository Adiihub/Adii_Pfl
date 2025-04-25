import ProjectCard from "./ProjectCard";
// import mern from "../../assets/mern.png";
import Ecom from "../../assets/Ecom.jpeg";
import Bug from "../../assets/Bug.jpeg";
import map from "../../assets/map.jpg";
import ZaikaBite from "../../assets/ZaikaBite.png";
import Notes from "../../assets/Notes.jpg"

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
          title="ZaikaBite"
          main="A full-stack food Ordering web application that enables users to explore menus, add items to their cart, place secure online orders via a payment gateway, and track order status in real-time."
          main2="It includes a frontend website, admin panel, and backend server, providing a seamless experience for both customers and administrators."
          pic={ZaikaBite}
          demolink={"https://zaikabite-frontend.onrender.com/"}
          codeLink={"https://github.com/Adiihub/ZaikaBite"}
          technology={"React.js, Node.js, Express.js, MongoDB, JavaScript, RESTful APIs"}
        />
        <ProjectCard
          title="Bug Tracking System "
          main="• Developed a bug tracking system with modules for login, admin, customer, and expert functionalities."
          main2="• Managed user accounts, reported and tracked bugs, and assigned issues to experts for resolution using Python and
          MySQL."
          pic={Bug}
          codeLink={"https://github.com/Adiihub/Bug-Tracking-System"}
          technology={"Python, MySQL"}
        />
        <ProjectCard
          title="Ecommerce Backend"
          main="Built secure user authentication and authorization systems."
          main2={"• Designed APIs for managing product inventory, orders, and user accounts."}
          technology={"Node.js, Express.js, MongoDB, JavaScript, RESTful APIs"}
          pic={Ecom}
          codeLink={"https://github.com/Adiihub/EComm-Backend"}
        />
        <ProjectCard
          title="RealTime Device Tracker"
          main="• Tracks user location in real-time & Displays location on an interactive Leaflet map"
          main2="• Updates user markers live using WebSockets & Removes marker when a user disconnects"
          pic={map}
          codeLink={"https://github.com/Adiihub/RealTime-Device-Tracker"}
          demolink={"https://realtime-device-tracker-j7ww.onrender.com/"}
          technology={"Node.js, Express, HTML, CSS, Socket.IO, WebSocket, Leaflet.js"}
        />
        <ProjectCard
          title="Notes Maintainer"
          main="A simple yet functional Notes App built with React. Add, delete, and search your notes with data saved in localStorage to persist across sessions."
          pic={Notes}
          codeLink={"https://github.com/Adiihub/basic-notes-maintainer"}
          demolink={"https://67f11191c2817a54a360cf21--cosmic-lebkuchen-7d1f81.netlify.app/"}
          technology={"React, HTML/CSS, JavaScript, LocalStorage API"}
        />
      </div>
    </div>
  );
};

export default Projects;
