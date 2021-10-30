import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import NotFound from "./Pages/NotFound";
import React from "react";
import Hi from "./Pages/Hi";
import Projects from "./Pages/Projects";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HashRouter basename="/">
        <section>
          <Switch>
            <Route path="/" exact component={Hi} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
