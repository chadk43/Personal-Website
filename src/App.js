import classes from "./App.module.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Components/pages/AboutPage";
import ProjectsPage from "./Components/pages/ProjectsPage";
import ContactPage from "./Components/pages/ContactPage";
import Navigation from "./Components/Navbar/Navigation";
import Footer from "./Components/footer/footer";


function App() {
  
  return (
    
    <div className = {classes["container"]}>
      <div className={classes["footer-wrap"]}>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<AboutPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
