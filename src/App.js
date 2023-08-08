import React from 'react';

import './App.scss';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
