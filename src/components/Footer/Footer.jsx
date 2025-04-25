import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2xbb7tu",
        "template_4h72iz8",
        form.current,
        "p3jLCmpA9eAFJYttu"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="Contact"
      className="flex flex-wrap justify-between bg-gradient-to-t from-gray-900 via-slate-900 to-gray-800 text-white p-10 md:p-16 items-center rounded-t-xl shadow-lg"
    >
      {/* Contact Heading & Form */}
      <div className="text-center md:text-left mb-10 md:mb-0 md:ml-16 w-full md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-400">
          Contact
        </h1>
        <h3 className="text-md md:text-2xl font-normal text-gray-300 mt-2 mb-10">
          Feel Free to Reach Out!
        </h3>
        
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 max-w-md"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white py-2 px-4 rounded-md w-fit mt-2"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <ul className="flex flex-col gap-4 text-sm md:text-lg w-full md:w-auto">
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
            LinkedIn
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
