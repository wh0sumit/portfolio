import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import NotFound from "./Pages/NotFound";
import Hi from "./Pages/Hi";
import Projects from "./Pages/Projects";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Experience from "./Pages/Experience";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hi />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
