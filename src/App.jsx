import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
