import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Commercial from "./components/Commercial/Commercial";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Commercial />
      <Blog />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
