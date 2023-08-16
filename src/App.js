import "./App.css";
import Navbar from "./components/navbar";
import FooterContainer from "./components/footerContainer";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";

// import MovingBox from "./components/moving-box";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterContainer />
    </>
  );
}

export default App;
