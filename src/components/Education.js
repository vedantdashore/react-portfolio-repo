import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-cards-wrapper">
        <div className="education-card">
          <h3>The International School Bangalore (TISB)</h3>
          <p>International Baccalaureate</p>
          <ul>
            <li>Math AA HL</li>
            <li>Physics HL</li>
            <li>Chemistry HL</li>
            <li>Economics SL</li>
            <li>English Lang and Lit SL</li>
            <li>Spanish AB Initio SL</li>
          </ul>
        </div>

        {/* Glowing Arrow */}
        <div className="education-arrow">→</div>

        <div className="education-card">
          <h3>University of Notre Dame</h3>
          <p>B.Sc. in Computer Engineering (Ongoing)</p>
          <ul>
            <li>Minor in Engineering Corporate Practice</li>
            <li>AI and ML</li>
            <li>Systems Programming</li>
            <li>Software Engineering</li>
            <li>Ethics and Technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
