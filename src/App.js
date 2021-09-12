import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="">
      <Navbar />
      <HashRouter basename="/">
        <Route path="/" exact component={Work} />
        {/* <Route path="/Contact" exact component={Contact} /> */}
        <Route path="/Projects" exact component={Projects} />
        {/* <Route path="/About" exact component={About} /> */}
        {/* <Route path="/Blogs" exact component={Blogs} /> */}
      </HashRouter>
    </div>
  );
}

export default App;
