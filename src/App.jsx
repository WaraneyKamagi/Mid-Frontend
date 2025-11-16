import { useState } from 'react'
import './App.css'

import Hero from "./Components/Hero";
import About from "./Components/About";
import Hobi from "./Components/Hobi";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from './Components/Projects.jsx';

const App = () => {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Hobi />
      <Skills />
      <Contact />
      <Projects />
    </div>
  );
};

export default App;

