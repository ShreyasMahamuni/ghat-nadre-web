import React from "react";
import HeroSlider from "../components/Home/HeroSlider";
import About from "../components/Home/About";
import "../assets/styles/home.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <About />
      <Footer />
    </>
  );
}

export default Home;
