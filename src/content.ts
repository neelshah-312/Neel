export const heroRotatingPhrases = [
  "Splunk correlations",
  "ELK discovery searches",
  "IAM & Okta trails",
  "MITRE-shaped detections",
  "incident timelines",
] as const;

export const marqueeItems = [
  "SPLUNK & ELK",
  "DETECTION ENGINEERING",
  "INCIDENT RESPONSE",
  "MITRE ATT&CK MAPPING",
  "THREAT INTEL",
  "PYTHON AUTOMATION",
  "IAM & OKTA",
  "LOG FORENSICS",
] as const;

/** Google Drive résumé PDF — single source for navbar, labs, name plate. */
export const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/1dw5iDICrNhIWpVaTUiELjwL0DOc-I2ye/view?usp=sharing" as const;

export const labLinks = [
  {
    label: "Capstone codebase",
    hint: "TripWise · wizard, maps, planner core",
    href: "https://github.com/neelshah-312/Spring-2026-Graduate-Capstone-Project-CMSI-694-01-",
  },
  {
    label: "GitHub profile",
    hint: "Automation, coursework, experiments",
    href: "https://github.com/neelshah-312",
  },
  {
    label: "Résumé (PDF)",
    hint: "Google Drive",
    href: RESUME_DRIVE_URL,
  },
] as const;

export const profile = {
  name: "Neel Shah",
  tagline: "Give me a suspicious log and I’ll tell you a story.",
  location: "San Jose, CA",
  email: "shahneel2196@gmail.com",
  phone: "+1 (669) 261-2450",
  linkedin: "https://www.linkedin.com/in/neel-s-b5112b215/",
  github: "https://github.com/neelshah-312",
  resumeUrl: RESUME_DRIVE_URL,
  capstoneRepo: "https://github.com/neelshah-312/Spring-2026-Graduate-Capstone-Project-CMSI-694-01-",
  heroImage: "/neel-hero.png",
  /** Circular avatar (nav + name-plate peek). */
  avatarImage: "/neel-avatar.png",
  /** 2×3 Memoji sticker sheet (full color). Replace `public/memoji-sheet.png` with your export. */
  memojiSheet: "/memoji-sheet.png",
} as const;

export const education = {
  ms: {
    school: "Loyola Marymount University",
    degree: "M.S. in Computer Science",
    location: "Los Angeles, CA",
    end: "May 2026",
  },
  bs: {
    school: "Silver Oak University",
    degree: "B.Tech in Computer Engineering",
    location: "India",
    range: "2020 – 2024",
  },
} as const;

export const certifications = [
  "CompTIA Security+",
  "AWS Cloud Foundation",
] as const;

/** Professional roles — keep in sync with your résumé PDF. */
export const workExperience = [
  {
    id: "aditech",
    company: "Aditech Infotech",
    title: "Cyber Security Analyst / Security Operations Engineer",
    focus: "IAM, SOC & incident response",
    location: "Ahmedabad, India",
    range: "Aug 2022 – Apr 2024",
    summary:
      "Hands-on SOC analyst supporting IAM, authentication telemetry, and enterprise SIEM platforms—turning auth noise, endpoint signals, and network logs into actionable detections and IR-ready narratives.",
    highlights: [
      "Validated access and identity telemetry with Okta and directory integrations to surface misuse and risky patterns across cloud and on-prem.",
      "Triaged SIEM alerts end to end (Splunk, ELK)—correlating auth events, endpoint activity, and firewall/IPS data with threat intel and MITRE-style framing.",
      "Authored and tuned correlation searches and discovery queries to cut false positives while preserving coverage for real incidents.",
      "Partnered on incident response: preserved evidence, documented timelines, and fed lessons learned back into playbooks and detection backlog.",
      "Automated repetitive triage and reporting with Python, SQL, and regex across logs from firewalls, IDS/IPS, VPN, and mail gateways.",
    ],
    tools: [
      "Splunk",
      "ELK",
      "Okta",
      "Python",
      "SQL",
      "Regex",
      "Wireshark",
      "Microsoft 365",
      "Windows & Linux",
    ],
  },
] as const;

export const projects = [
  {
    id: "capstone",
    title: "TripWise — Graduate Capstone",
    shortTitle: "TripWise",
    subtitle: "CMSI 694 · Full-stack itinerary engine",
    readTime: "≈ 3 min read",
    description:
      "A guided trip planner with a glassmorphic React wizard, Express services, and a planning core that ranks stops by budget tier, time-of-day intent, and travel distance—wired to rich mapping and export flows.",
    stack: ["React", "Vite", "Express", "Google Places API", "Maps & PDF UX"],
    href: profile.capstoneRepo,
    cardTone: "teal" as const,
    /** Full product preview in phone strip (replace `public/tripwise-hero.png` to update). */
    phonePreview: "/tripwise-hero.png",
  },
  {
    id: "jobTracker",
    title: "Job Tracker AI",
    shortTitle: "Job Tracker",
    subtitle: "Streamlit · Gmail · LLM · SQLite",
    readTime: "≈ 2 min read",
    description:
      "A personal Streamlit dashboard that wires Gmail, Google Drive, OpenAI, and SQLite into one pipeline—LLM-classified inbox scans, application records, follow-up scheduling, resume matching, and an offline-or-LLM chatbot over your local database.",
    stack: ["Python", "Streamlit", "SQLite", "OpenAI", "Gmail API", "Google Drive"],
    href: "https://github.com/neelshah-312/Ai-job-tracker",
    cardTone: "rose" as const,
    phonePreview: "/job-tracker-hero.svg",
  },
  {
    id: "dashboard",
    title: "Identity & Telemetry Dashboards",
    shortTitle: "Telemetry",
    subtitle: "SOC visibility layer",
    readTime: "≈ 2 min read",
    description:
      "Splunk dashboards for authentication anomalies and suspicious login patterns, enriched with TI feeds, custom alert logic, and MITRE ATT&CK mapping to clarify adversary behavior.",
    stack: ["Splunk", "MITRE ATT&CK", "Threat Intel", "IAM signals"],
    href: profile.linkedin,
    cardTone: "violet" as const,
  },
] as const;

export const skillGroups = [
  {
    label: "SIEM & detection",
    items: [
      "Splunk",
      "ELK",
      "Detection engineering",
      "Alert triage",
      "Correlation design",
    ],
  },
  {
    label: "Operations",
    items: [
      "Incident response",
      "Threat intelligence",
      "Vulnerability management",
      "Log analysis",
      "Phishing analysis",
    ],
  },
  {
    label: "Identity & cloud",
    items: ["Okta", "IAM", "Microsoft 365", "AWS (practitioner)", "Least privilege"],
  },
  {
    label: "Network & tooling",
    items: [
      "Wireshark",
      "Nmap",
      "Snort",
      "Nessus",
      "OpenVAS",
      "Burp Suite",
      "Metasploit",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "Bash", "PowerShell", "SQL", "Regex"],
  },
  {
    label: "Platforms",
    items: ["Windows", "Linux (Ubuntu, Kali)", "macOS"],
  },
] as const;

/** Chat-style about (structure mirrors abhikevadiya.com #about) */
export const aboutChat = [
  {
    q: "Alright, quick intro. Who are you?",
    a: "I'm Neel — SOC-minded, finishing my M.S. in CS at LMU. I cut my teeth at Aditech Infotech (Ahmedabad) as a Cyber Security Analyst / SecOps engineer—Splunk/ELK tuning, triage, IAM signals, and Python glue before grad school.",
  },
  {
    q: "What industries or stacks have you lived in?",
    a: "IAM-heavy SaaS, Splunk/ELK-heavy SOCs, hybrid cloud and classic enterprise directories—each with its own favorite false positive.",
  },
  {
    q: "What projects get you excited?",
    a: "The messy ones: noisy telemetry, auth anomalies that almost look normal, and the “this might be nothing” hunt that turns into a tight detection or a clean closure.",
  },
  {
    q: "How do you work with teams?",
    a: "I'm not just running queries—I'm your teammate on the bridge: clear notes, honest timelines, and playbooks that get shorter every time we close an incident together.",
  },
  {
    q: "One thing people should know about you?",
    a: "I obsess over the little things—the correlation rule that reads cleanly, the handoff note that saves the next shift twenty minutes.",
  },
] as const;
