import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CarouselComponent from "./components/test/Test";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CarouselComponent />
    </div>
  );
};

export default App;
