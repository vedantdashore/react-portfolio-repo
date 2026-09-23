// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VantaBackground from './components/VantaBackground';
import useReveal from './hooks/useReveal';
import './App.css';

// index.html sets data-theme before React mounts (saved choice or system preference).
const initialTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

function App() {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme]);

  useReveal();

  return (
    <div className="app">
      <VantaBackground theme={theme} />
      <div className="bg-overlay" aria-hidden="true" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Experience />
              <Projects />
              <Leadership />
              <Education />
              <Skills />
              <Contact />
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
