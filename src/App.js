import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <WorkExperience />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
