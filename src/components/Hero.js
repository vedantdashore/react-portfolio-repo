// src/components/Hero.js
import { Typewriter } from 'react-simple-typewriter';
import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Hello, I’m Vedant 👋</h1>
          <h2 className="typing-text">
            I'm a{' '}
            <span className="highlight">
              <Typewriter
                words={['software developer', 'student', 'researcher']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="hero-description">
          I'm studying Computer Engineering with a minor in Engineering Corporate Practice as an Undergraduate student at the University of Notre Dame. <br />
          <br />
          I am moved by the idea of leveraging technology to tackle real-world challenges and create meaningful impact. With a strong interest in software development, artificial intelligence, and building scalable systems, I focus on driving innovation and efficiency in every project I undertake. Beyond technology, I am a dedicated mental health advocate committed to raising awareness and fostering supportive environments within academic and professional communities. I love turning complex problems into clean, scalable solutions.
          </p>
          <div className="resume-container">
            <a
              href="/resume.pdf"
              download
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="profile-glow" />
            <img src={profileImg} alt="Vedant" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;