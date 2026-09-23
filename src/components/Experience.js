import React from 'react';
import './Experience.css';
import { experience } from '../data/resume';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// experience'}</p>
          <h2 className="section-title">Experience</h2>
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
                        {job.org} <span className="job-loc">· {job.location}</span>
                      </p>
                    </div>
                    <span className={`job-date mono ${current ? 'current' : ''}`}>
                      {job.start} – {job.end}
                    </span>
                  </div>
                  {job.bullets.length > 0 && (
                    <ul className="job-bullets">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {job.tags.length > 0 && (
                    <ul className="chip-list">
                      {job.tags.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
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
