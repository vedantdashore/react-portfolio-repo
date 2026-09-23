import React from 'react';
import { FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import './Leadership.css';
import { leadership } from '../data/resume';

const icons = [FiHeart, FiTrendingUp, FiUsers];

function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// 03. leadership'}</p>
          <h2 className="section-title">Leadership &amp; community</h2>
          <p className="section-subtitle">
            Beyond tech: mental health advocacy, mentorship and campus communities.
          </p>
        </header>

        <div className="leader-grid">
          {leadership.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={item.org} className="card card-hover leader-card reveal">
                <div className="leader-icon">
                  <Icon />
                </div>
                <p className="leader-date mono">
                  {item.start} — {item.end}
                </p>
                <h3 className="leader-role">{item.role}</h3>
                <p className="leader-org">{item.org}</p>
                <p className="leader-desc">{item.description}</p>
                <p className="leader-loc mono">{item.location}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
