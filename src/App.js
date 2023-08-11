import "./App.css";
import WhyChooseUs from "./components/whyChooseUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <WhyChooseUs />
      <Hero />
    </>
  );
}

export default App;
