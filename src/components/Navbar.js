import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <header className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="navbar-name">Vedant Dashore</span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => handleNavClick('hero')}>Home</a>
          <a onClick={() => handleNavClick('projects')}>Projects</a>
          <a onClick={() => handleNavClick('education')}>Education</a>
          <a onClick={() => handleNavClick('contact')}>Contact</a>
          <div className="theme-toggle">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {menuOpen && <div className="menu-backdrop"></div>}
    </header>
  );
}

export default Navbar;
