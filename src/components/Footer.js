import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';
import { profile } from '../data/resume';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy mono">
          © {new Date().getFullYear()} {profile.name} · built with React
        </p>
        <div className="footer-icons">
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
          <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="icon-btn" href="#hero" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
