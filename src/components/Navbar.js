// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          Vedant Dashore
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
          <li className="theme-switch">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <span className="slider round"></span>
          </label>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
