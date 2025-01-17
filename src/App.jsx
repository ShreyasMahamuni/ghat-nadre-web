import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./layout/Header";
import "../src/assets/styles/theme.css";
import Footer from "./layout/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import About from "./Pages/About";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
