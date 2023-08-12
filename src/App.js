import "./App.css";
import WhyChooseUs from "./components/whyChooseUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ClientsStories from "./components/clients-stories";
import Projects from "./components/projects";
import AskQuestions from "./components/qna";

import Services from "./components/services";
import OurWork from "./components/our-work";
// import MovingBox from "./components/moving-box";

function App() {
  return (
    <>
      <Navbar />
      {/* <MovingBox/> */}
      <Hero />
      <WhyChooseUs />
      <OurWork />
      <ClientsStories />
      <Services />
      <Projects />
      <AskQuestions />
    </>
  );
}

export default App;
