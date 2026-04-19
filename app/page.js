"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  
  Activity,
  BadgeCheck,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FolderOpen,
  Mail,
  MapPin,
  Menu,
  Search,
  Server,
  Shield,
  UserRoundCheck,
  Wrench,
  X,
  Cpu,
  Network,
  Sparkles,
} from "lucide-react";

export default function LouisCybersecurityPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [rackIndex, setRackIndex] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All");
  const [projectSearch, setProjectSearch] = useState("");
  const [labFilter, setLabFilter] = useState("All");
  const [labSearch, setLabSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [isRackPaused, setIsRackPaused] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Impact", href: "#impact" },
    { label: "Projects", href: "#projects" },
    { label: "Labs", href: "#labs" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const heroSlides = [
    {
      src: "/images/field-work.jpeg",
      alt: "Louis Okperiruisi performing field technical support and equipment maintenance in an industrial plant",
      title: "Industrial Field Support",
      description:
        "Delivered field technical support, infrastructure maintenance, and equipment troubleshooting across active industrial environments.",
    },
    {
      src: "/images/office-work.jpeg",
      alt: "Louis Okperiruisi working at a desk during enterprise IT operations and system monitoring",
      title: "Enterprise IT Operations",
      description:
        "Delivered enterprise support, system monitoring, and daily technical coordination across office and operational environments.",
    },
    {
      src: "/images/Before&Afer3.jpeg",
      alt: "Before and after rack organization showing cable discipline and infrastructure improvement",
      title: "Rack Infrastructure Optimization",
      description:
        "Transformed disorganized network racks into structured, maintainable systems with improved visibility, cleaner routing, and faster troubleshooting readiness.",
    },
  ];

  const rackSlider = [
    {
      src: "/images/Before&After2.jpeg",
      alt: "Before and after comparison of organized network rack with improved cable management and equipment layout",
      label: "Structured Rack Standardization",
      description:
        "This image showcases before-and-after rack standardization work focused on cleaner cable routing, improved equipment arrangement, easier fault tracing, and better infrastructure visibility.",
      tags: [
        "Cable Routing",
        "Rack Standardization",
        "Visibility Improvement",
        "Maintenance Readiness",
      ],
    },
    {
      src: "/images/Before&Afer3.jpeg",
      alt: "Before and after fiber rack organization showing improved patch panel layout and cable discipline",
      label: "Fiber Rack Optimization",
      description:
        "This slider visual reflects fiber rack cleanup and patch-panel organization, improving layout discipline, cable tracing, serviceability, and structured infrastructure presentation.",
      tags: [
        "Fiber Distribution",
        "Patch Management",
        "Cable Discipline",
        "Serviceability",
      ],
    },
    {
      src: "/images/mainrack2.jpeg",
      alt: "Before and after main rack cleanup showing improved structure, cable order, and maintainability",
      label: "Main Rack Revamp",
      description:
        "This image highlights the revamp of a main rack environment to create a cleaner, more maintainable setup with improved order, fault visibility, and operational neatness.",
      tags: [
        "Rack Revamp",
        "Cable Order",
        "Infrastructure Cleanup",
        "Operational Neatness",
      ],
    },
    {
      src: "/images/UPSBattery.jpeg",
      alt: "UPS battery replacement and maintenance in a rack environment",
      label: "UPS Battery Maintenance",
      description:
        "This visual shows UPS battery replacement and rack power maintenance work aimed at improving backup readiness, equipment protection, and infrastructure continuity.",
      tags: ["UPS Support", "Power Backup", "Maintenance", "Continuity"],
    },
    {
      src: "/images/fiber-splicing.jpeg",
      alt: "Field supervision of fiber optic cable splicing and telecom support work",
      label: "Fiber Optic Splicing Supervision",
      description:
        "This visual highlights supervision of fiber optic cable splicing and field connectivity work, focusing on cable termination quality, network continuity, infrastructure reliability, and telecom installation support.",
      tags: [
        "Fiber Optics",
        "FOC Splicing",
        "Connectivity Support",
        "Field Supervision",
      ],
    },
  ];

  const skills = [
    "SOC Operations",
    "Incident Response",
    "Threat Intelligence",
    "Vulnerability Management",
    "API Security",
    "Cloud Security",
    "Endpoint Protection",
    "SIEM Monitoring",
    "Patch Management",
    "Risk Assessment",
    "Compliance",
    "Application Security",
  ];


  const impactStats = [
    {
      value: "300+",
      label: "Enterprise users supported",
      subtext: "Across daily technical support and IT operations",
      icon: Briefcase,
    },
    {
      value: "50+",
      label: "Vulnerability scans completed",
      subtext: "Using Nessus and OWASP ZAP",
      icon: Shield,
    },
    {
      value: "40%",
      label: "Faster ticket resolution",
      subtext: "Improved through structured support workflows",
      icon: Activity,
    },
    {
      value: "95%",
      label: "Patch and remediation operations",
      subtext: "Supported endpoint compliance, patching workflows, and remediation follow-through.",
      icon: Server,
    },
      {
    value: "90%",
    label: "Reduced cable clutter",
    subtext: "Improved rack organization, maintenance readiness, and cable discipline.",
    icon: Network,
  },
  {
    value: "Improved",
    label: "System visibility",
    subtext: "Improved infrastructure visibility and easier troubleshooting across technical environments.",
    icon: Activity,
  },
  {
    value: "Stronger",
    label: "Endpoint security policies",
    subtext: "Configured malware detection, DLP, device control, application control, and patch management workflows.",
    icon: Shield,
  },
  {
    value: "Real-time",
    label: "AI threat detection middleware",
    subtext: "Built AI security middleware with prompt injection defense, rate limiting, PII masking, and logging.",
    icon: Cpu,
  },
  ];

  const toolsByGroup = [
    {
      group: "Security",
      items: [
        "Qualys",
        "Nessus",
        "OWASP ZAP",
        "Wazuh",
        "Security Onion",
        "OPSWAT MetaDefender",
        "Wallarm",
        "Snyk",
        "Aikido",
      ],
    },
    {
      group: "IT Operations",
      items: [
        "ManageEngine Endpoint Central",
        "Lansweeper",
        "Asset Management",
        "Endpoint Troubleshooting",
        "System Monitoring",
      ],
    },
    {
      group: "Cloud",
      items: [
        "Google Cloud",
        "Security Command Center",
        "Cloud Security Controls",
      ],
    },
  ];

  const projects = [
    {
      title: "AI Security Middleware",
      category: "Security",
      summary:
        "Built a FastAPI-based AI security middleware that detects prompt injection, enforces rate limits, masks PII, and logs suspicious activity in real time.",
      metrics: [
        "Blocked malicious prompt injection input",
        "Enforced request rate limits",
        "Masked sensitive data in responses",
      ],
      tags: ["AI Security", "FastAPI", "Prompt Injection", "PII Masking"],
      images: [
        {
          src: "/images/ai-security-project.jpeg",
          alt: "AI security middleware testing interface and FastAPI security workflow",
          title: "AI Security Middleware",
        },
      ],
      featured: true,
    },
    {
      title: "Network Rack Optimization",
      category: "Infrastructure",
      summary:
        "Reorganized disordered network racks into clean, structured, and maintainable infrastructure, improving cable discipline, fault tracing, and operational visibility.",
      metrics: [
        "Up to 90% less cable clutter",
        "Faster fault tracing",
        "Improved airflow and visibility",
      ],
      tags: [
        "Cable Management",
        "Network Infrastructure",
        "Physical Layer",
        "Troubleshooting",
      ],
      images: [
        {
          src: "/images/Before&After2.jpeg",
          alt: "Before and after comparison of organized network rack with improved cable management and equipment layout",
          title: "Structured Rack Standardization",
        },
        {
          src: "/images/Before&Afer3.jpeg",
          alt: "Before and after fiber rack organization showing improved patch panel layout and cable discipline",
          title: "Fiber Rack Optimization",
        },
        {
          src: "/images/mainrack2.jpeg",
          alt: "Before and after main rack cleanup showing improved structure, cable order, and maintainability",
          title: "Main Rack Revamp",
        },
        {
          src: "/images/fiber-splicing.jpeg",
          alt: "Field supervision work associated with structured cabling and fiber connectivity support",
          title: "Field Support for Rack and Fiber Work",
        },
      ],
    },
    {
      title: "UPS & Rack Power Maintenance",
      category: "Infrastructure",
      summary:
        "Performed UPS battery replacement and supporting rack power maintenance to improve backup readiness and equipment continuity in technical environments.",
      metrics: [
        "Improved power backup readiness",
        "Supported equipment continuity",
        "Reduced maintenance risk",
      ],
      tags: ["UPS", "Power Backup", "Maintenance", "Infrastructure"],
      images: [
        {
          src: "/images/UPSBattery.jpeg",
          alt: "UPS battery maintenance to improve power backup readiness for critical systems",
          title: "UPS Battery Maintenance",
        },
      ],
    },
    {
      title: "CCTV and Connectivity Expansion",
      category: "Security",
      summary:
        "Installed and expanded CCTV surveillance and connectivity systems to strengthen monitoring coverage, improve field visibility, and support more reliable communication infrastructure.",
      metrics: [
        "Expanded surveillance coverage",
        "Improved site visibility",
        "Enhanced connectivity reach",
      ],
      tags: ["CCTV", "Connectivity", "Field Support", "Security Monitoring"],
      images: [
        {
          src: "/images/CCTV&Radio.jpeg",
          alt: "CCTV camera installation and connectivity expansion project in progress across facility locations",
          title: "CCTV and Connectivity Expansion",
        },
      ],
    },
    {
      title: "Inside the Plant Installations",
      category: "Field Work",
      summary:
        "Delivered plant-side installation, configuration, and equipment support in active industrial environments, improving deployment readiness and technical support continuity.",
      metrics: [
        "On-site technical execution",
        "Equipment installation support",
        "Improved deployment readiness",
      ],
      tags: ["Plant Operations", "Field Engineering", "Installations"],
      images: [
        {
          src: "/images/InsidePlant.jpeg",
          alt: "Louis Okperiruisi carrying out technical installation and field support inside an industrial plant",
          title: "Inside the Plant",
        },
        {
          src: "/images/network-troubleshooting.jpeg",
          alt: "Louis Okperiruisi performing field technical support and equipment maintenance in an industrial plant",
          title: "Industrial Field Support",
        },
      ],
    },
    {
      title: "Internet Connectivity Restoration",
      category: "Field Work",
      summary:
        "Restored connectivity through field troubleshooting, equipment handling, and infrastructure support work in operational environments.",
      metrics: [
        "Restored connectivity service",
        "Reduced service interruption",
        "Improved operational continuity",
      ],
      tags: ["Connectivity", "Troubleshooting", "Restoration"],
      images: [
        {
          src: "/images/field-work.jpeg",
          alt: "Louis Okperiruisi performing field technical support and connectivity-related maintenance in an industrial plant",
          title: "Connectivity Restoration",
        },
      ],
    },
    {
      title: "Radio, RFID and Biometric Installation",
      category: "Security",
      summary:
        "Installed and supported radio, RFID, and biometric devices across field environments for access control, operations support, and security visibility.",
      metrics: [
        "Improved access technology rollout",
        "Field installation support",
        "Expanded security device footprint",
      ],
      tags: ["Radio", "RFID", "Biometric", "Access Control"],
      images: [
        {
          src: "/images/Radio&FRID.jpeg",
          alt: "Radio, RFID, and biometric system installation carried out in field operations environment",
          title: "Radio, RFID and Biometric Installation",
        },
      ],
    },
    {
      title: "Enterprise IT Operations",
      category: "Office",
      summary:
        "Provided enterprise support, active monitoring, and structured system oversight to support daily business operations and end-user continuity.",
      metrics: [
        "Enterprise support delivery",
        "Operational monitoring",
        "Daily systems coordination",
      ],
      tags: ["IT Support", "Monitoring", "Operations"],
      images: [
        {
          src: "/images/office-work.jpeg",
          alt: "Louis Okperiruisi working at a desk during enterprise IT operations and system monitoring",
          title: "Enterprise IT Operations",
        },
      ],
    },
  ];

  const featuredCaseStudy = {
    title: "Featured Case Study — AI Security Middleware",
    subtitle: "Protecting AI applications with layered security controls",
    challenge:
      "Build a practical middleware layer for AI systems that can reduce abuse, detect malicious prompt injection, protect sensitive data, and create usable audit visibility.",
    action:
      "Created a FastAPI-based middleware with JWT authentication, rate limiting, prompt injection detection, PII masking, real-time logging, local testing, and attack simulation from an attacker perspective.",
    result:
      "Produced a working AI security prototype that blocks malicious requests, masks sensitive data, enforces request control, and records suspicious activity for monitoring and auditing.",
    tools: [
      "FastAPI",
      "Python",
      "JWT",
      "Rate Limiting",
      "PII Masking",
      "Logging",
    ],
    href: "/labs/Building-Security-AI-Systems.pdf",
  };

  const labs = [
    {
      title: "AI Security Middleware (Prompt Injection Defense)",
      category: "AI Security",
      summary:
        "Built an AI security middleware that detects prompt injection, enforces rate limits, masks PII, and logs suspicious activity in real time using FastAPI and Python.",
      outcomes: [
        "Blocked malicious prompt injection requests",
        "Enforced API rate limiting",
        "Masked email and phone PII",
      ],
      tools: ["FastAPI", "Python", "JWT", "AI Security"],
      href: "/labs/Building-Security-AI-Systems.pdf",
    },
    {
      title: "OPSWAT MetaDefender Endpoint Security Lab",
      category: "Endpoint Security",
      summary:
        "Configured endpoint security policies including malware detection, DLP, patch management, application control, and threat monitoring workflows.",
      outcomes: [
        "Configured malware detection policies",
        "Applied DLP and device control concepts",
        "Documented security policy workflow",
      ],
      tools: ["OPSWAT", "Endpoint Security", "Policy Configuration"],
      href: "/labs/OPSWAT-MetaDefender-IT-Access-Platform.pdf",
    },
    {
      title: "Wazuh SIEM Deployment Lab",
      category: "SIEM / SOC",
      summary:
        "Deployed and configured Wazuh SIEM with agent setup, file integrity monitoring, Windows Defender visibility, and endpoint threat detection workflows.",
      outcomes: [
        "Deployed Wazuh environment",
        "Configured agent monitoring",
        "Enabled FIM and alert visibility",
      ],
      tools: ["Wazuh", "SIEM", "FIM", "SOC"],
      href: "/labs/Wazuh-Installation-User-Cases-(SIEM).pdf",
    },
    {
      title: "Windows PowerShell Exploitation Detection with Slack Alerts",
      category: "Detection Engineering",
      summary:
        "Extended the Wazuh lab with Windows PowerShell exploitation-detection techniques and Slack integration for alert delivery and monitoring visibility.",
      outcomes: [
        "Monitored PowerShell exploitation behavior",
        "Integrated Slack alert notifications",
        "Improved detection and response visibility",
      ],
      tools: ["Wazuh", "PowerShell", "Slack", "Alerting"],
      href: "/labs/Wazuh-Installation-User-Cases-(SIEM).pdf",
    },
    {
      title: "Google Cloud Security Capstone",
      category: "Cloud Security",
      summary:
        "Investigated and remediated cloud security weaknesses using Google Cloud Security Command Center and related controls.",
      outcomes: [
        "Identified cloud vulnerabilities",
        "Restricted risky exposure",
        "Validated remediation steps",
      ],
      tools: ["Google Cloud", "Security Command Center", "Cloud Security"],
      href: "/labs/Google-Cloud-Cybersecurity-Capstone-Project.pdf",
    },
    {
      title: "Web Application Assessment with Nessus and Qualys",
      category: "Vulnerability Assessment",
      summary:
        "Performed web application vulnerability assessment using Nessus and Qualys, reviewed findings, and documented remediation recommendations.",
      outcomes: [
        "Ran Nessus-based web app scan",
        "Reviewed findings and severity",
        "Used Qualys for certificate visibility",
      ],
      tools: ["Nessus", "Qualys", "Web Security", "Certificate View"],
      href: "/labs/WebApp-Scan-Using-Nesus&Qualys-Qualys-Certview.pdf",
    },
    {
      title: "Phishing Email Investigation & IOC Analysis",
      category: "Email Security / SOC",
      summary:
        "Investigated suspicious phishing emails, extracted useful metadata, identified IOCs such as malicious URLs, suspicious IP addresses, sender anomalies, and documented mitigation recommendations.",
      outcomes: [
        "Analyzed suspicious email metadata",
        "Identified phishing IOCs and sender anomalies",
        "Documented mitigation recommendations",
      ],
      tools: ["PhishTool", "VirusTotal", "urlscan.io", "IOC Analysis"],
      href: "/labs/Phishing-Email-Investigation&IOC-Analysis.pdf",
    },
  ];

  const certifications = [
    {
      name: "CompTIA SecAI+",
      issuer: "LinkedIn Learning",
      year: "2026",
      href: "/certificates/CompTIA_SecAI.pdf",
      tier: "Core",
    },
    {
      name: "ISO/IEC 27001:2022 Information Security Associate",
      issuer: "SKILLFRONT",
      year: "2025",
      href: "/certificates/ISO_27001.pdf",
      tier: "Core",
    },
    {
      name: "Google Cloud Cybersecurity",
      issuer: "Google Cloud",
      year: "2025",
      href: "/certificates/Google_cloud_cybersecurity.pdf",
      tier: "Core",
    },
    {
      name: "CompTIA Security+ Prep",
      issuer: "Charles Sturt University",
      year: "2025",
      href: "/certificates/CompTIA_Security+.pdf",
      tier: "Core",
    },
    {
      name: "Certified in Cybersecurity",
      issuer: "ISC2",
      year: "2025",
      href: "/certificates/CC_certificate.pdf",
      tier: "Core",
    },
    {
      name: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      year: "2024",
      href: "/certificates/CyberOps.pdf",
      tier: "Core",
    },
    {
      name: "Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      year: "2024",
      href: "/certificates/Artificial_Intelligence.pdf",
      tier: "Supporting",
    },
    {
      name: "Junior Cybersecurity Analyst",
      issuer: "Cisco Networking Academy",
      year: "2024",
      href: "/certificates/Junior_Cybersecurity_Analyst.pdf",
      tier: "Supporting",
    },
    {
      name: "Network Defense",
      issuer: "Cisco Networking Academy",
      year: "2024",
      href: "/certificates/Network_Defense.pdf",
      tier: "Supporting",
    },
    {
      name: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      year: "2024",
      href: "/certificates/Cyber_Threat_Management.pdf",
      tier: "Supporting",
    },
    {
      name: "CCSK v4.1 Foundation Training",
      issuer: "Cloud Security Alliance",
      year: "2023",
      href: "/certificates/CCSK_Certificate.pdf",
      tier: "Supporting",
    },
    {
      name: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      year: "2023",
      href: "/certificates/Endpoint_Security.pdf",
      tier: "Supporting",
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      year: "2023",
      href: "/certificates/Cyberseucrity_Essential.pdf",
      tier: "Supporting",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy / Ingressive for Good",
      year: "2023",
      href: "/certificates/Intro_Cybersecurity.pdf",
      tier: "Supporting",
    },
    {
      name: "Google IT Support Certificate",
      issuer: "Google / Coursera",
      year: "2022",
      href: "/certificates/Google_IT_Support.pdf",
      tier: "Supporting",
    },
  ];

  const certificationHighlights = [
    "15+ cybersecurity and IT credentials",
    "ISC2 Certified in Cybersecurity",
    "Cisco CyberOps Associate",
    "Google Cloud Cybersecurity",
    "CompTIA SecAI+ learning path",
    "ISO/IEC 27001 security credential",
  ];

  const awards = [
    {
      name: "Best Administrative Staff of the Month",
      issuer: "Capitol Hill Hospitals Ltd",
      year: "2023",
      href: "/images/certRecognition.jpeg",
    },
  ];


  const projectFilters = [
    "All",
    "Infrastructure",
    "Security",
    "Field Work",
    "Office",
  ];

  const labFilters = [
    "All",
    "AI Security",
    "Endpoint Security",
    "SIEM / SOC",
    "Detection Engineering",
    "Cloud Security",
    "Vulnerability Assessment",
    "Email Security / SOC",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isHeroPaused) return;

    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroSlides.length, isHeroPaused]);

  useEffect(() => {
    if (isRackPaused) return;

    const timer = setInterval(() => {
      setRackIndex((prev) => (prev + 1) % rackSlider.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [rackSlider.length, isRackPaused]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        projectFilter === "All" || project.category === projectFilter;
      const query = projectSearch.trim().toLowerCase();
      const haystack =
        `${project.title} ${project.summary} ${project.category} ${project.tags.join(" ")}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [projectFilter, projectSearch]);

  const filteredLabs = useMemo(() => {
    return labs.filter((lab) => {
      const matchesFilter = labFilter === "All" || lab.category === labFilter;
      const query = labSearch.trim().toLowerCase();
      const haystack =
        `${lab.title} ${lab.summary} ${lab.category} ${lab.tools.join(" ")} ${lab.outcomes.join(" ")}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [labFilter, labSearch]);

  const coreCertifications = certifications.filter((cert) => cert.tier === "Core");
  const supportingCertifications = certifications.filter(
    (cert) => cert.tier !== "Core"
  );
  const featuredProject = projects.find((project) => project.featured);

  const nextRack = () => setRackIndex((prev) => (prev + 1) % rackSlider.length);
  const prevRack = () =>
    setRackIndex((prev) => (prev - 1 + rackSlider.length) % rackSlider.length);

  const openProjectModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const nextModalImage = () => {
    if (!selectedProject) return;
    setSelectedImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevModalImage = () => {
    if (!selectedProject) return;
    setSelectedImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-cyan-400 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.2em] text-cyan-300"
          >
            LOUIS PORTFOLIO
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="/resume/louis-okperiruisi-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 transition hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume/louis-okperiruisi-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_35%)]" />

        <motion.div
          className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-4 pb-10 lg:px-10 lg:pt-6 lg:pb-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                {!profileImageError ? (
                  <img
                    src="/images/profile.jpg"
                    alt="Louis Okperiruisi professional portrait"
                    className="h-16 w-16 rounded-full border border-cyan-300/30 object-cover shadow-lg shadow-cyan-500/10"
                    onError={() => setProfileImageError(true)}
                    fetchPriority="high"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-lg font-bold text-cyan-200">
                    LO
                  </div>
                )}

             <div className="inline-flex max-w-full rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
  <span className="sm:whitespace-nowrap">
    Cybersecurity Analyst | SOC • SIEM • AI Security • Vulnerability Management
  </span>
</div>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Louis A. Okperiruisi
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I secure systems, improve infrastructure, support enterprise users, 
              and deliver practical technical outcomes across cybersecurity, operations, 
              field environments, and AI-enabled security systems.
              </p>

              <div className="mt-5 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  Currently Seeking
                </p>
                <p className="mt-2 text-slate-300">
                  SOC Analyst • Cybersecurity Analyst • IT Support / Security
                  Operations • Cloud Security roles
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
                  <UserRoundCheck size={15} /> Open to Work
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
                  <MapPin size={15} /> Nigeria
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
                  Remote / Hybrid / On-site
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
                  Open to Relocation
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-400/30"
                >
                  Explore Projects
                </a>
                <a
                  href="#labs"
                  className="rounded-2xl border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/5 hover:-translate-y-0.5"
                >
                  Cybersecurity Labs
                </a>
                <a
                  href="/resume/louis-okperiruisi-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-center font-semibold text-cyan-200 transition hover:bg-cyan-300/20 hover:-translate-y-0.5"
                >
                  <Download size={16} className="mr-2 inline" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/5 hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
                <a
                  href="mailto:Louistinteds2001@yahoo.com"
                  className="inline-flex items-center gap-2 transition hover:text-cyan-200"
                >
                  <Mail size={16} /> Louistinteds2001@yahoo.com
                </a>
                <a
                  href="https://www.linkedin.com/in/louis-okperiruisi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-cyan-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1QOvcC-GDi1y5CM0hPNggeV-DMrRjv577?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-cyan-200"
                >
                  <FolderOpen size={16} /> Portfolio Drive
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              <div
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
                onMouseEnter={() => setIsHeroPaused(true)}
                onMouseLeave={() => setIsHeroPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroSlides[heroIndex].src}
                    src={heroSlides[heroIndex].src}
                    alt={heroSlides[heroIndex].alt}
                    className="h-80 w-full object-cover object-center"
                    initial={{ opacity: 0.25, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.25 }}
                    transition={{ duration: 0.6 }}
                    fetchPriority="high"
                  />
                </AnimatePresence>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-400">Featured Visual</div>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {heroSlides[heroIndex].title}
                      </h3>
                    </div>

                    <div className="flex gap-2">
                      {heroSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setHeroIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            heroIndex === index ? "bg-cyan-300" : "bg-white/20"
                          }`}
                          aria-label={`Go to hero slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {heroSlides[heroIndex].description}
                  </p>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      <section id="what-i-do" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">

    {/* LEFT SIDE — WHAT I DO */}
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
        What I Do
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Security, Infrastructure, and Operational Support
      </h2>

        <p className="mt-5 max-w-2xl text-slate-400 leading-7 text-left md:text-justify">
       I deliver cybersecurity, infrastructure, and IT operational support across enterprise and field environments. My work focuses on securing systems, improving visibility, and maintaining operational continuity through practical execution and real-world problem-solving. I have deployed SIEM solutions, conducted vulnerability assessments, strengthened endpoint security, and implemented infrastructure improvements, including rack standardization, network device upgrades, access point and radio deployments, installation, configuration, and connectivity restoration. I also build AI-driven security solutions, including middleware that detects prompt injection, enforces rate limits, and protects sensitive data in real time.
      </p>
    </div>

    {/* RIGHT SIDE — SECURITY TOOL SNAPSHOT */}
    <div className="flex justify-center lg:justify-end mt-2 lg:mt-16">
      <div className="w-full max-w-[360px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">

        <h3 className="mb-5 text-center text-xs tracking-widest text-cyan-400">
          SECURITY TOOL SNAPSHOT
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            "Qualys",
            "Nessus",
            "OWASP ZAP",
            "Snyk",
            "Wazuh",
            "Google Cloud",
            "MetaDefender",
            "Endpoint Central",
          ].map((tool) => (
            <div
              key={tool}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-2 py-3 text-xs text-slate-300 text-center"
            >
              {tool}
            </div>
          ))}
        </div>

       <p className="mt-8 text-center text-xs text-slate-400 leading-relaxed">
  Experience across{" "}
  <span className="text-cyan-200 font-medium">
    security operations
  </span>,{" "}
  <span className="text-cyan-200 font-medium">
    vulnerability assessment
  </span>,{" "}
  and{" "}
  <span className="text-cyan-200 font-medium">
    cloud security
  </span>
</p>

      </div>
    </div>

  </div>
</section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Operational Impact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Measurable Results
          </h2>

    <p className="mt-3 max-w-3xl text-slate-400">
  Measurable outcomes delivered across cybersecurity, infrastructure, endpoint security, and AI security projects.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {impactStats.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20"
        >
          <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
            <Icon size={20} />
          </div>

          <div className="text-3xl font-bold text-white">{item.value}</div>

          <div className="mt-2 text-lg font-semibold text-slate-100">
            {item.label}
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            {item.subtext}
          </p>
        </motion.div>
      );
    })}
  </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10" id="about">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Professional Summary
            </h2>
           <p className="mt-4 leading-8 text-slate-300 text-left md:text-justify">
  Cybersecurity Analyst specializing in SOC operations, vulnerability assessment, endpoint security, and infrastructure support across enterprise and field environments. I have deployed SIEM solutions, conducted vulnerability assessments, and implemented endpoint security controls to improve visibility and reduce operational risk. Beyond traditional security operations, I build AI-driven security systems, including a FastAPI-based middleware that detects prompt injection, enforces rate limits, masks sensitive data, and logs suspicious activity in real time. I focus on delivering practical, measurable security outcomes by combining security operations, infrastructure understanding, and real-world execution.
</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Core Competencies
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10" id="tools">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Tools & Platforms
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Technologies I’ve Worked With
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
Technologies used to monitor threats, assess vulnerabilities, secure endpoints, and support real-world cybersecurity operations across enterprise and cloud environments.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {toolsByGroup.map((group) => (
            <div
              key={group.group}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-cyan-300">
                <Wrench size={16} />
                <span className="text-sm uppercase tracking-[0.18em]">
                  {group.group}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {featuredProject && (
        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl shadow-cyan-900/10">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  <Sparkles size={16} />
                  Featured Project
                </div>
                <h2 className="mt-4 text-3xl font-bold text-white">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                  {featuredProject.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {featuredProject.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/labs/Building-Security-AI-Systems.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    View Full Project
                  </a>
                  <a
                    href="#labs"
                    className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    Explore Labs
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/60">
                <img
                  src="/images/ai-security-project.jpeg"
                  alt="AI security middleware project visual"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10" id="projects">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Premium Project Portfolio
            </h2>
            <p className="mt-3 max-w-3xl text-slate-400">
              Real-world technical work across AI security, cybersecurity
              operations, structured cabling, infrastructure cleanup,
              connectivity, and physical security deployment.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevRack}
              className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/5"
              aria-label="Previous slider image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextRack}
              className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/5"
              aria-label="Next slider image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            onMouseEnter={() => setIsRackPaused(true)}
            onMouseLeave={() => setIsRackPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={rackSlider[rackIndex].src}
                src={rackSlider[rackIndex].src}
                alt={rackSlider[rackIndex].alt}
                className="h-full w-full object-cover"
                initial={{ opacity: 0.2, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2, x: -20 }}
                transition={{ duration: 0.45 }}
                loading="lazy"
                decoding="async"
              />
            </AnimatePresence>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Image Slider
            </div>
            <h3 className="mt-3 text-2xl font-bold text-white">
              {rackSlider[rackIndex].label}
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              {rackSlider[rackIndex].description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {rackSlider[rackIndex].tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {rackSlider.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setRackIndex(index)}
                  aria-label={`Go to project slider image ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    rackIndex === index ? "bg-cyan-300" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  projectFilter === filter
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
              placeholder="Search projects"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="grid grid-cols-2 gap-3">
                {project.images.slice(0, 4).map((image, imageIndex) => (
                  <button
                    key={image.src}
                    onClick={() => openProjectModal(project, imageIndex)}
                    className={`overflow-hidden rounded-2xl border border-white/10 text-left ${
                      project.images.length === 1 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.01] hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-sm uppercase tracking-[0.16em] text-cyan-300">
                  {project.category}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-slate-300">{project.summary}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => openProjectModal(project, 0)}
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:-translate-y-0.5"
                  >
                    Open Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl shadow-cyan-900/10">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Featured Case Study
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              {featuredCaseStudy.title}
            </h2>
            <p className="mt-3 text-slate-300">{featuredCaseStudy.subtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <h3 className="text-lg font-semibold text-white">Challenge</h3>
              <p className="mt-3 text-slate-300 leading-7">
                {featuredCaseStudy.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <h3 className="text-lg font-semibold text-white">Action</h3>
              <p className="mt-3 text-slate-300 leading-7">
                {featuredCaseStudy.action}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <h3 className="text-lg font-semibold text-white">Result</h3>
              <p className="mt-3 text-slate-300 leading-7">
                {featuredCaseStudy.result}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredCaseStudy.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={featuredCaseStudy.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              View Full Case Study <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10" id="labs">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Technical Labs
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Cybersecurity Labs
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
          Lab projects showcasing real-world application of AI security, endpoint protection, SIEM deployment, detection engineering, phishing investigation, cloud security, and vulnerability assessment.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {labFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setLabFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  labFilter === filter
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              value={labSearch}
              onChange={(e) => setLabSearch(e.target.value)}
              placeholder="Search labs"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredLabs.map((lab) => (
            <motion.a
              key={lab.title}
              href={lab.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-6 shadow-xl shadow-black/20 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
                    {lab.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug text-white group-hover:text-cyan-200">
                    {lab.title}
                  </h3>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <Shield size={20} />
                </div>
              </div>

              <p className="mt-4 text-slate-300 leading-7">{lab.summary}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {lab.outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {lab.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition group-hover:translate-x-0.5">
                  View Lab File <ExternalLink size={14} />
                </span>
                <span className="text-xs text-slate-500">Case Study</span>
              </div>
            </motion.a>
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
            No labs matched your search. Try another keyword or choose a
            different category.
          </div>
        )}
      </section>
{/* EXPERIENCE */}
<section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
  <div className="mb-12">
    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
      Career Journey
    </p>
    <h2 className="mt-2 text-3xl font-bold text-white">
      Experience Timeline
    </h2>
    <p className="mt-3 max-w-3xl text-slate-400">
      Progressive experience across enterprise IT support, security operations,
      vulnerability assessment, endpoint security, and cybersecurity engineering.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2">
    {[
      {
        label: "CURRENT ROLE",
        role: "IT Support Officer",
        company: "Sterling Oil Exploration & Energy Production Company",
        period: "May 2024 – Present",
        highlight: "300+ users supported",
        stack: ["IT Support", "Asset Management", "System Hardening", "Troubleshooting"],
        points: [
          "Supported 300+ enterprise users across IT operations.",
          "Managed troubleshooting, upgrades, asset lifecycle, and system hardening.",
          "Improved ticket resolution time by 40% through structured workflows.",
        ],
      },
      {
        label: "SECURITY ENGINEERING",
        role: "Cybersecurity Engineer / Analyst",
        company: "Hagital Consulting, Nigeria",
        period: "Jan 2025 – April 2026",
        highlight: "Vulnerability assessment & API security",
        stack: ["Nessus", "OWASP ZAP", "Snyk & Aikido", "Qualys", "Remediation"],
        points: [
          "Conducted vulnerability scans using Nessus and OWASP ZAP.",
          "Improved security posture through Qualys and API security reviews.",
          "Worked across patching, SAST/DAST, remediation, and endpoint security operations.",
        ],
      },
      {
        label: "SOC OPERATIONS",
        role: "SOC Analyst / Cybersecurity Analyst",
        company: "Cyber & Forensics Security Solutions",
        period: "Nov 2023 – May 2024",
        highlight: "SIEM monitoring & incident triage",
        stack: ["SIEM", "Log Analysis", "Incident Escalation", "Threat Hunting"],
        points: [
          "Monitored and analyzed security alerts using SIEM tools.",
          "Performed triage, log correlation, and incident escalation.",
          "Supported threat hunting, malware analysis, and containment workflows.",
        ],
      },
      {
        label: "HEALTHCARE IT",
        role: "Senior IT Support Officer",
        company: "Capitol Hill Hospitals, Nigeria",
        period: "Jan 2021 – Nov 2023",
        highlight: "95% first-contact resolution",
        stack: ["EHR Support", "Ticketing", "Windows Support", "Workstation Deployment"],
        points: [
          "Achieved 95% issue resolution and maintained 99.999% system uptime through proactive support and monitoring.",
          "Reduced response time from 4 hours to 1 hour by implementing a more efficient ticketing workflow.",
          "Deployed 150+ workstations and trained 50+ users monthly on EHR systems and IT processes.",
        ],
      },
    ].map((job) => (
      <div
        key={`${job.role}-${job.company}`}
        className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/20"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs tracking-widest text-cyan-300">
            {job.label}
          </span>
          <span className="text-xs text-slate-400">{job.period}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {job.role}
        </h3>
        <p className="text-sm text-cyan-400">{job.company}</p>

        <div className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          {job.highlight}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3 text-sm text-slate-300">
          {job.points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-[2px] border border-cyan-300 bg-cyan-300/20"></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
      <section
        className="mx-auto max-w-7xl px-6 py-14 lg:px-10"
        id="certifications"
      >
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Certifications Showcase
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Verified learning and professional credentials across cybersecurity,
            cloud security, IT support, and security operations.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-bold text-white">
              {certifications.length}+
            </div>
            <div className="mt-2 text-slate-400">Total credentials displayed</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:col-span-2">
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">
              Highlights
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {certificationHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white">
            Core Certifications
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreCertifications.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-6 shadow-xl shadow-black/20 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                      Certificate
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  {cert.year}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug text-white transition group-hover:text-cyan-200">
                {cert.name}
              </h3>

              <div className="mt-8 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition group-hover:translate-x-0.5">
                  View Certificate <ExternalLink size={14} />
                </span>
                <span className="text-xs text-slate-500">PDF</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mb-8 mt-14">
          <h3 className="text-xl font-semibold text-white">
            Supporting Certifications
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportingCertifications.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-6 shadow-xl shadow-black/20 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                      Certificate
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  {cert.year}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug text-white transition group-hover:text-cyan-200">
                {cert.name}
              </h3>

              <div className="mt-8 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition group-hover:translate-x-0.5">
                  View Certificate <ExternalLink size={14} />
                </span>
                <span className="text-xs text-slate-500">PDF</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10" id="awards">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Recognition
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Awards & Recognition
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((award) => (
            <a
              key={award.name}
              href={award.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200">
                    {award.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{award.issuer}</p>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  {award.year}
                </span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300 group-hover:border-cyan-300/30 group-hover:text-cyan-100">
                View item <BadgeCheck size={14} />
              </div>
            </a>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10" id="contact">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl shadow-cyan-900/10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Let’s Connect
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Open to cybersecurity, SOC, cloud security, and IT operations opportunities
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Recruiters, hiring managers, and collaborators can review my
                projects, AI security work, labs, certifications, experience,
                and downloadable resume from this portfolio.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
                  <UserRoundCheck size={15} /> Open to Work
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
                  <MapPin size={15} /> Nigeria
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
                  Response within 24–48 hours
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:Louistinteds2001@yahoo.com"
                className="rounded-2xl bg-white/10 px-4 py-3 text-center font-medium text-white transition hover:bg-white/15 hover:-translate-y-0.5"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/louis-okperiruisi"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/10 px-4 py-3 text-center font-medium text-white transition hover:bg-white/15 hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
              <a
                href="/resume/louis-okperiruisi-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-center font-medium text-white transition hover:bg-white/15 hover:-translate-y-0.5"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="https://drive.google.com/drive/folders/1QOvcC-GDi1y5CM0hPNggeV-DMrRjv577?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                <FolderOpen size={16} /> View Portfolio Drive
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:justify-between lg:px-10">
          <div>
            <p className="font-semibold tracking-widest text-cyan-300">
              LOUIS PORTFOLIO
            </p>
            <p className="mt-2">
              Cybersecurity Analyst | SOC Analyst | IT Support Specialist
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#projects" className="hover:text-cyan-200">
              Projects
            </a>
            <a href="#labs" className="hover:text-cyan-200">
              Labs
            </a>
            <a href="#contact" className="hover:text-cyan-200">
              Contact
            </a>
          </div>

          <div>
            <p>© {new Date().getFullYear()} Louis A. Okperiruisi</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm"
          >
            <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-8">
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.98 }}
                className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl"
              >
                <button
                  onClick={closeProjectModal}
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-900/70 p-2 text-white hover:bg-slate-800"
                  aria-label="Close gallery"
                >
                  <X size={18} />
                </button>

                <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="relative bg-black">
                    <img
                      src={selectedProject.images[selectedImageIndex].src}
                      alt={selectedProject.images[selectedImageIndex].alt}
                      className="h-[60vh] w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevModalImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/70 p-3 text-white hover:bg-slate-800"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={nextModalImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/70 p-3 text-white hover:bg-slate-800"
                          aria-label="Next image"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="text-sm uppercase tracking-[0.16em] text-cyan-300">
                      {selectedProject.category}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="mt-4 text-slate-300">
                      {selectedProject.summary}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {selectedProject.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {selectedProject.images.map((image, idx) => (
                        <button
                          key={image.src}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`overflow-hidden rounded-xl border ${
                            selectedImageIndex === idx
                              ? "border-cyan-300"
                              : "border-white/10"
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-20 w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}