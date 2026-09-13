/**
 * MD NAZMUL HASAN FAHIM — SYSTEM / 001
 * Minimal Vanilla JavaScript Core Controller
 * 
 * Functions:
 * 1. Precision Typographic Opening Sequence & System Init
 * 2. Subtle Studio Follower Cursor with Project Badge State
 * 3. Real-Time HUD Coordinates Telemetry
 * 4. IntersectionObserver Timeline Navigation & Dynamic Section Tracking
 * 5. Signature Wow Moment 1: System Core Deconstruction (Build)
 * 6. Signature Wow Moment 2: System Reorganization (Teach)
 * 7. Interactive Cognitive Topology Diagram & Console Readout
 * 8. Fullscreen Case Study Overlay Controller (7-Part Technical Breakdown)
 * 9. Metrics Counter Animation
 */

// =============================================================================
// VERIFIED CASE STUDY DATABASE (Source of Truth)
// =============================================================================
const CASE_STUDIES = {
  flagship: {
    id: "WORK / 001",
    category: "SOFTWARE ENGINEERING / ALGORITHMIC ARCHITECTURE",
    title: "Algorithmic Problem Solving & Data Structures Hub",
    technologies: ["C++", "C", "Standard Template Library", "Dynamic Memory", "Invariant Verification"],
    problem: "Learners and emerging software engineers frequently struggle to bridge theoretical algorithmic proofs with low-level, memory-safe pointer manipulation and boundary validation in C and C++.",
    approach: "Adopted a test-driven, modular philosophy: each fundamental data structure (trees, disjoint sets, graph representations) is isolated in pure C/C++ with invariant assertions, comprehensive edge-case harnesses, and memory leak profiling.",
    technology: "Engineered in modern C++ and C dynamic memory handlers, making extensive use of STL internal mechanics, assert verification macros, and cache-friendly contiguous data layout.",
    implementation: "Constructed clear separation between abstract interface declarations, encapsulated memory handlers, and algorithmic execution drivers. Implemented stress-testing harnesses that generate randomized combinatorial inputs.",
    result: "Achieved 100% leak-free execution across rigorous memory stress suites. Deployed as the foundational teaching asset during departmental ACM programming workshops to demonstrate pointer safety and asymptotic complexity.",
    lessons: "First-principles documentation combined with visual state tracing reduces conceptual debugging time by more than half, proving that clarity of code structure is as crucial as asymptotic efficiency.",
    github: "https://github.com/nazmulfahim3010"
  },
  database: {
    id: "WORK / 002",
    category: "DATABASE ENGINEERING & RELATIONAL ARCHITECTURE",
    title: "Structured Academic Data & Evaluation Model",
    technologies: ["Relational Databases", "SQL Query Optimization", "Schema Normalization (3NF)", "ER Modeling"],
    problem: "Handling prerequisite dependency chains, multi-weight grading schemes, and student cohort progression in conventional spreadsheets causes high redundancy and frequent transcript calculation errors.",
    approach: "Engineered a strictly normalized (3NF) relational database architecture with foreign key constraints, composite term keys, and view-based abstraction layers for real-time GPA computation.",
    technology: "Relational SQL database engine, structured DDL/DML scripts, relational algebra optimizations, and stored view procedures.",
    implementation: "Constructed normalized schemas for Students, Courses, Prerequisites, Enrollments, and Evaluations. Crafted analytical queries that compute running CGPA and validate prerequisite completion in sub-millisecond query time.",
    result: "Demonstrates production-grade database design principles, maintaining 100% data integrity under concurrent evaluation updates and eliminating transcript recalculation overhead.",
    lessons: "Enforcing business logic constraints directly at the database schema level fundamentally eliminates edge-case validation anomalies in user application layers.",
    github: "https://github.com/nazmulfahim3010"
  },
  automation: {
    id: "WORK / 003",
    category: "PYTHON SYSTEMS & WORKFLOW AUTOMATION",
    title: "Automated Academic Workflow & Utility Suite",
    technologies: ["Python 3", "CLI Architecture", "Data Parsing", "Regex Sanitization", "Batch Processing"],
    problem: "Campus organizers and academic committees frequently encounter unformatted registration records, duplicate student submissions, and malformed emails prior to hackathons and workshops.",
    approach: "Designed a modular Python CLI pipeline using defensive schema validation, regular expression sanitization, and structured terminal logging to process batch data with zero human transcription error.",
    technology: "Python 3 standard libraries, argparse for CLI orchestration, openpyxl/csv handlers, and Python logging framework.",
    implementation: "Structured as a 4-stage pipeline: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with automated summary statistics.",
    result: "Processed hundreds of student workshop registration records in seconds, flagging anomalies and generating clean attendance manifests for campus events.",
    lessons: "Defensive input parsing and clear terminal feedback are critical when building utilities designed to be operated by non-technical student coordinators.",
    github: "https://github.com/nazmulfahim3010"
  }
};

// =============================================================================
// COGNITIVE DIAGRAM TELEMETRY DATABASE
// =============================================================================
const DIAGRAM_TELEMETRY = {
  code: {
    id: "NODE_01::CODE",
    readout: "Deterministic C/C++ memory mechanics, low-level data structures, invariant validation, and algorithmic bounds."
  },
  problem: {
    id: "NODE_02::PROBLEM",
    readout: "Deconstructs ambiguous real-world challenges into mathematical constraints, asymptotic boundaries, and modular sub-problems."
  },
  learn: {
    id: "NODE_03::LEARN",
    readout: "Continuous absorption of systems paradigms, discrete mathematics, and computer science literature from first principles."
  },
  teach: {
    id: "NODE_04::TEACH",
    readout: "Translates abstract theory into rebuildable mental models through ACM instruction, peer tutoring, and technical workshops."
  },
  build: {
    id: "NODE_05::BUILD",
    readout: "Synthesizes low-level engines, normalized relational databases, and Python automation utilities with zero-defect execution."
  },
  lead: {
    id: "NODE_06::LEAD",
    readout: "Coordinates student bodies, institutional administration, and co-curricular programs as Additional Co-Curricular Secretary."
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================================================
  // 0. INTERACTIVE SMOOTH WATER RIPPLE ENGINE
  // ===========================================================================
  function initWaterRippleEffect() {
    const canvas = document.getElementById('ripple-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const ripples = [];
    let lastX = -999;
    let lastY = -999;

    class Ripple {
      constructor(x, y, maxRadius = 140, maxAlpha = 0.38, speed = 2.2) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = maxRadius;
        this.alpha = maxAlpha;
        this.maxAlpha = maxAlpha;
        this.speed = speed;
        this.rings = [0, 0.72, 0.48];
      }

      update() {
        this.radius += this.speed;
        const progress = this.radius / this.maxRadius;
        this.alpha = this.maxAlpha * (1 - progress);
        return progress < 1;
      }

      draw(context) {
        if (this.alpha <= 0.005) return;
        const progress = this.radius / this.maxRadius;

        this.rings.forEach((ringFactor, i) => {
          const r = this.radius * (1 - ringFactor * 0.25);
          if (r <= 0) return;

          const ringAlpha = Math.max(0, this.alpha * (1 - (i * 0.28)));
          context.beginPath();
          context.arc(this.x, this.y, r, 0, Math.PI * 2);

          const lineWidth = Math.max(0.6, (1 - progress) * (2.2 - i * 0.5));
          context.lineWidth = lineWidth;
          context.strokeStyle = `rgba(168, 85, 247, ${ringAlpha})`;
          context.shadowColor = 'rgba(157, 78, 221, 0.4)';
          context.shadowBlur = 8;
          context.stroke();

          // Subtle crystalline white specular highlight on outer crest
          if (i === 0 && ringAlpha > 0.05) {
            context.beginPath();
            context.arc(this.x, this.y, r * 1.01, 0, Math.PI * 2);
            context.lineWidth = 0.5;
            context.strokeStyle = `rgba(255, 255, 255, ${ringAlpha * 0.45})`;
            context.shadowBlur = 0;
            context.stroke();
          }
        });
      }
    }

    function addRipple(x, y, isClick = false) {
      if (isClick) {
        ripples.push(new Ripple(x, y, 220, 0.55, 3.2));
        setTimeout(() => ripples.push(new Ripple(x, y, 160, 0.4, 2.4)), 100);
      } else {
        ripples.push(new Ripple(x, y, 130, 0.32, 2.0));
      }
    }

    window.addEventListener('mousemove', (e) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > 28) {
        lastX = e.clientX;
        lastY = e.clientY;
        addRipple(e.clientX, e.clientY, false);
      }
    }, { passive: true });

    window.addEventListener('pointerdown', (e) => {
      addRipple(e.clientX, e.clientY, true);
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const alive = r.update();
        if (!alive) {
          ripples.splice(i, 1);
        } else {
          r.draw(ctx);
        }
      }

      requestAnimationFrame(animate);
    }
    animate();
  }
  initWaterRippleEffect();

  // ===========================================================================
  // 1. OPENING SEQUENCE & INITIALIZATION
  // ===========================================================================
  const introScreen = document.getElementById('intro-screen');
  const btnEnter = document.getElementById('btn-enter-system');
  const typewriterTarget = document.getElementById('typewriter-target');
  let isSystemActive = false;

  // Typewriter effect for "INITIALIZING IDENTITY..."
  const fullText = "INITIALIZING IDENTITY...";
  let charIdx = 0;
  typewriterTarget.textContent = "";

  function typeLetter() {
    if (charIdx < fullText.length) {
      typewriterTarget.textContent += fullText.charAt(charIdx);
      charIdx++;
      setTimeout(typeLetter, 45);
    }
  }
  setTimeout(typeLetter, 300);

  function enterSystem() {
    if (isSystemActive) return;
    isSystemActive = true;
    introScreen.classList.add('is-dismissed');
    document.body.classList.remove('is-initializing');
  }

  btnEnter.addEventListener('click', enterSystem);
  window.addEventListener('keydown', (e) => {
    if ((e.code === 'Space' || e.code === 'Enter') && !isSystemActive) {
      e.preventDefault();
      enterSystem();
    }
  });

  // Auto-dismiss after 3.8 seconds if user doesn't click
  setTimeout(() => {
    if (!isSystemActive) enterSystem();
  }, 4200);

  // ===========================================================================
  // 2. SUBTLE CUSTOM CURSOR
  // ===========================================================================
  const cursor = document.getElementById('sys-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover target states
  const interactiveElements = document.querySelectorAll('a, button, input, .node-pill, .timeline-row, .channel-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
  });

  // Project hover target state -> "OPEN →" cursor badge
  const projectTargets = document.querySelectorAll('.project-hover-target');
  projectTargets.forEach(card => {
    card.addEventListener('mouseenter', () => cursor.classList.add('cursor-project'));
    card.addEventListener('mouseleave', () => cursor.classList.remove('cursor-project'));
  });

  // ===========================================================================
  // 3. REAL-TIME HUD COORDINATES
  // ===========================================================================
  const liveCoords = document.getElementById('live-coords');
  window.addEventListener('mousemove', (e) => {
    const x = String(e.clientX).padStart(4, '0');
    const y = String(e.clientY).padStart(4, '0');
    liveCoords.textContent = `X: ${x}   Y: ${y}`;
  }, { passive: true });

  // ===========================================================================
  // 4. TIMELINE NAVIGATION & SECTION TRACKING
  // ===========================================================================
  const navNodes = document.querySelectorAll('.nav-node');
  const sections = document.querySelectorAll('.sys-section');
  const systemCore = document.getElementById('system-core');
  const systemCoreWrapper = document.getElementById('system-core-wrapper');

  // Smooth top-aligned navigation clicks (prevents center-jumping)
  navNodes.forEach(node => {
    node.addEventListener('click', (e) => {
      const targetId = node.getAttribute('data-section');
      const targetSec = document.getElementById(targetId);
      if (targetSec) {
        e.preventDefault();
        window.scrollTo({
          top: targetSec.offsetTop,
          behavior: 'smooth'
        });
        history.pushState(null, '', `#${targetId}`);
        navNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
      }
    });
  });

  // Parallax subtle offset on System Core
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    systemCoreWrapper.style.setProperty('--scroll-offset', `${scrollY}px`);
  }, { passive: true });

  const sectionObserverOptions = {
    root: null,
    rootMargin: '-15% 0px -30% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        
        // Update timeline active node
        navNodes.forEach(node => {
          if (node.getAttribute('data-section') === id) {
            node.classList.add('active');
          } else {
            node.classList.remove('active');
          }
        });

        // WOW MOMENT 1: BUILD section triggers System Core Deconstruction
        if (id === 'build') {
          systemCore.classList.add('is-split');
        } else {
          systemCore.classList.remove('is-split');
        }

        // Final scene fades core out
        if (id === 'system-end') {
          systemCoreWrapper.style.opacity = '0';
        } else if (window.innerWidth > 768) {
          systemCoreWrapper.style.opacity = '1';
        }
      }
    });
  }, sectionObserverOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // ===========================================================================
  // 5. METRIC COUNTER ANIMATION
  // ===========================================================================
  const metricElements = document.querySelectorAll('[data-counter]');
  let metricsAnimated = false;

  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !metricsAnimated) {
        metricsAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const metricsContainer = document.querySelector('.metrics-grid');
  if (metricsContainer) metricsObserver.observe(metricsContainer);

  function animateCounters() {
    metricElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-counter'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let current = 0;
      const step = target / 35;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toFixed(decimals) + suffix;
      }, 30);
    });
  }

  // ===========================================================================
  // 6. INTERACTIVE COGNITIVE DIAGRAM (Section 02)
  // ===========================================================================
  const diagNodes = document.querySelectorAll('.diag-node');
  const consoleId = document.getElementById('console-node-id');
  const consoleReadout = document.getElementById('console-readout');

  diagNodes.forEach(node => {
    const key = node.getAttribute('data-node');
    const data = DIAGRAM_TELEMETRY[key];

    function activateNode() {
      diagNodes.forEach(n => n.classList.remove('is-active'));
      node.classList.add('is-active');
      if (data) {
        consoleId.textContent = data.id;
        consoleReadout.textContent = data.readout;
      }
    }

    node.addEventListener('mouseenter', activateNode);
    node.addEventListener('focus', activateNode);
    node.addEventListener('click', activateNode);
  });

  // ===========================================================================
  // 7. LEADERSHIP INTERACTIVE TIMELINE (Section 06)
  // ===========================================================================
  const timelineRows = document.querySelectorAll('.timeline-row');
  timelineRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      timelineRows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
    row.addEventListener('focus', () => {
      timelineRows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
  });

  // ===========================================================================
  // 8. FULLSCREEN CASE STUDY OVERLAY CONTROLLER
  // ===========================================================================
  const caseStudyView = document.getElementById('case-study-view');
  const btnCloseCase = document.getElementById('btn-close-case');
  const csId = document.getElementById('cs-id');
  const csCat = document.getElementById('cs-cat');
  const csTitle = document.getElementById('cs-title');
  const csTechStrip = document.getElementById('cs-tech-strip');
  const csProblem = document.getElementById('cs-problem');
  const csApproach = document.getElementById('cs-approach');
  const csTech = document.getElementById('cs-tech');
  const csImpl = document.getElementById('cs-impl');
  const csResult = document.getElementById('cs-result');
  const csLessons = document.getElementById('cs-lessons');

  function openCaseStudy(studyKey) {
    const data = CASE_STUDIES[studyKey];
    if (!data) return;

    csId.textContent = data.id;
    csCat.textContent = data.category;
    csTitle.textContent = data.title;
    csProblem.textContent = data.problem;
    csApproach.textContent = data.approach;
    csTech.textContent = data.technology;
    csImpl.textContent = data.implementation;
    csResult.textContent = data.result;
    csLessons.textContent = data.lessons;

    csTechStrip.innerHTML = data.technologies
      .map(t => `<span class="tech-tag" style="border-color: var(--c-purple); color: #ffffff;">${t}</span>`)
      .join('');

    caseStudyView.classList.add('is-open');
    caseStudyView.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    caseStudyView.classList.remove('is-open');
    caseStudyView.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const studyKey = btn.getAttribute('data-open-study');
      openCaseStudy(studyKey);
    });
  });

  btnCloseCase.addEventListener('click', closeCaseStudy);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseStudyView.classList.contains('is-open')) {
      closeCaseStudy();
    }
  });

  // ===========================================================================
  // 9. REWIND TO TOP
  // ===========================================================================
  const btnRewind = document.getElementById('btn-rewind');
  if (btnRewind) {
    btnRewind.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
