// src/App.js

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <ParticlesBackground />
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
