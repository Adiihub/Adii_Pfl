const ProjectCard = ({ title, main, main2, pic, codeLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#453fg5] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={pic} alt={title} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>
      <p className="text-sm px-4 md:text-md leading-tight py-2 text-gray-200">
        {main}
      </p>
      <p className="text-sm px-4 md:text-md leading-tight py-2 text-gray-200">
        {main2}
      </p>
      <div className="p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#083344]">
          Demo
        </button>
        <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#6ee7b7]">
          <a href={codeLink} target="_blank">View on GitHub</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
