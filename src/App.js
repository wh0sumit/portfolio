import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./Pages/NotFound";

import Projects from "./Pages/Projects/index";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/index";
import Sponsor from "./Pages/Sponsor/Sponsor";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sponsor" element={<Sponsor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
