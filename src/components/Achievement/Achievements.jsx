
import AchievementCard from "./AchievementCard";
import SIH from "../../assets/SIH.jpeg";
import Athlete from "../../assets/Athlete.jpeg";
import CA from "../../assets/CA.jpeg";

const Acheivements = () => {
  return (
    <div
      id="Achievements"
      className="p-3 md:p-16 bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-12 text-center">
        Achievements
      </h1>
      <div className="py-10 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        <AchievementCard
          title="Smart India Hackathon"
          description="Achieved 1st position at Smart India Hackathon 2024 (internal round) organized by Geeta University as part of Team TechWizard."
          image={SIH}
        />
        <AchievementCard
          title="Best Athlete Girl"
          description="Honored Best Athlete Girl for 3 consecutive years for top performance in Sports."
          image={Athlete}
        />
        <AchievementCard
          title="Campus Ambassador – Geeta University"
          description="Represented the university at various tech and outreach programs, driving student engagement and promoting campus initiatives."
          image={CA}
        />
      </div>
    </div>
  );
};

export default Acheivements;