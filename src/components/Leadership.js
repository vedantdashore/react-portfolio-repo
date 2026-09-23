import React from 'react';
import './Leadership.css';
import { leadership } from '../data/resume';

function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// leadership'}</p>
          <h2 className="section-title">Leadership &amp; involvement</h2>
        </header>

        <div className="leader-grid">
          {leadership.map((item) => (
            <article key={item.org} className="card card-hover leader-card reveal">
              <p className="leader-date mono">
                {item.start} – {item.end}
              </p>
              <h3 className="leader-role">{item.role}</h3>
              <p className="leader-org">{item.org}</p>
              <p className="leader-desc">{item.description}</p>
              <p className="leader-loc mono">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
