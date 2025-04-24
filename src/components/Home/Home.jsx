import pic from "../../assets/pic.jpg";
import TextChanger from "../../TextChanger";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" }); // Scrolls smoothly to the Contact section
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-normal tracking-tighter text-indigo-400">
          <TextChanger />
        </h1>

        <p className="pt-2 text-sm md:text-2xl leading-tight tracking-tighter text-gray-300">
        I am a Backend, Frontend Developer, and Software Developer, skilled in Node.js, Express, React, and Next.js.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-5 md:m-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:bg-[#3d4b70]"
        >
          Contact Me
        </button>
      </div>
      <div>
        <img
          className="w-64 mx-auto md:w-96 rounded-full border-4 border-indigo-300 shadow-lg"
          src={pic}
          alt="Aditi, Software Developer"
        />
      </div>
    </div>
  );
};

export default Home;
