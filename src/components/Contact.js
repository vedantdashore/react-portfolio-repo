import React from 'react';
import { FiMail, FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';
import { profile } from '../data/resume';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: FiMail },
  { label: 'LinkedIn', value: 'in/vedant-dashore', href: profile.linkedin, Icon: FaLinkedinIn, external: true },
  { label: 'GitHub', value: 'vedantdashore', href: profile.github, Icon: FaGithub, external: true },
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card contact-panel reveal">
          <p className="section-eyebrow">{'// 06. contact'}</p>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">together</span>
          </h2>
          <p className="contact-lead">
            I'm always open to conversations about internships, research, and projects in cybersecurity, AI and
            data. The best way to reach me is email.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiMail /> Say hello
            </a>
            <a href="/resume.pdf" download="Vedant_Dashore_Resume.pdf" className="btn btn-ghost">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="contact-grid">
            {channels.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact-item"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-icon">
                  <Icon />
                </span>
                <span className="contact-text">
                  <span className="contact-label mono">{label}</span>
                  <span className="contact-value">{value}</span>
                </span>
                <FiArrowUpRight className="contact-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
