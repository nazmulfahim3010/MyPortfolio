/**
 * Centralized Studio Portfolio Data Architecture
 * MD NAZMUL HASAN FAHIM
 * 
 * Single source of truth for all content, credentials, and case studies.
 */

export const portfolioData = {
  profile: {
    fullName: "MD NAZMUL HASAN FAHIM",
    splitName: {
      first: "MD NAZMUL",
      last: "HASAN FAHIM"
    },
    shortName: "NAZMUL FAHIM",
    masthead: "FAHIM / MNHF",
    monogram: "MNHF",
    heroRole: "SOFTWARE ENGINEERING STUDENT",
    subRoles: ["PROGRAMMER", "EDUCATOR", "TECHNOLOGY ENTHUSIAST", "STUDENT LEADER"],
    academicStanding: "CGPA 3.91",
    brandConcept: "BUILD. SOLVE. TEACH.",
    primaryStatement: "Building technology, solving problems, and helping others learn.",
    editorialQuote: "I build technology, solve problems, teach others, and lead communities.",
    bio: [
      "I am a proactive Software Engineering student with a distinguished academic record (CGPA 3.91), pairing low-level computational discipline with extensive experience in technical instruction and student leadership.",
      "Beyond core software engineering across C, C++, and Python, my strongest differentiator is the synthesis of analytical problem-solving and educational mentorship. Over the past 5+ years, I have guided more than 10+ private tutoring students, served as an ACM Instructor, and facilitated structured programming problem-solving curricula.",
      "In institutional capacities—notably as Additional Co-Curricular Secretary and ACM Instructor—I coordinate initiatives across students, faculty, teams, and administration, transforming complex goals into structured, high-impact programs."
    ],
    metadataBlocks: [
      { label: "CGPA", value: "3.91", detail: "Scale of 4.00" },
      { label: "TEACHING", value: "5+ YEARS", detail: "Instruction & Mentorship" },
      { label: "FOCUS", value: "SOFTWARE ENG.", detail: "Systems & Algorithms" },
      { label: "ROLE", value: "ACM INSTRUCTOR", detail: "Technical Leadership" }
    ],
    assets: {
      portraitImage: "/assets/images/portrait.jpg",
      introVideo: "/assets/video/intro.mp4",
      favicon: "/assets/images/favicon.svg"
    },
    coreStrengths: [
      { name: "Communication", description: "Articulating complex technical concepts with clarity and precision." },
      { name: "Coordination", description: "Aligning multi-disciplinary teams, faculty, and student bodies seamlessly." },
      { name: "Leadership", description: "Guiding student initiatives, fostering collaborative culture, and driving execution." },
      { name: "Teaching", description: "5+ years developing curriculum and mentoring across academic and programming topics." },
      { name: "Mentoring", description: "Personalized guidance helping 10+ students unlock analytical problem-solving." },
      { name: "Problem Solving", description: "Systematic algorithmic thinking using structured, modular approaches." },
      { name: "Adaptability", description: "Rapid assimilation of new paradigms, technologies, and institutional challenges." },
      { name: "Event Planning", description: "End-to-end execution of campus events, hackathons, and academic workshops." },
      { name: "Team Management", description: "Empowering team members, delegating effectively, and ensuring milestone delivery." }
    ]
  },

  disciplines: [
    {
      number: "01",
      title: "BUILD",
      role: "Software Engineering & Architecture",
      description: "Low-level systems programming in C and C++, modular software architecture, data structure implementation, and deterministic memory mechanics.",
      tags: ["C++", "C", "Object-Oriented Design", "Memory Safety", "System Foundations"]
    },
    {
      number: "02",
      title: "SOLVE",
      role: "Algorithms & Technical Exploration",
      description: "Analytical problem solving, time/space complexity optimization, coursework mastery, and active exploration into computer vision and applied intelligence.",
      tags: ["Algorithmic Design", "Discrete Mathematics", "Data Structures", "Computer Vision Concepts"]
    },
    {
      number: "03",
      title: "TEACH",
      role: "Programming Education & Mentorship",
      description: "5+ years dedicated to breaking down theoretical concepts into rebuildable mental models through ACM instruction, private tutoring, and structured workshops.",
      tags: ["First-Principles Pedagogy", "ACM Workshops", "10+ Students", "Curriculum Design"]
    },
    {
      number: "04",
      title: "LEAD",
      role: "Student Leadership & Coordination",
      description: "Steering institutional initiatives as Additional Co-Curricular Secretary, managing cross-functional student teams, and bridging student aspirations with institutional execution.",
      tags: ["Institutional Liaison", "Event Execution", "Team Management", "Public Communication"]
    }
  ],

  featuredProject: {
    id: "featured-flagship",
    number: "01 / FEATURED WORK",
    title: "Algorithmic Problem Solving & Data Structures Hub",
    category: "Software Engineering / Algorithms & Data Structures",
    tagline: "High-performance C++ & C algorithmic architecture engineered for computational efficiency, cache awareness, and invariant verification.",
    problem: "Students and emerging engineers often struggle to bridge abstract algorithmic proofs with concrete, memory-safe pointer manipulation and boundary validation in C and C++.",
    approach: "Designed a modular, self-verifying architecture where each data structure is isolated with invariant assertions, comprehensive edge-case harnesses, and memory leak profiling.",
    technology: ["C++", "C", "Standard Template Library", "Algorithm Optimization", "Dynamic Memory"],
    result: "Achieved 100% leak-free execution across rigorous stress tests; deployed as the core teaching asset during ACM programming sessions to illustrate pointer safety.",
    whatILearned: "Clarity of code structure and visual state tracing reduces student conceptual debugging time by more than half, proving low-level engineering and educational clarity reinforce one another.",
    myContribution: "Architected the algorithmic implementations, structured clean test suites, authored technical proofs, and integrated invariant harnesses.",
    github: "https://github.com/nazmulfahim3010",
    liveDemo: null,
    caseStudy: {
      overview: "An architectural deep-dive into constructing resilient, self-verifying algorithmic modules in C++ and C, emphasizing boundary-safety, cache-friendly data layout, and intuitive pedagogical documentation.",
      problem: "Traditional algorithmic references frequently isolate theoretical pseudocode from real-world pointer arithmetic, cache locality, and asymptotic trade-offs. Learners often lack a clean bridge between concept and low-level mechanics.",
      approach: "Adopted a test-driven, modular philosophy: each data structure (trees, disjoint sets, graph representations) is isolated in pure C/C++ with invariant assertions, comprehensive edge-case suites, and memory profiling.",
      technology: "Utilized modern C++, standard template library internals, C dynamic allocation handlers, and POSIX memory analysis utilities.",
      implementation: "Constructed clear separation between abstract interface declarations, encapsulated memory handlers, and algorithmic drivers. Implemented stress-testing harnesses that generate randomized combinatorial inputs.",
      results: "Achieved zero memory-leak execution across all stress suites; successfully deployed as teaching examples during ACM instruction sessions to illustrate pointer safety and time complexity.",
      lessonsLearned: "First-principles documentation combined with visual state tracing reduces student conceptual debugging time by more than half, proving that clarity of code structure is as crucial as algorithmic asymptotic order."
    }
  },

  projects: [
    {
      id: "project-academic-management",
      number: "02",
      title: "Structured Academic Data & Evaluation Model",
      category: "Database Engineering & Relational Design",
      tagline: "Normalized relational schema and query engine for institutional grading, student performance metrics, and curriculum progression.",
      problem: "Educational tracking often suffers from denormalized datasets, conflicting grade histories, and cumbersome reporting overhead across student cohorts.",
      approach: "Engineered a 3NF-normalized relational database architecture with strict foreign key constraints, composite term keys, and view-based abstraction for GPA computation.",
      implementation: "Built normalized tables for Students, Courses, Prerequisites, Enrollments, and Evaluations with stored query procedures that compute running metrics.",
      technologies: ["Relational Databases", "SQL Query Optimization", "Schema Normalization", "ER Modeling"],
      myContribution: "Formulated the relational schema, designed ER diagrams, wrote complex join queries, and benchmarked query performance under simulated multi-semester loads.",
      result: "Demonstrates production-ready database design principles, maintaining 100% data integrity under concurrent evaluation updates.",
      github: "https://github.com/nazmulfahim3010",
      liveDemo: null,
      caseStudy: {
        overview: "A rigorous database engineering blueprint modeling the lifecycle of academic performance, attendance metrics, and course prerequisites.",
        problem: "Handling prerequisite dependency chains and multi-weight grading schemes in conventional flat spreadsheets generates high error rates and redundant manual calculations.",
        approach: "Engineered a normalized relational schema with strict foreign key constraints, composite keys for term enrollment, and view-based abstraction for GPA computation.",
        technology: "Relational SQL database engine, structured DDL/DML scripts, and stored view procedures.",
        implementation: "Built normalized tables for Students, Courses, Prerequisites, Enrollments, and Evaluations. Crafted stored queries that compute running CGPA and evaluate prerequisite readiness.",
        results: "Maintained mathematical consistency with zero redundant student record updates and sub-millisecond query execution on analytical aggregate queries.",
        lessonsLearned: "Enforcing business constraints at the database schema level fundamentally eliminates edge-case validation bugs in application layers."
      }
    },
    {
      id: "project-python-automation",
      number: "03",
      title: "Automated Academic Workflow & Utility Suite",
      category: "Python Systems & Workflow Automation",
      tagline: "Modular Python utility framework for parsing structured datasets, automating administrative digests, and batch record validation.",
      problem: "Repetitive manual data entry and report compilation for institutional campus initiatives consume excessive hours and introduce human transcription error.",
      approach: "Implemented a robust CLI pipeline using modular Python standard libraries, regex sanitization, defensive schema validation, and structured logging.",
      implementation: "Wrote distinct stages: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with automated summary statistics.",
      technologies: ["Python 3", "File I/O", "Data Parsing", "Automation Scripting", "CLI Architecture"],
      myContribution: "Created the parsing logic, designed CLI argument structures, implemented error-tolerant CSV/Excel handlers, and wrote automated unit tests.",
      result: "Successfully processed batches of hundreds of registration entries in seconds, flagging anomalies and producing clean attendance sheets.",
      github: "https://github.com/nazmulfahim3010",
      liveDemo: null,
      caseStudy: {
        overview: "An automated pipeline built in Python to ingest, cleanse, validate, and summarize institutional records with minimal human intervention.",
        problem: "Organizing committee leads frequently deal with unformatted registration spreadsheets, duplicate student entries, and inconsistent email records prior to workshops.",
        approach: "Implemented a robust CLI pipeline using modular Python standard libraries, regex sanitization, and structured logging.",
        technology: "Python 3, argparse, csv/openpyxl handlers, logging framework.",
        implementation: "Wrote distinct stages: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with summary statistics.",
        results: "Successfully processed batches of hundreds of entries in seconds, flagging anomalies and producing clean attendance sheets for campus workshops.",
        lessonsLearned: "Defensive input parsing and clear terminal feedback are critical when building tools meant to be operated by non-technical team coordinators."
      }
    }
  ],

  skills: {
    categories: [
      {
        id: "programming",
        title: "PROGRAMMING",
        description: "Core computational foundations, object-oriented architecture, and algorithmic design.",
        items: [
          { name: "C", level: "Advanced Foundation", tags: ["Memory Management", "Pointers", "Data Structures", "System Concepts"] },
          { name: "C++", level: "Advanced Problem Solving", tags: ["OOP", "STL", "Algorithm Optimization", "Competitive Fundamentals"] },
          { name: "Python", level: "Applied Development", tags: ["Automation", "Scripting", "Data Handling", "Modular Design"] }
        ]
      },
      {
        id: "database",
        title: "DATABASE",
        description: "Relational data structuring, query formulation, and persistent data architecture.",
        items: [
          { name: "Databases", level: "Structured Architecture", tags: ["Relational Design", "SQL Modeling", "Schema Normalization", "Query Logic"] }
        ]
      },
      {
        id: "tools",
        title: "TOOLS & PRODUCTIVITY",
        description: "Institutional reporting, analytical documentation, and collaborative workflows.",
        items: [
          { name: "Microsoft Office", level: "Professional Suite", tags: ["Excel Data Analysis", "Technical Documentation", "Institutional Presentations"] }
        ]
      },
      {
        id: "ai-vision",
        title: "AI / COMPUTER VISION",
        description: "Specialized coursework exploration and emerging technical focus.",
        items: [
          { name: "Computer Vision & AI Concepts", level: "Academic Exploration", tags: ["Image Processing Foundations", "Model Concepts", "Upcoming Research Architecture"], note: "Expandable for upcoming project deliverables" }
        ]
      }
    ]
  },

  teaching: {
    headline: "I don't just learn technology. I teach it.",
    subheadline: "5+ years dedicated to demystifying programming, academic mentoring, and student development.",
    metrics: [
      { value: "5+", label: "YEARS TEACHING", detail: "Continuous educational guidance across programming & academics" },
      { value: "ACM", label: "INSTRUCTOR ROLE", detail: "Structured training sessions in fundamental & competitive programming" },
      { value: "10+", label: "STUDENTS MENTORED", detail: "High-touch, customized academic and analytical mentoring" }
    ],
    pillars: [
      {
        number: "01",
        title: "First-Principles Pedagogy",
        description: "Breaking down complex algorithmic concepts and memory mechanics in C/C++ into intuitive, rebuildable mental models."
      },
      {
        number: "02",
        title: "Structured ACM Training",
        description: "Leading collaborative workshops, debugging sessions, and guided problem-solving sets for aspiring computer science peers."
      },
      {
        number: "03",
        title: "Individual Mentorship",
        description: "Tailoring pacing and practice routines to individual student needs, fostering long-term intellectual curiosity and confidence."
      },
      {
        number: "04",
        title: "Independent Problem Solving",
        description: "Training students not just to write code, but to independently formulate edge cases, analyze complexity, and debug methodically."
      }
    ]
  },

  leadership: {
    headline: "Institutional Leadership & Coordination",
    subheadline: "Bridging student aspirations with institutional execution through structured leadership.",
    roles: [
      {
        title: "Additional Co-Curricular Secretary",
        organization: "Institutional Student Leadership",
        period: "Active Leadership Term",
        summary: "Steering institutional co-curricular initiatives, coordinating university-wide programs, and managing multi-functional committees.",
        responsibilities: [
          "Coordinated large-scale institutional events, workshops, and extracurricular student platforms.",
          "Liaised between university faculty, department leadership, student executives, and participants.",
          "Managed event logistics, budget allocation, schedule adherence, and volunteer mobilization.",
          "Fostered an inclusive community culture that encourages holistic student participation and skill enhancement."
        ],
        competencies: ["Institutional Coordination", "Event Planning", "Team Management", "Public Communication"]
      },
      {
        title: "ACM Instructor",
        organization: "ACM Student Chapter / Programming Society",
        period: "Instruction & Mentorship Term",
        summary: "Spearheading programming education, technical syllabus planning, and community skill-building sessions.",
        responsibilities: [
          "Formulated structured curriculum covering procedural programming, data structures, and problem-solving strategies.",
          "Conducted hands-on coding labs, algorithm walk-throughs, and peer review sessions.",
          "Mentored junior cohorts to overcome conceptual barriers in C/C++ and computational logic.",
          "Organized mock programming contests to prepare students for competitive problem-solving benchmarks."
        ],
        competencies: ["Technical Instruction", "Curriculum Planning", "Student Engagement", "Peer Mentorship"]
      }
    ]
  },

  experience: [
    {
      role: "ACM Instructor",
      context: "ACM Student Chapter & Programming Society",
      responsibility: "Conducting structured programming training in C and C++, designing lab exercises, and mentoring junior cohorts in algorithmic problem solving.",
      impact: "Elevated foundational programming literacy and contest readiness for student participants.",
      period: "Instructional Term",
      category: "Instruction"
    },
    {
      role: "Additional Co-Curricular Secretary",
      context: "Student Leadership & Institutional Affairs",
      responsibility: "Directing event planning, coordinating cross-functional student teams, and facilitating institutional collaboration between faculty and students.",
      impact: "Successfully delivered campus-wide extracurricular initiatives with cross-departmental engagement.",
      period: "Leadership Term",
      category: "Leadership"
    },
    {
      role: "Private Tutor & Academic Mentor",
      context: "Independent Academic Mentorship",
      responsibility: "Providing 1-on-1 tutoring in programming, mathematics, and science for 10+ students across 5+ years.",
      impact: "Helped students achieve measurable grade improvements and cultivate independent analytical capability.",
      period: "5+ Years (Ongoing)",
      category: "Mentorship"
    },
    {
      role: "Student Mentor & Peer Advisor",
      context: "Software Engineering Department",
      responsibility: "Guiding incoming students through academic transitions, study methodologies, and early programming roadblocks.",
      impact: "Fostered retention, collaborative department culture, and high academic achievement.",
      period: "Academic Tenure",
      category: "Student Development"
    }
  ],

  education: {
    degree: "Bachelor of Science in Software Engineering",
    cgpa: "3.91",
    cgpaScale: "4.00",
    status: "Active Student",
    institution: "University Department of Software Engineering",
    institutionNote: "Full institutional credentials and transcripts available upon request.",
    highlights: [
      "Top-tier academic standing with consistent 3.91 CGPA across foundational and advanced engineering semesters.",
      "Recognized for academic excellence, peer tutoring leadership, and co-curricular service.",
      "Active participant in departmental programming activities, workshops, and student mentorship initiatives."
    ]
  },

  educationalMedia: {
    headline: "Public Knowledge Sharing",
    statement: "I do not only learn technology — I also explain and share knowledge. Creating educational video content reinforces my own mastery while providing students with on-demand, step-by-step guidance.",
    platform: "YouTube",
    role: "Educational Content Creator",
    url: "https://youtube.com/@nazmulfahim3010",
    channelName: "@nazmulfahim3010",
    note: "Tutorials, algorithm walk-throughs, and academic deep dives."
  },

  achievements: [
    {
      category: "ACADEMIC",
      title: "Academic Excellence — CGPA 3.91",
      detail: "Sustained high-distinction performance across software engineering coursework, mathematics, and computer science foundations."
    },
    {
      category: "TEACHING",
      title: "ACM Instructor Appointment",
      detail: "Selected to lead student cohorts in programming fundamentals, reflecting both technical competence and teaching ability."
    },
    {
      category: "LEADERSHIP",
      title: "Additional Co-Curricular Secretary",
      detail: "Entrusted with steering institutional events and community engagement across the student body."
    },
    {
      category: "MENTORSHIP",
      title: "5+ Years Educational Impact",
      detail: "Guiding over 10+ students through personalized academic mentorship and structured programming problem-solving."
    }
  ],

  contact: {
    headline: "LET'S BUILD SOMETHING MEANINGFUL.",
    subheadline: "Open to meaningful opportunities, collaborations, technical projects, and ideas worth building.",
    email: "nazmulfahim3010@gmail.com",
    location: "Available for Software Engineering Internships & Technical Collaborations",
    socials: [
      { name: "GitHub", url: "https://github.com/nazmulfahim3010", label: "github.com/nazmulfahim3010" },
      { name: "LinkedIn", url: "https://linkedin.com/in/nazmulfahim3010", label: "linkedin.com/in/nazmulfahim3010" },
      { name: "YouTube", url: "https://youtube.com/@nazmulfahim3010", label: "youtube.com/@nazmulfahim3010" },
      { name: "Email", url: "mailto:nazmulfahim3010@gmail.com", label: "nazmulfahim3010@gmail.com" }
    ]
  }
};
