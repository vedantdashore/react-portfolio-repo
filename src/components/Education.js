import React from 'react';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import './Education.css';
import { education } from '../data/resume';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// 04. education'}</p>
          <h2 className="section-title">Education</h2>
        </header>

        <div className="edu-grid">
          {education.map((ed, i) => (
            <article key={ed.school} className={`card card-hover edu-card reveal ${i === 0 ? 'primary' : ''}`}>
              <div className="edu-head">
                <FiBookOpen className="edu-icon" />
                <span className="edu-date mono">{ed.date}</span>
              </div>
              <h3 className="edu-school">{ed.school}</h3>
              <p className="edu-degree">{ed.degree}</p>
              <p className="edu-detail">{ed.detail}</p>
              <p className="edu-highlight mono">
                <FiAward /> {ed.highlight}
              </p>
              <ul className="chip-list">
                {ed.items.map((c) => (
                  <li key={c} className="chip">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="edu-loc mono">{ed.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
