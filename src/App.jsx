import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
