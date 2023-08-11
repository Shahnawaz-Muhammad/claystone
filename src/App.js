import "./App.css";
import WhyChooseUs from "./components/whyChooseUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Blog from "./components/blog";
import FooterContainer from "./components/footerContainer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Blog />
      <FooterContainer />
    </>
  );
}

export default App;
