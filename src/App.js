import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Footer from "./components/footer";
import { ServicesData } from "./data/servicesData";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services data={ServicesData} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
