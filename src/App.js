import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import NotFound from "./Pages/NotFound";
import Hi from "./Pages/Hi";
import Projects from "./Pages/Projects";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hi />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
