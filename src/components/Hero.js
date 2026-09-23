// src/components/Hero.js
import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Hero.css';
import headshot from '../assets/headshot.jpg';
import { profile } from '../data/resume';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-prompt mono reveal">
            <span className="prompt">$</span> whoami
          </p>

          <h1 className="hero-title reveal">{profile.name}</h1>

          <div className="hero-intro reveal">
            {profile.intro.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <dl className="hero-now mono reveal">
            {profile.now.map((row) => (
              <div key={row.key} className="now-row">
                <dt>{row.key}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-cta reveal">
            <a href="/resume.pdf" download="Vedant_Dashore_Resume.pdf" className="btn btn-primary">
              <FiDownload /> Resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <FiMail /> Email me
            </a>
            <div className="hero-socials">
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <figure className="hero-visual reveal">
          <div className="photo-window">
            <div className="window-bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="window-title mono">vedant.jpg</span>
            </div>
            <img src={headshot} alt="Vedant Dashore" width="800" height="1078" />
          </div>
          <figcaption className="photo-caption mono">{profile.location}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
