const AchievementCard = ({ title, description, image }) => {
    return (
      <div className="bg-[#1f2937] rounded-2xl shadow-lg max-w-sm transition-transform transform hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-t-2xl"
        />
        <div className="p-4">
          <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default AchievementCard;
