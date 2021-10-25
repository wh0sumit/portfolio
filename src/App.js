import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import NotFound from "./Pages/NotFound";
import React, { Suspense } from "react";
const Hi = React.lazy(() => import("./Pages/Hi"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const About = React.lazy(() => import("./Pages/About.js"));
const Contact = React.lazy(() => import("./Pages/Contact.js"));

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HashRouter basename="/">
        <Suspense fallback={<h1>Loading</h1>}>
          <section>
            <Switch>
              <Route path="/" exact component={Hi} />
              <Route path="/Projects" exact component={Projects} />
              <Route path="/About" exact component={About} />
              <Route path="/Contact" exact component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </Suspense>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
