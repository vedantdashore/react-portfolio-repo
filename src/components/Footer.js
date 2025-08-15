import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Vedant Dashore. All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="mailto:vdashore@nd.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/vedant-dashore" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/vedantdashore" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  );
};

export default Footer;
