import React from 'react';
import './Education.css';
import { education } from '../data/resume';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// education'}</p>
          <h2 className="section-title">Education</h2>
        </header>

        <div className="edu-grid">
          {education.map((ed) => (
            <article key={ed.school} className="card card-hover edu-card reveal">
              <p className="edu-date mono">{ed.date}</p>
              <h3 className="edu-school">{ed.school}</h3>
              <p className="edu-degree">{ed.degree}</p>
              <p className="edu-detail">{ed.detail}</p>
              {ed.highlight && <p className="edu-highlight mono">{ed.highlight}</p>}
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
