/**
 * @author EKANAYAKA GMDP
 * This is my personal portfolio webapplication
 */

// stylesheets
import "./App.css";

// libraies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CONST from './constraints/constraints.json';

// components
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Portfolio from "./views/portfolio/Portfolio";
import Project from "./views/project/Project";
import NavBar from "./components/navbar/NavBar";

/**
 * This is the main react component, it helps to navigate throw components
 * @returns JSX
 */
function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor: CONST.colors.primary}}>
        <NavBar />
        <div>
          {/**
           *  Navigation Routers for switch
           **/}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/project" element={<Project />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
