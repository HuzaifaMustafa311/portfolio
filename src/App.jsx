import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/skills'
import Contact from './components/Contact'
import Myresume from './components/Myresume'
import ScrollToTop from "./components/ScrollToTop";


function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Myresume />
        <Contact />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;