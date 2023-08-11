import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
    </>
  );
}

export default App;
