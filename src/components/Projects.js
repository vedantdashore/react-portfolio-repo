import React, { useEffect, useState } from 'react';
import { FiX, FiArrowUpRight, FiFolder } from 'react-icons/fi';
import './Projects.css';
import { projects, projectCategories } from '../data/resume';

function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// 02. projects'}</p>
          <h2 className="section-title">Things I've built &amp; advised on</h2>
          <p className="section-subtitle">
            Machine learning, consulting engagements, venture diligence and systems work. Click a card for details.
          </p>
        </header>

        <div className="filter-bar reveal" role="tablist" aria-label="Filter projects">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`filter-btn mono ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              <span className="filter-count">
                {cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((p) => (
            <button
              key={p.title}
              type="button"
              className="project-card card card-hover reveal"
              onClick={() => setSelected(p)}
            >
              <div className="project-top">
                <FiFolder className="project-folder" />
                <span className="project-metric mono">{p.metric}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-org">{p.org}</p>
              <p className="project-summary">{p.summary}</p>
              <div className="project-foot">
                <span className="project-date mono">
                  {p.start} — {p.end}
                </span>
                <FiArrowUpRight className="project-arrow" />
              </div>
              <ul className="chip-list">
                {p.tags.slice(0, 4).map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="icon-btn modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <FiX />
            </button>
            <p className="section-eyebrow">{selected.category}</p>
            <h3 id="project-modal-title" className="modal-title">
              {selected.title}
            </h3>
            <p className="modal-meta mono">
              {selected.org} · {selected.start} — {selected.end}
            </p>
            <ul className="modal-bullets">
              {selected.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <ul className="chip-list">
              {selected.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
