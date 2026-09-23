// Single source of truth for site content, compiled from the master resume
// and the latest resume (public/resume.pdf). Edit here to update the site.

export const profile = {
  name: 'Vedant Dashore',
  fullName: 'Vedant Deepak Dashore',
  email: 'vdashore@nd.edu',
  linkedin: 'https://www.linkedin.com/in/vedant-dashore',
  github: 'https://github.com/vedantdashore',
  location: 'Notre Dame, IN',
  tagline: "Computer Engineering @ Notre Dame '28",
  roles: [
    'cybersecurity & GRC',
    'AI automation',
    'machine learning',
    'data-driven strategy',
  ],
  summary:
    "I'm a Computer Engineering student at the University of Notre Dame, minoring in Engineering Corporate Practice and Data Science. I work where technology meets business: securing enterprise systems, building AI agents that remove manual work, and training models that make platforms safer. I'm also a mental health advocate who cares about building supportive teams and communities.",
  stats: [
    { value: '3.63', label: 'GPA' },
    { value: '5', label: 'AI agents shipped' },
    { value: '2.7M+', label: 'posts classified' },
    { value: '86.4%', label: 'micro F1 score' },
  ],
};

export const experience = [
  {
    role: 'Cybersecurity, Governance, Risk & Compliance (GRC) Intern',
    org: 'Aramco',
    location: 'Houston, TX',
    start: 'May 2026',
    end: 'Aug 2026',
    bullets: [
      'Conducted risk consultations and third-party risk questionnaire reviews for 15+ software products, assessing AI-specific exposure.',
      'Tracked compliance and reassessment status for 20+ software/service requests across the enterprise Service Catalog with SMEs.',
      'Supported governance including IAM and SACS standards alignment, aiding audit and control-effectiveness reporting.',
      'Built 5 AI automation agents in Microsoft Copilot Studio, cutting manual GRC intake and follow-up tracking by 30%.',
    ],
    tags: ['GRC', 'Third-Party Risk', 'IAM', 'Copilot Studio', 'AI Agents'],
  },
  {
    role: 'Alumni Outreach Associate',
    org: 'ND Listens',
    location: 'Notre Dame, IN',
    start: 'Sep 2025',
    end: 'Present',
    bullets: [
      "Engage with 60+ alumni weekly to strengthen the university's community network, communicating key initiatives and leading campus tours.",
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
      'Developed and tested 3 interactive math game modes focused on financial literacy and logical reasoning for students.',
      'Analyzed 100+ pieces of user feedback from university students and educators to refine content difficulty, pacing and game design.',
      'Worked with the founder on social media strategy, growing daily users by 80% to 200 within 3 months.',
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
    tags: ['Web Dev', 'IoT', 'Industry 4.0'],
  },
  {
    role: 'IT & Cybersecurity Intern',
    org: 'SRACO',
    location: 'Dammam, Saudi Arabia',
    start: 'Dec 2022',
    end: 'Feb 2023',
    bullets: [
      'Monitored 200+ employee profiles and supported data-flow audits for compliance.',
      'Maintained and secured network infrastructure (firewalls, NAS/SAN) using TLS/SSL encryption protocols.',
      'Applied data encryption, classification, access control and MFA to strengthen digital infrastructure for 2,500+ employees across 3 business units.',
    ],
    tags: ['Network Security', 'Access Control', 'Compliance'],
  },
];

export const projectCategories = ['All', 'AI & Data', 'Consulting & Venture', 'Engineering'];

export const projects = [
  {
    title: 'Harmful-Content Classifier for Meta',
    org: 'Data Club',
    category: 'AI & Data',
    start: 'Feb 2026',
    end: 'May 2026',
    summary: 'MentalBERT multilabel classifier detecting harmful content across 2.7M+ anonymous Whisper posts.',
    metric: '86.4% Micro F1',
    bullets: [
      'Developed a MentalBERT-based multilabel classifier to detect harmful content across 2.7M+ anonymous posts on Whisper.',
      'Fine-tuned transformer models to reach 86.4% Micro F1 and 81.8% Macro F1 on multilabel harmful-content detection.',
      'Designed automated text-processing systems using SetFit, regex and N-gram analysis for moderation across Meta platforms.',
    ],
    tags: ['Python', 'Transformers', 'MentalBERT', 'SetFit', 'NLP'],
  },
  {
    title: 'Calm Health AI',
    org: 'McCloskey New Venture Competition',
    category: 'AI & Data',
    start: 'Feb 2026',
    end: 'Apr 2026',
    summary: 'AI-driven pharmacy transaction platform for 10k+ potential accounts. Reached the finals.',
    metric: 'Finalist',
    bullets: [
      'Collaborated with 4 teammates to develop Calm Health AI to optimize pharmacy transactions for 10k+ potential accounts.',
      'Presented a 15-slide investor pitch deck covering financials and data security, with research across 3 healthcare sectors.',
      'Built a financial model projecting 30% lower transaction latency via ML-based prescription validation, reaching the finals.',
    ],
    tags: ['Machine Learning', 'HealthTech', 'Financial Modeling', 'Pitching'],
  },
  {
    title: 'Cuesta Partners Engagement',
    org: 'Student International Business Council',
    category: 'Consulting & Venture',
    start: 'Jan 2026',
    end: 'Apr 2026',
    summary: 'Led a 10-member team advising a post-merger health-tech company on data integrity.',
    metric: 'Project Lead',
    bullets: [
      'Led a 10-member consulting team advising a post-merger health-tech company on data integrity and operational challenges.',
      'Evaluated 4 enterprise data platforms, recommending Microsoft Fabric and a 24-month implementation roadmap with ROI analysis.',
      'Built a RICE prioritization framework for 5 strategic initiatives affecting 10k+ clients and 5k employees, presented to the C-suite.',
    ],
    tags: ['Leadership', 'Data Platforms', 'Microsoft Fabric', 'Strategy'],
  },
  {
    title: 'EY Tech Travel Team',
    org: 'Student International Business Council',
    category: 'Consulting & Venture',
    start: 'Aug 2025',
    end: 'Dec 2025',
    summary: 'SAP S/4HANA, EAM and FSM transformation roadmap for a global manufacturer.',
    metric: '-20% downtime',
    bullets: [
      'Assessed SAP S/4HANA, EAM and FSM technology for a global manufacturer, identifying gaps in maintenance, visibility and operations.',
      'Designed an 18-month transformation map for 200+ franchises covering integration strategy and KPI-driven deployment.',
      'Presented a unified SAP EAM-FSM ecosystem projected to reduce unplanned downtime by 20%.',
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
    metric: '10+ inefficiencies',
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
    metric: 'Go-to-market',
    bullets: [
      'Conducted market research and consumer trend analysis to identify new products in the organic foods industry for Nestlé.',
      'Designed data-driven product ideas and delivered go-to-market recommendations based on competitive benchmarking.',
    ],
    tags: ['Market Research', 'Benchmarking', 'CPG'],
  },
  {
    title: 'Data Science for Engineers',
    org: 'Notre Dame in London',
    category: 'AI & Data',
    start: 'Jul 2025',
    end: 'Aug 2025',
    summary: 'Python ML pipelines, PCA and fairness analysis on 10k+ record datasets.',
    metric: '10k+ records',
    bullets: [
      'Processed 10k+ record datasets with Python data science pipelines, generating insights through statistical analysis and visuals.',
      'Built ML models using PCA and classification algorithms, optimizing feature selection and predictive accuracy.',
      'Performed bias detection and fairness analysis using Git/GitHub workflows for reproducibility and collaboration.',
      'Studied Victorian history (housing, poverty, reform) through site visits and archival analysis.',
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
    metric: '200+ students surveyed',
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
    metric: '10+ C programs',
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
    metric: '1,000+ cells / frame',
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
    metric: '5 prototypes',
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
    highlight: 'GPA 3.63',
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
    highlight: 'IB Diploma',
    items: ['Math AA HL', 'Physics HL', 'Chemistry HL', 'Economics SL', 'English Lang & Lit SL', 'Spanish ab initio SL'],
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS', 'Bash', 'Linux', 'Git/GitHub'] },
  { group: 'AI & Machine Learning', items: ['Transformers', 'MentalBERT', 'SetFit', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'PCA', 'Classification', 'Regression', 'Bias Detection'] },
  { group: 'Cybersecurity & GRC', items: ['Risk Assessment', 'Third-Party Risk', 'IAM', 'Compliance Audits', 'Access Control', 'TLS/SSL', 'MFA'] },
  { group: 'AI Tools & Platforms', items: ['Microsoft Copilot Studio', 'Claude', 'GPT', 'Gemini', 'Google Colab', 'Microsoft Fabric', 'SAP S/4HANA'] },
  { group: 'Engineering & Design', items: ['Systems Programming', 'Makefile', 'SolidWorks', 'Arduino', 'VS Code', 'Debugging'] },
  { group: 'Business & Strategy', items: ['Market Research', 'Financial Modeling', 'RICE Prioritization', 'PitchBook', 'IBISWorld', 'ESG Strategy', 'Pitch Decks'] },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Proficient' },
  { name: 'Spanish', level: 'Basic' },
  { name: 'Gujarati', level: 'Limited' },
];
