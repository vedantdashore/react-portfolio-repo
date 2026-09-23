import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import './Experience.css';
import { experience } from '../data/resume';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// 01. experience'}</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            Internships and roles across cybersecurity, AI automation, edtech and sustainability consulting.
          </p>
        </header>

        <ol className="timeline">
          {experience.map((job) => {
            const current = job.end === 'Present';
            return (
              <li key={`${job.org}-${job.start}`} className="timeline-item reveal">
                <span className={`timeline-node ${current ? 'current' : ''}`} aria-hidden="true" />
                <article className="card card-hover job-card">
                  <div className="job-head">
                    <div>
                      <h3 className="job-role">{job.role}</h3>
                      <p className="job-org">
                        <span className="gradient-text">{job.org}</span>
                        <span className="job-loc">
                          <FiMapPin /> {job.location}
                        </span>
                      </p>
                    </div>
                    <span className={`job-date mono ${current ? 'current' : ''}`}>
                      {job.start} — {job.end}
                    </span>
                  </div>
                  <ul className="job-bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <ul className="chip-list">
                    {job.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
