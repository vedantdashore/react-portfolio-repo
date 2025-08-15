
import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Pi-Squared Internship",
    description: "Gamifying math with an edtech startup.",
    tags: ["Excel", "User Interviews", "Game Design", "UI/UX"],
    status: "Completed",
    start: "May 2025",
    end: "Aug 2025",
    details: "Interned at Pi-Squared, creators of the 'Wordle for math' app. Developed educational game content, refined UX features, and collected user feedback to improve the product, working in constant collaboration with David Carr"
  },
  {
    title: "Notre Dame London Programme",
    description: "Studied Victorian History, Data Science and Machine Learning in a summer abroad.",
    tags: ["Python", "Neural Networks", "Google Colab", "Classification"],
    start: "July 2025",
    end: "Aug 2025",
    details: "Studied Victorian history and data science. Explored housing and reform through site visits, and practiced machine learning techniques in Python using Google Colab. Processed and analyzed datasets with over 10,000 records, applying dimensionality reduction and classification algorithms. Completed training on ethical considerations in machine learning, including bias detection and responsible AI practices in companies."
  },
  {
    title: "President's Circle Mentorship",
    description: "Professional mentorship and global market insights.",
    tags: ["Mentorship", "Leadership", "Economics", "Fintech"],
    status: "InProgress",
    start: "July 2025",
    end: "Present",
    details: "Connected with alumni mentor Chris Whitman CFO of Convergence Value Partners with decades of experience with Deustche Bank in London. Discussed leadership, finance, economics and career goals. Learned an immense amount abot the fintech space."
  },
  {
    title: "Mental Health Initiative",
    description: "Workshops and outreach on emotional well-being especially of Men after COVID.",
    tags: ["Community Impact", "Social Media", "Research", "Leadership", "Public-Speaking"],
    status: "Completed",
    start: "Dec 2022",
    end: "Aug 2024",
    details: "Founded initiative to promote mental health among Saudi Aramco employees. Reached 250+ men through workshops, surveys, and social media campaign. Increased awareness and advocated for men being able to showcase their feelings and emotions."
  },
  {
    title: "IDEA Center Fellowship",
    description: "Sustainability strategy for Graver Technologies.",
    tags: ["ESG", "Business", "Consulting", "Fund-Management"],
    status: "InProgress",
    start: "Aug 2024",
    end: "Present",
    details: "Worked with the IDEA Center on a sustainability consulting project focused on strategic solutions for industrial clients."
  },
  {
    title: "Yelo Project Associate",
    description: "Startup market research for college rideshare app 'Yelo.'",
    tags: ["Research", "Startups", "Collaboration", "Problem-Solving"],
    status: "Completed",
    start: "Oct 2024",
    end: "Jan 2025",
    details: "Conducted market analysis and strategic evaluation for a college rideshare startup aimed at optimizing local travel. Assessed key factors such as social scene dynamics, transportation accessibility, and Greek life influence to identify market gaps and opportunities. Presented findings and strategic recommendations to the Yelo team, contributing to their expansion strategy."
  },
  {
    title: "Game of Life in C",
    description: "Systems programming with cellular automatation.",
    tags: ["C", "Terminal", "VSC"],
    status: "Completed",
    start: "Apr 2025",
    end: "May 2025",
    details: "Built Conway’s Game of Life in C with advanced pointer logic, rendering custom start scenes and an endless mode terminal display."
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, idx) => (
          <div key={idx} className="project-card" onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="dates">{project.start} – {project.end}</div>
            <div className={`status ${project.status}`}>{project.status}</div>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p><strong>{selectedProject.start} – {selectedProject.end}</strong></p>
            <p><strong>Status:</strong> {selectedProject.status}</p>
            <p>{selectedProject.details}</p>
            <div className="tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;