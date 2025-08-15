import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p className="contact-item">
          <FaEnvelope className="contact-icon" />
          <strong>Email:</strong> <a href="mailto:vdashore@nd.edu">vdashore@nd.edu</a>
        </p>
        <p className="contact-item">
          <FaLinkedin className="contact-icon" />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vedant-dashore" target="_blank" rel="noopener noreferrer">Vedant Dashore</a>
        </p>
        <p className="contact-item">
          <FaGithub className="contact-icon" />
          <strong>GitHub:</strong> <a href="https://github.com/vedantdashore" target="_blank" rel="noopener noreferrer">Vedant Github</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
