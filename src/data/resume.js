// Single source of truth for site content, compiled from the master resume
// and the latest resume (public/resume.pdf). Edit here to update the site.

export const profile = {
  name: 'Vedant Dashore',
  fullName: 'Vedant Deepak Dashore',
  email: 'vdashore@nd.edu',
  linkedin: 'https://www.linkedin.com/in/vedant-dashore',
  github: 'https://github.com/vedantdashore',
  internpilot: 'https://internpilot-prxl.onrender.com',
  location: 'Notre Dame, IN',
  intro: [
    "I'm a computer engineering student at Notre Dame (class of 2028), minoring in Engineering Corporate Practice and Data Science.",
    "Right now I'm building an agentic AI system at Notre Dame's UOES that pulls vendor and contract intake into one Snowflake database. This summer I interned on Aramco's cybersecurity GRC team in Houston, reviewing third-party software risk and building five Copilot Studio agents to cut down on manual tracking. I've also trained NLP models for content moderation, built InternPilot, an internship search agent, and done a few consulting projects through SIBC. Outside of class, I spend a lot of my time on mental health advocacy.",
  ],
  now: [
    { key: 'now', value: 'AI Sourcing & Systems Assistant, Notre Dame' },
    { key: 'prev', value: "GRC Intern, Aramco (summer '26)" },
    { key: 'into', value: 'security, ML, data' },
  ],
};

export const experience = [
  {
    role: 'AI Sourcing & Systems Assistant',
    org: 'University of Notre Dame – UOES',
    location: 'Notre Dame, IN',
    start: 'Oct 2026',
    end: 'Present',
    bullets: [
      'Building an agentic AI solution that automates vendor and contract intake into one unified database for 100+ vendors.',
      'Prototyped a unified vendor and contract data model in Snowflake, consolidating records from 3+ separate sources.',
      'Set up OpenAI Codex for AI-assisted coding and handle ad-hoc system requests, cutting script build time by 40%.',
    ],
    tags: ['Agentic AI', 'Snowflake', 'Data Modeling', 'OpenAI Codex'],
  },
  {
    role: 'POET Peer Educator',
    org: 'University of Notre Dame',
    location: 'Notre Dame, IN',
    start: 'Aug 2026',
    end: 'Present',
    bullets: [],
    tags: [],
  },
  {
    role: 'Cybersecurity Governance, Risk & Compliance (GRC) Intern',
    org: 'Aramco',
    location: 'Houston, TX',
    start: 'May 2026',
    end: 'Aug 2026',
    bullets: [
      'Conducted third-party risk management (TPRM) reviews and risk consultations for 15+ software products, assessing AI risk.',
      'Tracked compliance status for 20+ software and service requests with SMEs, supporting IAM and SACS alignment.',
      'Built 5 AI agents in Microsoft Copilot Studio, cutting manual GRC intake and follow-up tracking time by 30%.',
      'Designed integration architecture for an agentic AI HR cost-management tool, winning the NextGen Capstone (1 of 10).',
      'Automated SAP-to-Power BI data flows with Power Automate, cutting weekly manual effort from 10 hours to 45 minutes.',
    ],
    tags: ['TPRM', 'IAM', 'Copilot Studio', 'Power Automate', 'Power BI', 'SAP'],
  },
  {
    role: 'Calm Health AI Developer',
    org: 'McCloskey New Venture Competition',
    location: 'Notre Dame, IN',
    start: 'Feb 2026',
    end: 'Apr 2026',
    bullets: [
      'Worked with 4 teammates to build Calm Health AI, optimizing pharmacy transactions for 10k+ potential accounts.',
      'Built a financial model projecting 30% lower transaction latency via ML prescription validation, reaching the finals.',
      'Pitched a 15-slide investor deck covering financial projections, data security and research across 3 healthcare sectors.',
    ],
    tags: ['Machine Learning', 'HealthTech', 'Financial Modeling', 'Pitching'],
  },
  {
    role: 'Alumni Outreach Associate',
    org: 'ND Listens',
    location: 'Notre Dame, IN',
    start: 'Sep 2025',
    end: 'Aug 2026',
    bullets: [
      "Talked with 60+ alumni a week to strengthen the university's community network, sharing key initiatives and leading campus tours.",
      "Collected and analyzed feedback from 200+ alumni conversations to inform ND Listens' outreach strategy.",
    ],
    tags: ['Communication', 'Relationship Building', 'Feedback Analysis'],
  },
  {
    role: 'Software and Research Intern',
    org: 'Pi-Squared',
    location: 'South Bend, IN',
    start: 'Apr 2025',
    end: 'Sep 2025',
    bullets: [
      'Developed and tested 3 interactive math game modes teaching financial literacy and logical reasoning to students.',
      'Analyzed 100+ user feedback responses from students and educators to refine content difficulty, pacing and design.',
      'Partnered with the founder on social media strategy, increasing daily active users by 80% to 200 within 3 months.',
    ],
    tags: ['EdTech', 'Game Design', 'UX Research', 'Growth'],
  },
  {
    role: 'Student Fellow',
    org: 'IDEA Center Fellowship',
    location: 'South Bend, IN',
    start: 'Aug 2024',
    end: 'May 2025',
    bullets: [
      'Collaborated with Evergood Agency to develop 10 measurable ESG goals for Graver Technologies, aligned with UN SDG targets on water purification and industrial waste reduction.',
      "Researched energy efficiency, material reuse and water filtration, identifying a potential 25% improvement in Graver's ESG score.",
      "Authored and presented a 10-page strategic report to Graver's leadership on cost-effective pathways to carbon neutrality.",
    ],
    tags: ['ESG', 'Consulting', 'Sustainability'],
  },
  {
    role: 'Researcher and Tech Intern',
    org: 'Mutech Automation',
    location: 'Remote',
    start: 'Jul 2023',
    end: 'Sep 2023',
    bullets: [
      'Collaborated with a 5-member team to design responsive web interfaces using HTML, CSS and JavaScript.',
      'Researched Industry 4.0 automation, focusing on drone-based inspection and data visualization for manufacturing clients across energy, logistics and construction.',
      'Strengthened technical fluency in web development and IoT communication protocols.',
    ],
    tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'IoT'],
  },
];

export const projectCategories = ['All', 'AI & Data', 'Consulting & Venture', 'Engineering'];

export const projects = [
  {
    title: 'InternPilot',
    org: 'Personal project',
    category: 'AI & Data',
    start: '2026',
    end: 'Present',
    url: 'https://internpilot-prxl.onrender.com',
    summary: 'An AI agent that finds internships, tailors a resume for each one and drafts recruiter outreach.',
    bullets: [
      'Scans job boards (Simplify, Greenhouse, Lever, LinkedIn, Handshake) and scores each posting against your resume and preferences using embeddings and an LLM second opinion.',
      'Tailors a one-page resume and cover letter for each job, finds recruiters with alumni first, and drafts outreach and follow-ups.',
      'Puts every email and application in an approval queue before it goes out. The free public edition runs on Render, Neon Postgres and GitHub Actions.',
    ],
    tags: ['Agentic AI', 'FastAPI', 'Next.js', 'PostgreSQL', 'LangGraph'],
  },
  {
    title: 'Harmful-Content Classifier for Meta',
    org: 'Data Club · Data Analyst for Meta',
    category: 'AI & Data',
    start: 'Feb 2026',
    end: 'May 2026',
    summary: 'MentalBERT multilabel classifier detecting harmful content across 2.7M+ anonymous Whisper posts.',
    bullets: [
      'Built a MentalBERT multilabel NLP classifier to detect harmful content across 2.7M+ anonymous Whisper posts.',
      'Fine-tuned transformer models to 86.4% Micro F1 and 81.8% Macro F1 on multilabel harmful-content detection.',
      'Built a SetFit few-shot auto-labeling pipeline with regex and N-grams, labeling 1.5M+ posts across 5 harm categories.',
    ],
    tags: ['Python', 'Transformers', 'MentalBERT', 'SetFit', 'NLP'],
  },
  {
    title: 'Cuesta Partners Engagement',
    org: 'SIBC · Project Lead',
    category: 'Consulting & Venture',
    start: 'Jan 2026',
    end: 'Apr 2026',
    summary: 'Led a 10-member team advising a post-merger health-tech company on its data platform.',
    bullets: [
      'Led a 10-member Student International Business Council (SIBC) team advising a post-merger health-tech company.',
      'Evaluated 4 enterprise data platforms and recommended Microsoft Fabric with a 24-month roadmap and ROI analysis.',
      'Built a RICE framework prioritizing 5 initiatives affecting 10k+ clients and 5k employees, presented to the C-suite.',
    ],
    tags: ['Leadership', 'Data Platforms', 'Microsoft Fabric', 'Strategy'],
  },
  {
    title: 'Ernst & Young (EY) Engagement',
    org: 'SIBC · Technology Consultant',
    category: 'Consulting & Venture',
    start: 'Aug 2025',
    end: 'Dec 2025',
    summary: 'SAP S/4HANA, EAM and FSM roadmap for a 200+ franchise global manufacturer.',
    bullets: [
      'Assessed SAP S/4HANA for a 200+ franchise global manufacturer via SIBC, finding maintenance and visibility gaps.',
      'Built an 18-month Enterprise Asset Management (EAM) and Field Service Management (FSM) roadmap with KPIs.',
      'Presented a unified SAP EAM-FSM solution architecture projected to cut unplanned equipment downtime by 20%.',
    ],
    tags: ['SAP S/4HANA', 'EAM', 'FSM', 'Digital Transformation'],
  },
  {
    title: 'Teamworthy Ventures',
    org: 'Notre Dame Venture Capital',
    category: 'Consulting & Venture',
    start: 'Sep 2025',
    end: 'Dec 2025',
    summary: 'Market diligence and vertical SaaS sourcing across 3 sectors.',
    bullets: [
      'Conducted market diligence across 3 sectors, evaluating TAM, growth drivers and vertical SaaS investment opportunities.',
      'Analyzed PitchBook and IBISWorld datasets to identify 10+ market inefficiencies supporting venture investment theses.',
      'Developed and presented a 3-company sourcing deck, synthesizing industry research into actionable investment insights.',
    ],
    tags: ['Venture Capital', 'PitchBook', 'IBISWorld', 'SaaS'],
  },
  {
    title: 'L.E.K. Consulting: Nestlé',
    org: 'Student International Business Council',
    category: 'Consulting & Venture',
    start: 'Aug 2025',
    end: 'Dec 2025',
    summary: 'Consumer-trend research for new organic-food products.',
    bullets: [
      'Conducted market research and consumer trend analysis to identify new products in the organic foods industry for Nestlé.',
      'Designed data-driven product ideas and delivered go-to-market recommendations based on competitive benchmarking.',
    ],
    tags: ['Market Research', 'Benchmarking', 'CPG'],
  },
  {
    title: 'Data Science for Engineers',
    org: 'Notre Dame in London · Student Researcher',
    category: 'AI & Data',
    start: 'Jul 2025',
    end: 'Aug 2025',
    summary: 'Python ML pipelines, PCA and fairness analysis on 10k+ record datasets.',
    bullets: [
      'Processed 10k+ record datasets with Python (Pandas, NumPy), generating insights via statistical analysis and charts.',
      'Built machine learning classification models with PCA on 10k+ records, optimizing feature selection and accuracy.',
      'Performed bias detection and fairness analysis on ML models, using Git/GitHub version control for reproducibility.',
    ],
    tags: ['Python', 'Pandas', 'PCA', 'Classification', 'Responsible AI'],
  },
  {
    title: 'Yelo Market Analysis',
    org: 'Notre Dame Venture Capital',
    category: 'Consulting & Venture',
    start: 'Oct 2024',
    end: 'Jan 2025',
    summary: 'Campus viability study for a college rideshare startup across 10+ campuses.',
    bullets: [
      'Selected from 200+ applicants to evaluate campus viability for Yelo, a college rideshare startup.',
      'Assessed social-scene dynamics, transportation access and Greek life influence across 10+ campuses with 10,000+ potential users.',
      'Surveyed 200+ students (45% reported off-campus safety concerns; 60% prioritized secure routes) and presented to the expansion team.',
    ],
    tags: ['Startups', 'User Research', 'Market Sizing'],
  },
  {
    title: 'Systems Programming',
    org: 'University of Notre Dame',
    category: 'Engineering',
    start: 'Aug 2025',
    end: 'Dec 2025',
    summary: 'Low-level C, Unix system calls, multithreading and TCP client-server apps.',
    bullets: [
      'Built 10+ low-level C programs using Unix system calls, managing heap/stack memory, pointers, files and process states.',
      'Implemented multithreaded and multiprocess designs with pthreads and fork, analyzing synchronization and performance tradeoffs.',
      'Developed TCP client-server applications with socket APIs, handling I/O, buffering and concurrent connections.',
      'Applied Unix internals (inodes, permissions, IPC) alongside shell scripting and text-processing tools.',
    ],
    tags: ['C', 'Unix', 'pthreads', 'Sockets', 'Bash'],
  },
  {
    title: "Conway's Game of Life",
    org: 'Fundamentals of Computing',
    category: 'Engineering',
    start: 'Jan 2025',
    end: 'May 2025',
    summary: 'Real-time terminal simulation in C with custom scenes and game modes.',
    bullets: [
      'Engineered the simulation in C with dynamic memory allocation, modular architecture and pointer manipulation for 1,000+ cell states per frame.',
      'Used Makefile automation across 5+ source modules, streamlining builds and cutting error frequency by 25%.',
      'Designed a terminal UI with interactive configuration, pausing, reset and 3 custom starting scenes.',
    ],
    tags: ['C', 'Makefile', 'Terminal UI'],
  },
  {
    title: 'Air-Quality Sensor Housing',
    org: 'Engineering Design',
    category: 'Engineering',
    start: 'Aug 2024',
    end: 'Dec 2024',
    summary: 'Servo-actuated Arduino enclosure for monitoring South Bend air quality.',
    bullets: [
      'Designed and prototyped a sensor housing to monitor outdoor air quality around South Bend, including wildfire pollution.',
      'Modeled 5 housing iterations in SolidWorks with a servo-driven open/close mechanism controlled by an Arduino.',
      'Tested and iterated through two design phases on form, fit and function to improve durability and alignment.',
    ],
    tags: ['SolidWorks', 'Arduino', 'Prototyping'],
  },
];

export const leadership = [
  {
    role: 'Founder',
    org: "Men's Minds Matter",
    location: 'Ras Tanura, Saudi Arabia',
    start: 'Dec 2022',
    end: 'Aug 2024',
    description:
      "Reached 250+ men through surveys and one-on-one conversations to open dialogue on men's mental health, ran an Instagram campaign with 2,000+ engagements, and delivered workshops for Aramco community services, Jeddah's directorial team and the Tamimi Global workforce.",
  },
  {
    role: 'Mentee',
    org: "President's Circle Mentorship Programme",
    location: 'Remote & London, England',
    start: 'Apr 2025',
    end: 'Sep 2025',
    description:
      'Selected from 500+ applicants. Mentored by Chris Whitman, CFO of Convergence Value Partners, across 10+ sessions on corporate finance, portfolio management, startup valuation and market risk.',
  },
  {
    role: 'Member',
    org: 'ELITE Engineers · NDVC · ND Investment Club',
    location: 'Notre Dame, IN',
    start: 'Aug 2024',
    end: 'Present',
    description:
      'Active member of engineering and investment communities on campus, contributing to venture diligence projects and investment discussions.',
  },
];

export const education = [
  {
    school: 'University of Notre Dame',
    location: 'Notre Dame, IN',
    degree: 'B.S. Computer Engineering',
    detail: 'Minors in Engineering Corporate Practice & Data Science',
    date: 'Expected May 2028',
    items: ['Data Structures & Algorithms', 'Systems Programming', 'Fundamentals of Computing', 'Engineering Design'],
  },
  {
    school: 'Data Science for Engineers',
    location: 'London, England',
    degree: 'Notre Dame Summer Programme',
    detail: 'Machine learning, data science & Victorian history',
    date: 'Jul 2025 – Aug 2025',
    highlight: 'Full merit scholarship',
    items: ['Python ML pipelines', 'PCA & classification', 'Bias & fairness analysis'],
  },
  {
    school: 'The International School Bangalore',
    location: 'Bangalore, India',
    degree: 'International Baccalaureate Diploma',
    detail: 'Higher Level: Math AA, Physics, Chemistry',
    date: 'Graduated 2024',
    items: ['Math AA HL', 'Physics HL', 'Chemistry HL', 'Economics SL', 'English Lang & Lit SL', 'Spanish ab initio SL'],
  },
];

export const certifications = [
  {
    name: 'AI Scholars Bootcamp',
    issuer: 'Veritas AI',
    date: 'Jun 2023',
    note: 'Summer 2023 cohort',
  },
  {
    name: 'Programming with Python',
    issuer: 'Internshala Trainings',
    date: 'Aug 2021',
    note: 'Six-week course: OOP, SQLite, PyQt GUIs',
    url: 'https://trainings.internshala.com/verify_certificate',
  },
];

export const honors = [
  {
    name: 'Full merit scholarship',
    issuer: 'Data Science for Engineers, London',
    date: '2025',
  },
  {
    name: 'NextGen Capstone winner (1 of 10 teams)',
    issuer: 'Aramco',
    date: '2026',
    note: 'Integration architecture for an agentic AI HR cost-management tool',
  },
  {
    name: 'Finalist, McCloskey New Venture Competition',
    issuer: 'Notre Dame IDEA Center',
    date: '2026',
  },
  {
    name: 'Certificates of Appreciation (2)',
    issuer: 'Saudi Aramco NA Community Services',
    date: 'Dec 2022',
    note: "For men's mental health awareness sessions with employees and contractors",
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'C', 'Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Bash', 'Linux', 'Git/GitHub', 'VS Code', 'Google Colab', 'Makefile'] },
  { group: 'Data Science & ML', items: ['Pandas', 'NumPy', 'Matplotlib', 'Transformers (MentalBERT)', 'SetFit', 'Natural Language Processing (NLP)'] },
  { group: 'Cybersecurity & GRC', items: ['Third-Party Risk Management (TPRM)', 'Identity & Access Management (IAM)', 'Risk Assessment'] },
  { group: 'AI & Automation', items: ['Copilot Studio', 'Power Automate', 'Power BI', 'SharePoint', 'SAP', 'Snowflake', 'Agentic AI', 'OpenAI Codex'] },
  { group: 'Business Tools', items: ['Excel', 'Microsoft 365', 'PitchBook', 'IBISWorld', 'Financial Modeling'] },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Proficient' },
  { name: 'Spanish', level: 'Basic' },
  { name: 'Gujarati', level: 'Limited' },
];
