import "./App.css";
import WhyChooseUs from "./components/whyChooseUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ClientsStories from "./components/clients-stories";
import Projects from "./components/projects";
import AskQuestions from "./components/qna";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ClientsStories />
      <Projects />
      <AskQuestions />
    </>
  );
}

export default App;
