import React from 'react';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';
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
          <p className="section-eyebrow">{'// contact'}</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-lead">
            Email is the easiest way to reach me. I'm happy to talk about internships, research, or anything on
            this page.
          </p>

          <div className="contact-grid">
            {channels.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact-item"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon className="contact-icon" />
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
