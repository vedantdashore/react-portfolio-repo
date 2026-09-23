import React from 'react';
import { FiTerminal, FiCpu, FiShield, FiZap, FiTool, FiBarChart2, FiGlobe } from 'react-icons/fi';
import './Skills.css';
import { skills, languages } from '../data/resume';

const icons = [FiTerminal, FiCpu, FiShield, FiZap, FiTool, FiBarChart2];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">{'// 05. skills'}</p>
          <h2 className="section-title">Tech stack &amp; toolkit</h2>
        </header>

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={group.group} className="card skill-card reveal">
                <h3 className="skill-group">
                  <Icon /> {group.group}
                </h3>
                <ul className="skill-list">
                  {group.items.map((s) => (
                    <li key={s} className="skill-item mono">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="card lang-bar reveal">
          <span className="lang-label mono">
            <FiGlobe /> languages
          </span>
          {languages.map((l) => (
            <span key={l.name} className="lang">
              <strong>{l.name}</strong> <span className="lang-level">{l.level}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
