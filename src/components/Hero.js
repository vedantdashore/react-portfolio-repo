// src/components/Hero.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FiDownload, FiArrowRight, FiMail, FiMapPin, FiShield, FiCpu } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Hero.css';
import headshot from '../assets/headshot.jpg';
import { profile } from '../data/resume';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-badge mono reveal">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.tagline}
          </p>

          <h1 className="hero-title reveal">
            Hi, I'm <span className="gradient-text">Vedant Dashore</span>
          </h1>

          <p className="hero-typing mono reveal" aria-label={`Working on ${profile.roles.join(', ')}`}>
            <span className="prompt">$</span> focus --on{' '}
            <span className="typed">
              <Typewriter
                words={profile.roles}
                loop={0}
                cursor
                cursorStyle="▍"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1600}
              />
            </span>
          </p>

          <p className="hero-summary reveal">{profile.summary}</p>

          <div className="hero-cta reveal">
            <a href="/resume.pdf" download="Vedant_Dashore_Resume.pdf" className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch <FiArrowRight />
            </a>
            <div className="hero-socials">
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          <dl className="hero-stats reveal">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <dt className="stat-label">{s.label}</dt>
                <dd className="stat-value mono">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual reveal">
          <div className="photo-window card">
            <div className="window-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="window-title mono">vedant.jpg</span>
            </div>
            <div className="photo-frame">
              <img src={headshot} alt="Headshot of Vedant Dashore" width="800" height="1078" />
            </div>
            <div className="window-footer mono">
              <FiMapPin /> {profile.location}
              <span className="status-ok">● available</span>
            </div>
          </div>

          <div className="float-badge badge-a card mono">
            <FiShield /> GRC @ Aramco
          </div>
          <div className="float-badge badge-b card mono">
            <FiCpu /> ML · NLP · AI Agents
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
