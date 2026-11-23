import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Braces,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import profileImage from "@/assets/amresh-profile.jpg";
import nitJamshedpur from "@/assets/nit-jamshedpur.jpg";
import mcaDegree from "@/assets/mca-degree.jpg";
import bcaDegree from "@/assets/bca-degree.jpg";
import twelfthMarksheet from "@/assets/12th-marksheet.jpg";
import tenthMarksheet from "@/assets/10th-marksheet.jpg";
import sreeAyyappaSchool from "@/assets/sree-ayyappa-school.jpg";
import jawaharNavodaya from "@/assets/jawahar-navodaya.jpg";
import imsKolkata from "@/assets/ims-kolkata.jpg";
import internshipCertificate from "@/assets/internship-certificate.jpg";
import { PROFILE, getExperienceParts } from "@/lib/portfolio-profile";
import "./portfolio.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#toolkit" },
  { label: "Education", href: "#education" },
  { label: "Learning", href: "#certifications" },
];

const teamDeliveries = [
  {
    number: "01",
    category: "WORKFLOW ENGINEERING",
    title: "Make complex workflows easier to build",
    description:
      "Worked across an Angular condition editor, Java transformation logic and automated tests so business rules behave consistently from the form through pipeline execution.",
    tools: ["Angular", "TypeScript", "Java", "Automated tests"],
    icon: Workflow,
    visual: "workflow",
  },
  {
    number: "02",
    category: "ADMIN + PLATFORM EXPERIENCE",
    title: "Make platform operations easier to manage",
    description:
      "Contributed to organization, marketplace, billing, role and approval workflows, alongside release communications with configurable senders, previews and recipient controls.",
    tools: ["Angular", "Java", "Admin workflows", "Email"],
    icon: Building2,
    visual: "release",
  },
  {
    number: "03",
    category: "ENTERPRISE DATA INTEGRATION",
    title: "Make enterprise data easier to reach",
    description:
      "Added Microsoft Fabric Warehouse catalog discovery and helped improve large spreadsheet and file archive handling for reliable downstream data workflows.",
    tools: ["Java", "Microsoft Fabric", "Excel", "Data platforms"],
    icon: Database,
    visual: "integrations",
  },
  {
    number: "04",
    category: "AI APPLICATIONS + DATA",
    title: "Bring AI into real product workflows",
    description:
      "Built an AI Workbench model-discovery API and worked on asynchronous document extraction, connecting model-powered processing to structured data and reporting.",
    tools: ["Java", "Python", "AI workflows", "REST APIs"],
    icon: Braces,
    visual: "documents",
  },
];

const coreProjects = [
  {
    title: "Automated Document Extraction Pipeline",
    description:
      "An end-to-end data pipeline moved documents from mailboxes and SharePoint through PDF parsing into Excel outputs and JSON for downstream analytics.",
    result: "~2,000 files processed daily",
    tools: ["Java", "Spring Boot", "PDF parsing", "SharePoint", "JSON", "PostgreSQL"],
    highlights: [
      "Removed manual document handling from the client workflow.",
      "Standardized multi-step extraction into a dependable backend process.",
      "Prepared structured data for reporting and analytics consumers.",
    ],
    icon: BookOpen,
  },
  {
    title: "30+ KPI Analytics Dashboard Backend",
    description:
      "A PostgreSQL analytics backend used materialized views, flattened JSON and targeted indexing to serve a client-facing KPI dashboard.",
    result: "15-minute dashboard refresh",
    tools: ["PostgreSQL", "Materialized views", "Indexing", "JPA CriteriaBuilder", "REST APIs"],
    highlights: [
      "Flattened nested JSON into query-friendly tables.",
      "Improved dashboard performance with indexing and query tuning.",
      "Supported advanced filtering across more than 30 KPIs.",
    ],
    icon: Database,
  },
  {
    title: "Multi-Cloud Data Source Integrations",
    description:
      "Expanded ingestion to Databricks, Azure Fabric, dynamic Azure Blob Storage and MFA-secured mailbox connectors for enterprise deployments.",
    result: "More enterprise data sources",
    tools: ["Azure Fabric", "Databricks", "Azure Blob Storage", "Azure ACR", "MFA", "REST APIs"],
    highlights: [
      "Moved from static storage settings to tenant-aware dynamic storage.",
      "Added secured mailbox ingestion paths for enterprise clients.",
      "Contributed to Databricks Marketplace readiness work.",
    ],
    icon: Cloud,
  },
  {
    title: "Secure Backend Platform Services",
    description:
      "Production Spring Boot services covered authentication, API routing, scheduler reliability, async execution and tenant-aware access control.",
    result: "30+ APIs · ~30,000 concurrent users",
    tools: ["Spring Boot", "Keycloak", "OAuth 2.0", "Spring Cloud Gateway", "Quartz", "Docker"],
    highlights: [
      "Standardized SSO, JWT, RBAC and tenant-isolation patterns.",
      "Moved long-running AI extraction calls to asynchronous execution.",
      "Improved scheduled job reliability with Quartz retry handling.",
    ],
    icon: Code2,
  },
];

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "National Institute of Technology Jamshedpur",
    location: "Jamshedpur, Jharkhand, India",
    period: "June 2020 – July 2023",
    score: "8.48 / 10.0 CGPA",
    level: "Postgraduate",
    description:
      "Advanced computer applications program focused on software engineering, system design and emerging technologies.",
    highlights: [
      "Advanced Software Engineering & System Architecture",
      "Database Systems & Data Analytics",
      "Web Technologies & Full-Stack Development",
      "Algorithm Design & Computational Optimization",
    ],
    institutionImage: nitJamshedpur,
    institutionAlt: "National Institute of Technology Jamshedpur",
    certificate: mcaDegree,
    certificateLabel: "View MCA degree certificate",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "Institute of Management Study",
    affiliation: "MAKAUT University (formerly WBUT)",
    location: "Kolkata, West Bengal, India",
    period: "June 2016 – July 2019",
    score: "8.84 / 10.0 CGPA",
    level: "Undergraduate",
    description:
      "Undergraduate program establishing strong foundations in computer science principles and application development.",
    highlights: [
      "Programming Fundamentals & Object-Oriented Design",
      "Web Development & User Interface Technologies",
      "Database Design & Management Systems",
      "Software Development Methodologies",
    ],
    institutionImage: imsKolkata,
    institutionAlt: "Institute of Management Study, Kolkata",
    certificate: bcaDegree,
    certificateLabel: "View BCA degree certificate",
  },
  {
    degree: "Higher Secondary Certificate · 12th Grade",
    short: "12th",
    institution: "Sree Ayyappa Public School",
    affiliation: "Central Board of Secondary Education (CBSE)",
    location: "Bokaro Steel City, Jharkhand, India",
    period: "2013 – 2015",
    score: "80.6%",
    level: "Senior Secondary · Science",
    description:
      "Completed senior secondary education in the Science stream, building analytical and mathematical foundations.",
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    institutionImage: sreeAyyappaSchool,
    institutionAlt: "Sree Ayyappa Public School",
    certificate: twelfthMarksheet,
    certificateLabel: "View 12th grade marksheet",
  },
  {
    degree: "Secondary School Certificate · 10th Grade",
    short: "10th",
    institution: "Jawahar Navodaya Vidyalaya",
    affiliation: "Central Board of Secondary Education (CBSE)",
    location: "Barun, Bihar, India",
    period: "2012 – 2013",
    score: "9.6 / 10.0 CGPA",
    level: "Secondary",
    description:
      "Attended a residential school focused on academic excellence and holistic development of students from rural areas.",
    highlights: [
      "Academic Excellence in Science & Mathematics",
      "Leadership Development through Student Activities",
      "Cultural & Social Awareness Programs",
    ],
    institutionImage: jawaharNavodaya,
    institutionAlt: "Jawahar Navodaya Vidyalaya, Barun",
    certificate: tenthMarksheet,
    certificateLabel: "View 10th grade marksheet",
  },
];

const certifications = [
  {
    title: "Java Algorithms",
    provider: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "0f1347ef6244ec8e7a948cfe50a4a6c739426524fe6780d23c20d98ed457d40e",
    description: "Advanced algorithms implementation in Java, covering data structures, sorting, searching, and optimization techniques.",
    skills: ["Algorithm Design", "Data Structures", "Java Programming", "Performance Optimization"],
  },
  {
    title: "Java: Objects and APIs",
    provider: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "ee798f45d5071eb3f4dc46e6e7475f28fed9d3b5290252b1764a8495dec178e2",
    description: "Object-oriented programming concepts, API design patterns, and best practices for Java development.",
    skills: ["Object-Oriented Programming", "API Design", "Java Best Practices", "Software Architecture"],
  },
  {
    title: "Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks",
    provider: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "a210dd9c73fb08f485ab90975b75f45a8022193af44ac4b5abeab47cbb9afe41",
    description: "Advanced JVM concepts, memory optimization, garbage collection tuning, and performance debugging techniques.",
    skills: ["JVM Tuning", "Memory Optimization", "Garbage Collection", "Performance Monitoring"],
  },
  {
    title: "Learning Java Collections",
    provider: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "9821d153a4fb95ad01676ec7427a1fdc09af156274b4d788ca03eb45bbf60d8d",
    description: "Comprehensive understanding of Java Collections Framework, including Lists, Sets, Maps, and advanced collection operations.",
    skills: ["Java Collections", "Data Structures", "Stream API", "Collection Optimization"],
  },
  {
    title: "Learning Spring with Spring Boot",
    provider: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "dc1e6565e472bd9bf395ffdd624869c4792749ac32cc077748de7252727e62aa",
    description: "Modern Spring framework development with Spring Boot, including dependency injection, web development, and enterprise patterns.",
    skills: ["Spring Framework", "Spring Boot", "Dependency Injection", "Web Development"],
  },
].map((certification) => ({
  ...certification,
  url: `https://www.linkedin.com/learning/certificates/${certification.credentialId}`,
}));

const experienceHighlights = [
  "Architected a mailbox → SharePoint → PDF → Excel → JSON pipeline that eliminated manual handling for about 2,000 files each day.",
  "Flattened nested JSON into PostgreSQL materialized views for a 30+ KPI analytics dashboard with 15-minute refreshes; tuned indexes and schema for reporting workloads.",
  "Re-engineered AI extraction calls from synchronous to asynchronous execution and resolved duplicate temporary-table failures during concurrent table creation.",
  "Extended platform data sources to Databricks, Azure Fabric, tenant-aware Azure Blob Storage and MFA-secured mailbox connectors.",
  "Delivered 30+ production Spring Boot REST APIs supporting about 30,000 concurrent users; established Keycloak OAuth 2.0, SSO and tenant-isolated RBAC patterns.",
  "Integrated IBM Cognos with Power BI through Java services and Azure Functions, reducing manual reporting effort by about 50%.",
  "Implemented Quartz retry behavior, Spring Cloud Gateway routing and JPA CriteriaBuilder analytics queries.",
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const yearsExperience = Math.max(1, getExperienceParts().years);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-site">
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Amresh Kumar, home">
            <span className="brand-mark">AK</span>
            <span className="brand-name">Amresh Kumar<small>AI + FULL-STACK ENGINEER</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
        </nav>}
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AI & FULL-STACK SOFTWARE ENGINEER</p>
            <h1 id="hero-title">I turn bold ideas into <span>intelligent products.</span></h1>
            <p className="hero-description">
              I build across React, Angular, Java and Python—bringing AI into useful products, data workflows and enterprise platforms. I use AI-assisted development and vibe coding to move from a rough idea to a working product, then refine it with sound engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href={PROFILE.resumePath} download={PROFILE.resumeFileName}><Download size={16} /> Résumé</a>
            </div>
            <div className="social-links" aria-label="Professional links">
              <a href="https://github.com/Amreshnit" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/amresh-kumar-467069183/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="https://leetcode.com/u/Amresh9122/" target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode</a>
              <a href={`mailto:${PROFILE.email}`}><Mail size={17} /> Email</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait and engineering focus">
            <div className="portrait-frame"><img src={profileImage} alt="Amresh Kumar" /><div className="portrait-stamp"><span>BUILD</span><span>WITH</span><span>INTENT</span></div></div>
            <div className="portrait-note"><span className="note-kicker">CURRENTLY BUILDING</span><strong>AI-powered<br />product experiences</strong><span className="note-location">Hyderabad, India</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about"><ArrowDown size={16} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div><strong>{yearsExperience}+</strong><span>years building software</span></div>
          <div><strong>2K+</strong><span>documents automated daily</span></div>
          <div><strong>30+</strong><span>production APIs delivered</span></div>
          <div><strong>AI × Full stack</strong><span>from idea to implementation</span></div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-heading">
          <div className="about-copy">
            <p className="eyebrow">ABOUT MY WORK <span> / PRODUCT ENGINEERING</span></p>
            <h2 id="about-heading">From backend depth to <span>product breadth.</span></h2>
            <p>I’m an AI and full-stack software engineer with a strong foundation in Java backend and data engineering. At Kanerika, I’ve built production APIs, secure authentication and tenant-aware workflows, while also delivering document extraction, analytics and cloud data integrations.</p>
            <p>My work now spans product interfaces in React and Angular, Java and Python services, and AI-enabled workflows. I like owning a feature from its first prototype through integration, review and a dependable release—working closely with product, frontend, backend and platform teammates.</p>
            <p>I earned my MCA from NIT Jamshedpur and continue to bring that systems-thinking foundation to new products, frameworks and AI capabilities.</p>
          </div>
          <div className="about-impact">
            <span className="education-label">SELECTED OUTCOMES</span>
            <article><span>01</span><div><h3>Automation at scale</h3><p>Mailbox-to-SharePoint extraction pipeline processing about 2,000 files per day.</p></div></article>
            <article><span>02</span><div><h3>Faster analytics</h3><p>PostgreSQL materialized views and indexing for 30+ KPIs refreshed every 15 minutes.</p></div></article>
            <article><span>03</span><div><h3>Enterprise security</h3><p>Keycloak OAuth 2.0, Microsoft Entra ID, SSO, MFA and tenant-isolated RBAC patterns.</p></div></article>
            <article><span>04</span><div><h3>Production reliability</h3><p>Async AI extraction, concurrency fixes and stronger Quartz retry behavior.</p></div></article>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-heading">
          <div className="section-wrap">
            <div className="section-heading section-heading-dark">
              <div><p className="eyebrow eyebrow-light">SELECTED WORK <span> / PRODUCT + PLATFORM</span></p><h2 id="work-heading">Useful software.<br /><span>Thoughtfully shipped.</span></h2></div>
              <p className="section-intro">Feature delivery across interfaces, services, integrations and AI workflows, alongside systems with measurable production impact.</p>
            </div>

            <div className="work-subheading"><span>RECENT TEAM DELIVERIES</span><p>Cross-functional work connecting UI, backend behavior, tests and platform needs.</p></div>
            <div className="project-grid">
              {teamDeliveries.map((project) => {
                const Icon = project.icon;
                return <article className={`project-card project-${project.visual}`} key={project.number}>
                  <div className="project-topline"><span>{project.number} <i /> {project.category}</span><Icon size={19} strokeWidth={1.6} aria-hidden="true" /></div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
                    {project.visual === "workflow" && <><div className="flow-node flow-start">IF <span>Condition</span></div><div className="flow-branch"><i /><i /><i /></div><div className="flow-node flow-end">THEN <span>Next step</span></div></>}
                    {project.visual === "release" && <><div className="mail-preview"><span className="mail-preview-dot" /><span className="mail-preview-line" /><span className="mail-preview-line short" /><span className="mail-preview-button">Preview email <ArrowUpRight size={13} /></span></div><div className="mail-recipients"><span>TO</span><i /><i /><i /></div></>}
                    {project.visual === "integrations" && <><span className="integration-node integration-main">DATA</span><span className="integration-node integration-azure">Azure</span><span className="integration-node integration-fabric">Fabric</span><span className="integration-node integration-app">APP</span><i className="connector connector-a" /><i className="connector connector-b" /><i className="connector connector-c" /></>}
                    {project.visual === "documents" && <><div className="document-sheet"><span /><span /><span /><span /></div><ArrowRight className="document-arrow" size={24} /><div className="data-sheet"><b>{`{ }`}</b><span>structured data</span></div></>}
                  </div>
                  <div className="project-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                </article>;
              })}
            </div>

            <div className="work-subheading core-subheading"><span>CORE SYSTEMS & MEASURABLE IMPACT</span><p>Earlier project work and platform foundations, kept with the original scope and results.</p></div>
            <div className="legacy-project-grid">
              {coreProjects.map(({ icon: Icon, ...project }) => <article className="legacy-project" key={project.title}>
                <div className="legacy-project-top"><span className="legacy-project-icon"><Icon size={18} /></span><span className="legacy-result">{project.result}</span></div>
                <h3>{project.title}</h3><p className="legacy-description">{project.description}</p>
                <ul>{project.highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={14} /><span>{highlight}</span></li>)}</ul>
                <div className="project-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>)}
            </div>
            <div className="capability-strip"><span className="capability-label">MORE TEAM DELIVERIES</span><span>Marketplace &amp; billing</span><span>Roles &amp; approvals</span><span>File archiving</span><span>Metrics &amp; quality gates</span></div>
            <div className="work-footnote"><span className="status-dot" /> Company work is summarized at a high level to respect confidentiality; features were delivered with cross-functional teams.</div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-heading">
          <div className="experience-aside">
            <p className="eyebrow">THE JOURNEY <span> / EXPERIENCE</span></p>
            <h2 id="experience-heading">Engineering that connects <span>the dots.</span></h2>
            <p>From service APIs to product interfaces and AI-enabled workflows, I enjoy owning the path from an idea to a dependable release.</p>
            <div className="experience-mark"><span>{yearsExperience}+</span><small>YEARS OF<br />BUILDING</small></div>
          </div>
          <div className="timeline">
            <article className="timeline-entry timeline-current">
              <span className="timeline-marker" /><div className="timeline-meta"><span>JUNE 2023 — PRESENT</span><span>HYDERABAD, INDIA</span></div>
              <h3>Software Engineer</h3><p className="timeline-company">Kanerika Software Pvt. Ltd.</p>
              <p className="timeline-copy">Progressed from Backend Developer Intern to full-time Software Engineer, working across platform engineering, enterprise integrations, data-heavy services and product features.</p>
              <ul>{experienceHighlights.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="timeline-team-note"><strong>Recent cross-team delivery</strong><p>Partnered across frontend, backend, data and platform teams on workflow editing, admin operations, connector discovery, AI model access and service quality improvements.</p></div>
              <div className="experience-tags">{["Java", "Spring Boot", "React", "Angular", "Python", "PostgreSQL", "Azure", "Databricks", "Keycloak", "Docker"].map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
            <article className="timeline-entry">
              <span className="timeline-marker" /><div className="timeline-meta"><span>JANUARY 2023 — JUNE 2023</span><span>INTERNSHIP</span></div>
              <h3>Backend Developer Intern</h3><p className="timeline-company">Kanerika Software Pvt. Ltd.</p>
              <p className="timeline-copy">Started with Java backend development, building a strong foundation in APIs, databases, platform workflows and collaborative production software delivery.</p>
              <a className="text-link" href={internshipCertificate} target="_blank" rel="noreferrer">View internship certificate <ExternalLink size={13} /></a>
            </article>
          </div>
        </section>

        <section className="toolkit-section" id="toolkit" aria-labelledby="toolkit-heading">
          <div className="section-wrap">
            <div className="section-heading toolkit-heading">
              <div><p className="eyebrow">MY TOOLKIT <span> / PRACTICE</span></p><h2 id="toolkit-heading">One engineer.<br /><span>Across the stack.</span></h2></div>
              <p className="section-intro">The full working toolkit, from AI-assisted prototypes and polished interfaces to secure services, data systems and cloud delivery.</p>
            </div>
            <div className="skill-groups">
              {PROFILE.skillGroups.map((group, index) => <article className="skill-group" key={group.category}>
                <span className="skill-group-number">0{index + 1}</span><h3>{group.category}</h3>
                <div className="toolkit-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>)}
            </div>
            <div className="vibe-note">
              <div className="vibe-icon"><Sparkles size={19} /></div>
              <div><span className="note-kicker">HOW I WORK</span><p><strong>Vibe coding, with engineering judgment.</strong> I use AI to explore, prototype and iterate quickly—then review the code, verify the behavior and make the result reliable.</p></div>
              <span className="vibe-label">AI-ASSISTED DEVELOPMENT</span>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap" id="education" aria-labelledby="education-heading">
          <div className="section-heading education-heading">
            <div><p className="eyebrow">ACADEMIC BACKGROUND <span> / 2012—2023</span></p><h2 id="education-heading">A foundation built <span>over time.</span></h2></div>
            <p className="section-intro">The complete study history from secondary school through postgraduate study, including grades, subjects and degree records.</p>
          </div>
          <div className="education-grid">
            {education.map((item) => <article className="education-detail" key={item.short}>
              <div className="education-detail-top"><span className="education-level">{item.level}</span><span className="education-period"><CalendarDays size={13} />{item.period}</span></div>
              <div className="education-main">
                <div><h3>{item.degree}</h3><p className="education-institution"><strong>{item.institution}</strong>{item.affiliation && <span>{item.affiliation}</span>}</p><p className="education-location"><MapPin size={13} />{item.location}</p></div>
                <span className="education-grade">{item.score}</span>
              </div>
              <p className="education-description">{item.description}</p>
              <div className="education-highlights"><span>{item.short === "12th" ? "CORE SUBJECTS" : item.short === "10th" ? "STUDY HIGHLIGHTS" : "KEY AREAS OF STUDY"}</span><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
              <div className="education-media">
                <a className="institution-photo" href={item.institutionImage} target="_blank" rel="noreferrer"><img src={item.institutionImage} alt={item.institutionAlt} loading="lazy" /><span>{item.institutionAlt}<ExternalLink size={12} /></span></a>
                <a className="credential-link" href={item.certificate} target="_blank" rel="noreferrer"><Award size={15} />{item.certificateLabel}<ArrowUpRight size={14} /></a>
              </div>
            </article>)}
          </div>
          <div className="education-summary"><GraduationCap size={20} /><span><strong>Four stages of study</strong> · MCA at NIT Jamshedpur · 8.48 MCA CGPA · 8.84 BCA CGPA · Science stream in higher secondary</span></div>
        </section>

        <section className="certifications-section" id="certifications" aria-labelledby="certifications-heading">
          <div className="section-wrap">
            <div className="section-heading certification-heading">
              <div><p className="eyebrow">CONTINUOUS LEARNING <span> / 2024</span></p><h2 id="certifications-heading">Deepening the <span>engineering craft.</span></h2></div>
              <p className="section-intro">Five LinkedIn Learning certificates covering Java algorithms, APIs, JVM performance, collections and Spring Boot.</p>
            </div>
            <div className="certification-stats"><div><strong>5</strong><span>certificates</span></div><div><strong>40+</strong><span>learning hours</span></div><div><strong>15+</strong><span>skills covered</span></div></div>
            <div className="certification-grid">
              {certifications.map((certification, index) => <article className="certification-card" key={certification.credentialId}>
                <div className="certification-card-top"><span className="certification-number">0{index + 1}</span><span className="certification-year"><Award size={13} />{certification.issueDate}</span></div>
                <h3>{certification.title}</h3><p>{certification.description}</p>
                <div className="toolkit-tags">{certification.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <div className="credential-id"><span>CREDENTIAL ID</span><code>{certification.credentialId}</code></div>
                <a className="verify-link" href={certification.url} target="_blank" rel="noreferrer">Verify on LinkedIn Learning <ExternalLink size={14} /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow eyebrow-light">HAVE A GOOD PROBLEM?</p><h2 id="contact-heading">Let’s build something<br /><span>that matters.</span></h2><p className="contact-copy">Open to conversations about full-stack engineering, AI products and the ideas that deserve to be built.</p></div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}<ArrowUpRight size={19} /></a>
              <div className="contact-details"><a href={`tel:${PROFILE.phone.replaceAll(" ", "")}`}><Phone size={14} />{PROFILE.phone}</a><span><MapPin size={14} />{PROFILE.location}</span></div>
              <div className="contact-socials"><a href="https://www.linkedin.com/in/amresh-kumar-467069183/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="https://github.com/Amreshnit" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://leetcode.com/u/Amresh9122/" target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand brand-footer" href="#top" aria-label="Back to top"><span className="brand-mark">AK</span><span className="brand-name">Amresh Kumar<small>AI + FULL-STACK ENGINEER</small></span></a>
        <span>© {new Date().getFullYear()} Amresh Kumar. Built with curiosity.</span><a className="back-to-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
};

export default Index;
