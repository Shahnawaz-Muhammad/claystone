import "./App.css";
import WhyChooseUs from "./components/whyChooseUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ClientsStories from "./components/clients-stories";
import Projects from "./components/projects";
import AskQuestions from "./components/qna";

import Ourwork from "./components/our-work"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Ourwork />
      <ClientsStories />
      <Projects />
      <AskQuestions />

    </>
  );
}

export default App;
