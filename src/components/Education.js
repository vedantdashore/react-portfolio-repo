import React from 'react';
import './Education.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { education, certifications, honors } from '../data/resume';

function CredentialList({ title, items }) {
  return (
    <div className="cred-block reveal">
      <h3 className="cred-title mono">{title}</h3>
      <ul className="cred-list">
        {items.map((c) => (
          <li key={c.name} className="cred-row">
            <div className="cred-main">
              <span className="cred-name">
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="cred-link">
                    {c.name} <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  c.name
                )}
              </span>
              <span className="cred-issuer">{c.issuer}</span>
              {c.note && <span className="cred-note">{c.note}</span>}
            </div>
            <span className="cred-date mono">{c.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// education'}</p>
          <h2 className="section-title">Education &amp; certifications</h2>
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

        <div className="cred-grid">
          <CredentialList title="certifications" items={certifications} />
          <CredentialList title="honors & awards" items={honors} />
        </div>
      </div>
    </section>
  );
}

export default Education;
