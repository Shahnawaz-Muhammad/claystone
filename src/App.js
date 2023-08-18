import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Footer from "./components/footer";

// import MovingBox from "./components/moving-box";
import Aboutus from "./components/aboutus/aboutus";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
