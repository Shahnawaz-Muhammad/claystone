import "./App.css";
import WhyChooseUs from "./components/whyChooseUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ClientsStories from "./components/clients-stories";
import Projects from "./components/projects";
import AskQuestions from "./components/qna";


import Ourwork from "./components/our-work"
import Services from "./components/services";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
    <Services />
      <Ourwork />
      <ClientsStories />
      <Projects />
      <AskQuestions />

    </>
  );
}

export default App;
