import About from "./components/About/About";
import Acheivements from "./components/Achievement/Achievements";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full">
      <Navbar />
      <main className="overflow-x-hidden overflow-y-auto">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Acheivements />
        <Footer />
      </main>
    </div>
  );
}

export default App;
