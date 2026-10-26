
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Satellite,
  Trophy,
  X,
  Cloud,
  Database,
  BrainCircuit,
  Terminal,
  Layers3,
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Dileep Kumar Yagati",
  email: "dileepkumaryagati988@gmail.com",
  github: "https://github.com/Dileep066",
  linkedin: "https://www.linkedin.com/in/dileep-kumar-yagati-1b535b2a4/",
  leetcode: "https://leetcode.com/u/Dileep066/",
  codeforces: "https://codeforces.com/profile/Dileep988",
};

const projects = [
  {
    number: "01",
    title: "E-Commerce Backend Platform",
    category: "Backend Engineering",
    description:
      "A backend application for products, carts, orders, and reviews, featuring authentication, database integration, caching, and background tasks.",
    tech: [
      "FastAPI", "Python", "PostgreSQL", "SQLAlchemy",
      "Redis", "Celery", "JWT", "Pytest", "Locust",
    ],
    link: "https://github.com/nithin01010/E-commerce-Backend",
    icon: Database,
  },
  {
    number: "02",
    title: "Smart Procurement & Vendor Management",
    category: "Automation Platform",
    description:
      "A procurement platform for managing vendors, requests for quotations, quotations, and purchase orders through structured REST APIs.",
    tech: [
      "FastAPI", "Python", "SQLite", "SQLAlchemy",
      "Pydantic", "JWT", "REST APIs",
    ],
    link: "https://github.com/Dileep066/fastapi_vendor_procurement",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Soil Salinity Prediction Using TCN",
    category: "AI / ML Research",
    description:
      "A time-series forecasting research project using multi-temporal satellite spectral data to predict soil salinity indicators in coastal agricultural areas.",
    tech: [
      "Python", "TensorFlow", "TCN", "Landsat",
      "Google Earth Engine", "Remote Sensing",
    ],
    link: "https://github.com/Dileep066/SOIL_SALINITY_PREDICTION",
    icon: Satellite,
  },
  {
    number: "04",
    title: "Metro Ticket Booking System",
    category: "Salesforce CRM",
    description:
      "A Salesforce CRM-based metro ticket booking project focused on booking workflows, application data, and customer-related interactions.",
    tech: ["Salesforce CRM", "Apex", "Lightning Web Components"],
    link: "https://github.com/Dileep066/Metro_Ticket_Booking_System_using_SalesforceCRM",
    icon: Code2,
  },
];

const experiences = [
  {
    period: "Sep 2026 — Present",
    role: "Salesforce Developer Intern",
    company: "Vegacompass",
    location: "Pune, India",
    description:
      "Developing Salesforce skills through CRM workflows, platform development, and Lightning Web Components.",
    tags: ["Salesforce", "Apex", "LWC", "CRM"],
  },
  {
    period: "Oct 2025 — Mar 2026",
    role: "Python & Machine Learning Intern",
    company: "SURE TRUST",
    location: "India",
    description:
      "Developed practical skills in Python, data analysis, machine learning, and software development through technical training and project work.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
  },
];

const education = [
  {
    period: "2023 — 2027",
    degree: "B.Tech — Computer Science and Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution:
      "Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)",
    location: "Vijayawada, Andhra Pradesh, India",
    score: "GPA: 9.19 / 10",
  },
];

const achievements = [
  {
    type: "CERTIFICATION",
    title: "NPTEL — Programming in Modern C++",
    description:
      "C++ programming, templates, STL containers, move semantics, and memory management.",
    icon: Award,
  },
  {
    type: "CERTIFICATION",
    title: "NPTEL — Programming in R Software",
    description:
      "Programming and data analysis using the R statistical computing environment.",
    icon: Award,
  },
  {
    type: "CERTIFICATION",
    title: "AWS Certified Cloud Practitioner",
    description:
      "Cloud fundamentals, AWS core services, architecture, security, and compliance.",
    icon: Cloud,
  },
  {
    type: "CONTEST ACHIEVEMENT",
    title: "2nd Position — Code Warz",
    description:
      "TECHFUSION / INNOVEX 2026, R.V.R. & J.C. College of Engineering.",
    icon: Trophy,
  },
  {
    type: "CONTEST ACHIEVEMENT",
    title: "2nd Position — Buildthon",
    description:
      "SRK TechSpark, SRKR College — website development using AI tools.",
    icon: Trophy,
  },
  {
    type: "SALESFORCE CREDENTIAL",
    title: "Salesforce Certified Platform Developer I",
    description:
      "Salesforce platform development credential.",
    icon: CheckCircle2,
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS", "Java"],
  },
  {
    title: "Backend Development",
    icon: Code2,
    skills: [
      "FastAPI", "Flask", "REST APIs", "SQLAlchemy",
      "Pydantic", "JWT", "RBAC", "Celery",
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Pandas", "NumPy", "scikit-learn", "TensorFlow",
      "Time-Series Forecasting", "TCN", "Data Analysis",
    ],
  },
  {
    title: "Salesforce Development",
    icon: Layers3,
    skills: [
      "Salesforce CRM", "Apex",
      "Lightning Web Components", "Flows",
    ],
  },
  {
    title: "Tools & Testing",
    icon: Terminal,
    skills: ["Git", "GitHub", "Postman", "Pytest", "Locust"],
  },
  {
    title: "Core Computer Science",
    icon: Code2,
    skills: [
      "Data Structures & Algorithms", "DBMS",
      "Object-Oriented Programming", "Operating Systems",
    ],
  },
  {
    title: "Geospatial Technologies",
    icon: Satellite,
    skills: ["Google Earth Engine", "QGIS", "Landsat", "Remote Sensing"],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-icon"><Icon size={23} /></div>
        <span className="project-number">{project.number}</span>
      </div>
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.tech.map((tech) => (
          <span className="tag" key={tech}>{tech}</span>
        ))}
      </div>
      <a
        className="project-link"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub Repository <ExternalLink size={16} />
      </a>
    </article>
  );
}

function ExperienceCard({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-marker" />
      <div className="timeline-content">
        <span className="timeline-period">{item.period}</span>
        <h3>{item.role}</h3>
        <div className="timeline-company">
          <BriefcaseBusiness size={15} />
          <strong>{item.company}</strong>
          <span>·</span>
          <span>{item.location}</span>
        </div>
        <p>{item.description}</p>
        <div className="tag-list">
          {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}

function AchievementCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="achievement-card">
      <div className="achievement-icon"><Icon size={21} /></div>
      <div className="achievement-content">
        <span className="achievement-category">{item.type}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function SkillGroup({ group }) {
  const Icon = group.icon;

  return (
    <article className="skill-card">
      <div className="skill-card-heading">
        <div className="skill-icon"><Icon size={20} /></div>
        <h3>{group.title}</h3>
      </div>
      <div className="tag-list">
        {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Achievements", "#achievements"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">D</span>
            <span>Dileep<span className="brand-dot">.</span></span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's Talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" />
                SOFTWARE DEVELOPMENT · AI / ML
              </div>
              <p className="hero-intro">Hello, I'm</p>
              <h1>Dileep Kumar<br /><span>Yagati.</span></h1>
              <h2 className="hero-role">
                Software Developer <span>&amp;</span> Backend Engineer
              </h2>
              <p className="hero-description">
                I build practical software solutions, secure backend APIs,
                and data-driven applications. I enjoy solving complex
                problems and turning ideas into reliable, useful products.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore My Work <ArrowRight size={17} />
                </a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>
                  <Mail size={17} /> Get in Touch
                </a>
              </div>

              <div className="hero-socials">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                  <Code2 size={18} /> LeetCode
                </a>
              </div>
            </div>

            {/* Circular profile photo */}
            <div className="hero-visual profile-visual">
              <div className="profile-glow" />
              <div className="profile-orbit profile-orbit-one" />
              <div className="profile-orbit profile-orbit-two" />

              <div className="profile-frame">
                <img
                  src="/dileep-profile.png"
                  alt="Dileep Kumar Yagati"
                  className="profile-photo"
                />
              </div>

              <div className="profile-floating-card profile-card-top">
                <div className="floating-card-icon"><Code2 size={19} /></div>
                <div>
                  <strong>Software Developer</strong>
                  <span>Building practical solutions</span>
                </div>
              </div>

              <div className="profile-floating-card profile-card-bottom">
                <div className="floating-card-icon purple-icon">
                  <BrainCircuit size={19} />
                </div>
                <div>
                  <strong>AI / ML Enthusiast</strong>
                  <span>Turning data into insights</span>
                </div>
              </div>

              <div className="profile-status">
                <span className="orb-dot" /> Always learning
              </div>
            </div>
          </div>

          <div className="hero-bottom container">
            <span>BASED IN ANDHRA PRADESH, INDIA</span>
            <a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={15} /></a>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid container">
            <div className="stat-item"><strong>1,000<span>+</span></strong><p>Coding Problems Solved</p></div>
            <div className="stat-item"><strong>02</strong><p>Internship Experiences</p></div>
            <div className="stat-item"><strong>01</strong><p>Salesforce Developer Credential</p></div>
            <div className="stat-item"><strong>04</strong><p>Featured Projects</p></div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I've Built"
            description="Projects across backend engineering, AI/ML research, automation, and Salesforce development."
          />
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="section section-muted" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="MY JOURNEY"
              title="Experience"
              description="Technical experience across software development and machine learning."
            />
            <div className="timeline">
              {experiences.map((item) => <ExperienceCard key={item.company} item={item} />)}
            </div>
          </div>
        </section>

        <section className="section container" id="education">
          <SectionHeading
            eyebrow="ACADEMIC BACKGROUND"
            title="Education"
            description="My engineering education and specialization."
          />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.institution}>
                <div className="education-icon"><GraduationCap size={25} /></div>
                <div className="education-main">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.degree}</h3>
                  <h4>{item.specialization}</h4>
                  <p>{item.institution}</p>
                  <span className="education-location"><MapPin size={14} />{item.location}</span>
                </div>
                <div className="education-score">{item.score}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="achievements">
          <div className="container">
            <SectionHeading
              eyebrow="VERIFIED CREDENTIALS"
              title="Certifications & Contest Achievements"
              description="Technical certifications and competitive achievements reflecting continued learning and problem-solving."
            />
            <div className="achievements-grid">
              {achievements.map((item) => <AchievementCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="about-grid">
            <div className="about-heading">
              <span className="eyebrow">A LITTLE ABOUT ME</span>
              <h2>Curiosity drives the code. <span>Purpose drives the work.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I'm Dileep Kumar Yagati, a Computer Science and Engineering
                student specializing in Artificial Intelligence and Machine
                Learning at Velagapudi Ramakrishna Siddhartha Engineering College.
              </p>
              <p>
                I'm passionate about software development, backend engineering,
                and Salesforce development, with a focus on building reliable,
                scalable, and practical applications.
              </p>
              <p>
                I enjoy solving complex problems, designing efficient APIs,
                and turning ideas into functional software solutions. Through
                projects and technical experience, I continue to strengthen
                my engineering skills and explore technologies that create
                meaningful real-world impact.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Skills & Technologies"
              description="Technologies and concepts I use to build applications, work with data, and solve engineering problems."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => <SkillGroup key={group.title} group={group} />)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="container contact-inner">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something <span>meaningful.</span></h2>
            <p>
              I'm always interested in connecting with people who enjoy
              technology, solving problems, and building useful products.
            </p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={17} /> Get in Touch <ArrowUpRight size={17} />
            </a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
                <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><Code2 size={19} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">D</span>
            <span>Dileep<span className="brand-dot">.</span></span>
          </a>
          <p>Designed &amp; built by Dileep Kumar Yagati.</p>
          <a className="back-to-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
