import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import './Navbar.css';

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link for whichever section is in the middle of the viewport.
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isDark = theme === 'dark';

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner container" aria-label="Primary">
        <a href="#hero" className="brand mono" onClick={() => setMenuOpen(false)}>
          <span className="brand-prompt">~/</span>vedant<span className="brand-cursor">_</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-index mono">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Vedant_Dashore_Resume.pdf"
            className="btn btn-ghost nav-resume"
            onClick={() => setMenuOpen(false)}
          >
            <FiDownload /> Resume
          </a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Navbar;
