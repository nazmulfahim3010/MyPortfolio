(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:{fullName:`MD NAZMUL HASAN FAHIM`,splitName:{first:`MD NAZMUL`,last:`HASAN FAHIM`},shortName:`NAZMUL FAHIM`,masthead:`FAHIM / MNHF`,monogram:`MNHF`,heroRole:`SOFTWARE ENGINEERING STUDENT`,subRoles:[`PROGRAMMER`,`EDUCATOR`,`TECHNOLOGY ENTHUSIAST`,`STUDENT LEADER`],academicStanding:`CGPA 3.91`,brandConcept:`BUILD. SOLVE. TEACH.`,primaryStatement:`Building technology, solving problems, and helping others learn.`,editorialQuote:`I build technology, solve problems, teach others, and lead communities.`,bio:[`I am a proactive Software Engineering student with a distinguished academic record (CGPA 3.91), pairing low-level computational discipline with extensive experience in technical instruction and student leadership.`,`Beyond core software engineering across C, C++, and Python, my strongest differentiator is the synthesis of analytical problem-solving and educational mentorship. Over the past 5+ years, I have guided more than 10+ private tutoring students, served as an ACM Instructor, and facilitated structured programming problem-solving curricula.`,`In institutional capacities—notably as Additional Co-Curricular Secretary and ACM Instructor—I coordinate initiatives across students, faculty, teams, and administration, transforming complex goals into structured, high-impact programs.`],metadataBlocks:[{label:`CGPA`,value:`3.91`,detail:`Scale of 4.00`},{label:`TEACHING`,value:`5+ YEARS`,detail:`Instruction & Mentorship`},{label:`FOCUS`,value:`SOFTWARE ENG.`,detail:`Systems & Algorithms`},{label:`ROLE`,value:`ACM INSTRUCTOR`,detail:`Technical Leadership`}],assets:{portraitImage:`/assets/images/portrait.jpg`,introVideo:`/assets/video/intro.mp4`,favicon:`/assets/images/favicon.svg`},coreStrengths:[{name:`Communication`,description:`Articulating complex technical concepts with clarity and precision.`},{name:`Coordination`,description:`Aligning multi-disciplinary teams, faculty, and student bodies seamlessly.`},{name:`Leadership`,description:`Guiding student initiatives, fostering collaborative culture, and driving execution.`},{name:`Teaching`,description:`5+ years developing curriculum and mentoring across academic and programming topics.`},{name:`Mentoring`,description:`Personalized guidance helping 10+ students unlock analytical problem-solving.`},{name:`Problem Solving`,description:`Systematic algorithmic thinking using structured, modular approaches.`},{name:`Adaptability`,description:`Rapid assimilation of new paradigms, technologies, and institutional challenges.`},{name:`Event Planning`,description:`End-to-end execution of campus events, hackathons, and academic workshops.`},{name:`Team Management`,description:`Empowering team members, delegating effectively, and ensuring milestone delivery.`}]},disciplines:[{number:`01`,title:`BUILD`,role:`Software Engineering & Architecture`,description:`Low-level systems programming in C and C++, modular software architecture, data structure implementation, and deterministic memory mechanics.`,tags:[`C++`,`C`,`Object-Oriented Design`,`Memory Safety`,`System Foundations`]},{number:`02`,title:`SOLVE`,role:`Algorithms & Technical Exploration`,description:`Analytical problem solving, time/space complexity optimization, coursework mastery, and active exploration into computer vision and applied intelligence.`,tags:[`Algorithmic Design`,`Discrete Mathematics`,`Data Structures`,`Computer Vision Concepts`]},{number:`03`,title:`TEACH`,role:`Programming Education & Mentorship`,description:`5+ years dedicated to breaking down theoretical concepts into rebuildable mental models through ACM instruction, private tutoring, and structured workshops.`,tags:[`First-Principles Pedagogy`,`ACM Workshops`,`10+ Students`,`Curriculum Design`]},{number:`04`,title:`LEAD`,role:`Student Leadership & Coordination`,description:`Steering institutional initiatives as Additional Co-Curricular Secretary, managing cross-functional student teams, and bridging student aspirations with institutional execution.`,tags:[`Institutional Liaison`,`Event Execution`,`Team Management`,`Public Communication`]}],featuredProject:{id:`featured-flagship`,number:`01 / FEATURED WORK`,title:`Algorithmic Problem Solving & Data Structures Hub`,category:`Software Engineering / Algorithms & Data Structures`,tagline:`High-performance C++ & C algorithmic architecture engineered for computational efficiency, cache awareness, and invariant verification.`,problem:`Students and emerging engineers often struggle to bridge abstract algorithmic proofs with concrete, memory-safe pointer manipulation and boundary validation in C and C++.`,approach:`Designed a modular, self-verifying architecture where each data structure is isolated with invariant assertions, comprehensive edge-case harnesses, and memory leak profiling.`,technology:[`C++`,`C`,`Standard Template Library`,`Algorithm Optimization`,`Dynamic Memory`],result:`Achieved 100% leak-free execution across rigorous stress tests; deployed as the core teaching asset during ACM programming sessions to illustrate pointer safety.`,whatILearned:`Clarity of code structure and visual state tracing reduces student conceptual debugging time by more than half, proving low-level engineering and educational clarity reinforce one another.`,myContribution:`Architected the algorithmic implementations, structured clean test suites, authored technical proofs, and integrated invariant harnesses.`,github:`https://github.com/nazmulfahim3010`,liveDemo:null,caseStudy:{overview:`An architectural deep-dive into constructing resilient, self-verifying algorithmic modules in C++ and C, emphasizing boundary-safety, cache-friendly data layout, and intuitive pedagogical documentation.`,problem:`Traditional algorithmic references frequently isolate theoretical pseudocode from real-world pointer arithmetic, cache locality, and asymptotic trade-offs. Learners often lack a clean bridge between concept and low-level mechanics.`,approach:`Adopted a test-driven, modular philosophy: each data structure (trees, disjoint sets, graph representations) is isolated in pure C/C++ with invariant assertions, comprehensive edge-case suites, and memory profiling.`,technology:`Utilized modern C++, standard template library internals, C dynamic allocation handlers, and POSIX memory analysis utilities.`,implementation:`Constructed clear separation between abstract interface declarations, encapsulated memory handlers, and algorithmic drivers. Implemented stress-testing harnesses that generate randomized combinatorial inputs.`,results:`Achieved zero memory-leak execution across all stress suites; successfully deployed as teaching examples during ACM instruction sessions to illustrate pointer safety and time complexity.`,lessonsLearned:`First-principles documentation combined with visual state tracing reduces student conceptual debugging time by more than half, proving that clarity of code structure is as crucial as algorithmic asymptotic order.`}},projects:[{id:`project-academic-management`,number:`02`,title:`Structured Academic Data & Evaluation Model`,category:`Database Engineering & Relational Design`,tagline:`Normalized relational schema and query engine for institutional grading, student performance metrics, and curriculum progression.`,problem:`Educational tracking often suffers from denormalized datasets, conflicting grade histories, and cumbersome reporting overhead across student cohorts.`,approach:`Engineered a 3NF-normalized relational database architecture with strict foreign key constraints, composite term keys, and view-based abstraction for GPA computation.`,implementation:`Built normalized tables for Students, Courses, Prerequisites, Enrollments, and Evaluations with stored query procedures that compute running metrics.`,technologies:[`Relational Databases`,`SQL Query Optimization`,`Schema Normalization`,`ER Modeling`],myContribution:`Formulated the relational schema, designed ER diagrams, wrote complex join queries, and benchmarked query performance under simulated multi-semester loads.`,result:`Demonstrates production-ready database design principles, maintaining 100% data integrity under concurrent evaluation updates.`,github:`https://github.com/nazmulfahim3010`,liveDemo:null,caseStudy:{overview:`A rigorous database engineering blueprint modeling the lifecycle of academic performance, attendance metrics, and course prerequisites.`,problem:`Handling prerequisite dependency chains and multi-weight grading schemes in conventional flat spreadsheets generates high error rates and redundant manual calculations.`,approach:`Engineered a normalized relational schema with strict foreign key constraints, composite keys for term enrollment, and view-based abstraction for GPA computation.`,technology:`Relational SQL database engine, structured DDL/DML scripts, and stored view procedures.`,implementation:`Built normalized tables for Students, Courses, Prerequisites, Enrollments, and Evaluations. Crafted stored queries that compute running CGPA and evaluate prerequisite readiness.`,results:`Maintained mathematical consistency with zero redundant student record updates and sub-millisecond query execution on analytical aggregate queries.`,lessonsLearned:`Enforcing business constraints at the database schema level fundamentally eliminates edge-case validation bugs in application layers.`}},{id:`project-python-automation`,number:`03`,title:`Automated Academic Workflow & Utility Suite`,category:`Python Systems & Workflow Automation`,tagline:`Modular Python utility framework for parsing structured datasets, automating administrative digests, and batch record validation.`,problem:`Repetitive manual data entry and report compilation for institutional campus initiatives consume excessive hours and introduce human transcription error.`,approach:`Implemented a robust CLI pipeline using modular Python standard libraries, regex sanitization, defensive schema validation, and structured logging.`,implementation:`Wrote distinct stages: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with automated summary statistics.`,technologies:[`Python 3`,`File I/O`,`Data Parsing`,`Automation Scripting`,`CLI Architecture`],myContribution:`Created the parsing logic, designed CLI argument structures, implemented error-tolerant CSV/Excel handlers, and wrote automated unit tests.`,result:`Successfully processed batches of hundreds of registration entries in seconds, flagging anomalies and producing clean attendance sheets.`,github:`https://github.com/nazmulfahim3010`,liveDemo:null,caseStudy:{overview:`An automated pipeline built in Python to ingest, cleanse, validate, and summarize institutional records with minimal human intervention.`,problem:`Organizing committee leads frequently deal with unformatted registration spreadsheets, duplicate student entries, and inconsistent email records prior to workshops.`,approach:`Implemented a robust CLI pipeline using modular Python standard libraries, regex sanitization, and structured logging.`,technology:`Python 3, argparse, csv/openpyxl handlers, logging framework.`,implementation:`Wrote distinct stages: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with summary statistics.`,results:`Successfully processed batches of hundreds of entries in seconds, flagging anomalies and producing clean attendance sheets for campus workshops.`,lessonsLearned:`Defensive input parsing and clear terminal feedback are critical when building tools meant to be operated by non-technical team coordinators.`}}],skills:{categories:[{id:`programming`,title:`PROGRAMMING`,description:`Core computational foundations, object-oriented architecture, and algorithmic design.`,items:[{name:`C`,level:`Advanced Foundation`,tags:[`Memory Management`,`Pointers`,`Data Structures`,`System Concepts`]},{name:`C++`,level:`Advanced Problem Solving`,tags:[`OOP`,`STL`,`Algorithm Optimization`,`Competitive Fundamentals`]},{name:`Python`,level:`Applied Development`,tags:[`Automation`,`Scripting`,`Data Handling`,`Modular Design`]}]},{id:`database`,title:`DATABASE`,description:`Relational data structuring, query formulation, and persistent data architecture.`,items:[{name:`Databases`,level:`Structured Architecture`,tags:[`Relational Design`,`SQL Modeling`,`Schema Normalization`,`Query Logic`]}]},{id:`tools`,title:`TOOLS & PRODUCTIVITY`,description:`Institutional reporting, analytical documentation, and collaborative workflows.`,items:[{name:`Microsoft Office`,level:`Professional Suite`,tags:[`Excel Data Analysis`,`Technical Documentation`,`Institutional Presentations`]}]},{id:`ai-vision`,title:`AI / COMPUTER VISION`,description:`Specialized coursework exploration and emerging technical focus.`,items:[{name:`Computer Vision & AI Concepts`,level:`Academic Exploration`,tags:[`Image Processing Foundations`,`Model Concepts`,`Upcoming Research Architecture`],note:`Expandable for upcoming project deliverables`}]}]},teaching:{headline:`I don't just learn technology. I teach it.`,subheadline:`5+ years dedicated to demystifying programming, academic mentoring, and student development.`,metrics:[{value:`5+`,label:`YEARS TEACHING`,detail:`Continuous educational guidance across programming & academics`},{value:`ACM`,label:`INSTRUCTOR ROLE`,detail:`Structured training sessions in fundamental & competitive programming`},{value:`10+`,label:`STUDENTS MENTORED`,detail:`High-touch, customized academic and analytical mentoring`}],pillars:[{number:`01`,title:`First-Principles Pedagogy`,description:`Breaking down complex algorithmic concepts and memory mechanics in C/C++ into intuitive, rebuildable mental models.`},{number:`02`,title:`Structured ACM Training`,description:`Leading collaborative workshops, debugging sessions, and guided problem-solving sets for aspiring computer science peers.`},{number:`03`,title:`Individual Mentorship`,description:`Tailoring pacing and practice routines to individual student needs, fostering long-term intellectual curiosity and confidence.`},{number:`04`,title:`Independent Problem Solving`,description:`Training students not just to write code, but to independently formulate edge cases, analyze complexity, and debug methodically.`}]},leadership:{headline:`Institutional Leadership & Coordination`,subheadline:`Bridging student aspirations with institutional execution through structured leadership.`,roles:[{title:`Additional Co-Curricular Secretary`,organization:`Institutional Student Leadership`,period:`Active Leadership Term`,summary:`Steering institutional co-curricular initiatives, coordinating university-wide programs, and managing multi-functional committees.`,responsibilities:[`Coordinated large-scale institutional events, workshops, and extracurricular student platforms.`,`Liaised between university faculty, department leadership, student executives, and participants.`,`Managed event logistics, budget allocation, schedule adherence, and volunteer mobilization.`,`Fostered an inclusive community culture that encourages holistic student participation and skill enhancement.`],competencies:[`Institutional Coordination`,`Event Planning`,`Team Management`,`Public Communication`]},{title:`ACM Instructor`,organization:`ACM Student Chapter / Programming Society`,period:`Instruction & Mentorship Term`,summary:`Spearheading programming education, technical syllabus planning, and community skill-building sessions.`,responsibilities:[`Formulated structured curriculum covering procedural programming, data structures, and problem-solving strategies.`,`Conducted hands-on coding labs, algorithm walk-throughs, and peer review sessions.`,`Mentored junior cohorts to overcome conceptual barriers in C/C++ and computational logic.`,`Organized mock programming contests to prepare students for competitive problem-solving benchmarks.`],competencies:[`Technical Instruction`,`Curriculum Planning`,`Student Engagement`,`Peer Mentorship`]}]},experience:[{role:`ACM Instructor`,context:`ACM Student Chapter & Programming Society`,responsibility:`Conducting structured programming training in C and C++, designing lab exercises, and mentoring junior cohorts in algorithmic problem solving.`,impact:`Elevated foundational programming literacy and contest readiness for student participants.`,period:`Instructional Term`,category:`Instruction`},{role:`Additional Co-Curricular Secretary`,context:`Student Leadership & Institutional Affairs`,responsibility:`Directing event planning, coordinating cross-functional student teams, and facilitating institutional collaboration between faculty and students.`,impact:`Successfully delivered campus-wide extracurricular initiatives with cross-departmental engagement.`,period:`Leadership Term`,category:`Leadership`},{role:`Private Tutor & Academic Mentor`,context:`Independent Academic Mentorship`,responsibility:`Providing 1-on-1 tutoring in programming, mathematics, and science for 10+ students across 5+ years.`,impact:`Helped students achieve measurable grade improvements and cultivate independent analytical capability.`,period:`5+ Years (Ongoing)`,category:`Mentorship`},{role:`Student Mentor & Peer Advisor`,context:`Software Engineering Department`,responsibility:`Guiding incoming students through academic transitions, study methodologies, and early programming roadblocks.`,impact:`Fostered retention, collaborative department culture, and high academic achievement.`,period:`Academic Tenure`,category:`Student Development`}],education:{degree:`Bachelor of Science in Software Engineering`,cgpa:`3.91`,cgpaScale:`4.00`,status:`Active Student`,institution:`University Department of Software Engineering`,institutionNote:`Full institutional credentials and transcripts available upon request.`,highlights:[`Top-tier academic standing with consistent 3.91 CGPA across foundational and advanced engineering semesters.`,`Recognized for academic excellence, peer tutoring leadership, and co-curricular service.`,`Active participant in departmental programming activities, workshops, and student mentorship initiatives.`]},educationalMedia:{headline:`Public Knowledge Sharing`,statement:`I do not only learn technology — I also explain and share knowledge. Creating educational video content reinforces my own mastery while providing students with on-demand, step-by-step guidance.`,platform:`YouTube`,role:`Educational Content Creator`,url:`https://youtube.com/@nazmulfahim3010`,channelName:`@nazmulfahim3010`,note:`Tutorials, algorithm walk-throughs, and academic deep dives.`},achievements:[{category:`ACADEMIC`,title:`Academic Excellence — CGPA 3.91`,detail:`Sustained high-distinction performance across software engineering coursework, mathematics, and computer science foundations.`},{category:`TEACHING`,title:`ACM Instructor Appointment`,detail:`Selected to lead student cohorts in programming fundamentals, reflecting both technical competence and teaching ability.`},{category:`LEADERSHIP`,title:`Additional Co-Curricular Secretary`,detail:`Entrusted with steering institutional events and community engagement across the student body.`},{category:`MENTORSHIP`,title:`5+ Years Educational Impact`,detail:`Guiding over 10+ students through personalized academic mentorship and structured programming problem-solving.`}],contact:{headline:`LET'S BUILD SOMETHING MEANINGFUL.`,subheadline:`Open to meaningful opportunities, collaborations, technical projects, and ideas worth building.`,email:`nazmulfahim3010@gmail.com`,location:`Available for Software Engineering Internships & Technical Collaborations`,socials:[{name:`GitHub`,url:`https://github.com/nazmulfahim3010`,label:`github.com/nazmulfahim3010`},{name:`LinkedIn`,url:`https://linkedin.com/in/nazmulfahim3010`,label:`linkedin.com/in/nazmulfahim3010`},{name:`YouTube`,url:`https://youtube.com/@nazmulfahim3010`,label:`youtube.com/@nazmulfahim3010`},{name:`Email`,url:`mailto:nazmulfahim3010@gmail.com`,label:`nazmulfahim3010@gmail.com`}]}};function t(){if(window.matchMedia(`(pointer: coarse)`).matches||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=document.getElementById(`custom-cursor`);if(!e)return;let t=e.querySelector(`.cursor-dot`),n=e.querySelector(`.cursor-ring`),r=window.innerWidth/2,i=window.innerHeight/2,a=r,o=i,s=!1;window.addEventListener(`mousemove`,n=>{r=n.clientX,i=n.clientY,e.style.opacity=`1`,t&&(t.style.transform=`translate3d(${r}px, ${i}px, 0)`)},{passive:!0}),window.addEventListener(`mouseleave`,()=>{e.style.opacity=`0`});function c(){a+=(r-a)*.18,o+=(i-o)*.18,n&&(n.style.transform=`translate3d(${a}px, ${o}px, 0) scale(${s?1.8:1})`),requestAnimationFrame(c)}requestAnimationFrame(c);function l(){document.querySelectorAll(`a, button, input, textarea, .btn, .tag, .metric-card, .pillar-card, .discipline-card`).forEach(t=>{t.addEventListener(`mouseenter`,()=>{s=!0,e.classList.add(`cursor-hover`)}),t.addEventListener(`mouseleave`,()=>{s=!1,e.classList.remove(`cursor-hover`)})})}l(),new MutationObserver(()=>{l()}).observe(document.body,{childList:!0,subtree:!0})}function n(e){let t=[],n=0,r=0,i=null,a=document.createElement(`div`);a.className=`fixed-global-bg-container`,a.setAttribute(`aria-hidden`,`true`),a.innerHTML=`
    <canvas id="global-scroll-canvas" class="global-scroll-canvas"></canvas>
    <div class="global-bg-overlay"></div>
    <div class="global-bg-ambient-red"></div>
  `,e.prepend(a);let o=a.querySelector(`#global-scroll-canvas`),s=o.getContext(`2d`,{alpha:!1});function c(e){return`/assets/frames/ezgif-frame-${String(e+1).padStart(3,`0`)}.jpg`}function l(){let e=Math.min(window.devicePixelRatio||1,2);o.width=window.innerWidth*e,o.height=window.innerHeight*e,u(Math.round(n))}function u(e){let n=t[e];if(!n||!n.complete||n.naturalWidth===0)for(let r=1;r<20;r++){if(t[e-r]?.complete&&t[e-r].naturalWidth>0){n=t[e-r];break}if(t[e+r]?.complete&&t[e+r].naturalWidth>0){n=t[e+r];break}}if(n&&n.complete&&n.naturalWidth>0){let e=o.width,t=o.height,r=n.naturalWidth,i=n.naturalHeight,a=e/r,c=t/i,l=Math.max(a,c),u=r*l,d=i*l,f=(e-u)/2,p=(t-d)/2;s.imageSmoothingEnabled=!0,s.imageSmoothingQuality=`high`,s.drawImage(n,0,0,r,i,f,p,u,d)}}function d(){for(let e=0;e<300;e++){let n=new Image;n.src=c(e),t[e]=n,e===0&&(n.onload=()=>{l()})}}function f(){let e=r-n;Math.abs(e)>.01&&(n+=e*.12,u(Math.round(n))),i=requestAnimationFrame(f)}function p(){let e=(document.documentElement.scrollHeight||document.body.scrollHeight)-window.innerHeight;if(e<=0)return;let t=window.scrollY||window.pageYOffset||0,n=Math.max(0,Math.min(1,t/e));r=Math.min(299,n*299)}return d(),l(),window.addEventListener(`resize`,l,{passive:!0}),window.addEventListener(`scroll`,p,{passive:!0}),i=requestAnimationFrame(f),{destroy(){i&&cancelAnimationFrame(i),window.removeEventListener(`resize`,l),window.removeEventListener(`scroll`,p),a.remove()}}}function r(e,t){let n=document.createElement(`header`);n.id=`navbar`,n.className=`studio-navbar`,n.innerHTML=`
    <div class="container nav-container">
      <a href="#hero" class="nav-logo" aria-label="${t.profile.fullName}">
        <span class="logo-masthead">${t.profile.masthead}</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#disciplines" class="nav-link">Disciplines</a></li>
          <li><a href="#featured-work" class="nav-link">Work</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#teaching" class="nav-link">Teaching</a></li>
          <li><a href="#leadership" class="nav-link">Leadership</a></li>
          <li><a href="#contact" class="nav-cta">Connect</a></li>
        </ul>
      </nav>

      <button class="mobile-menu-toggle" id="mobile-toggle" aria-label="Toggle Navigation Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  `,e.appendChild(n);let r=n.querySelectorAll(`.nav-link`),i=n.querySelector(`#mobile-toggle`),a=n.querySelector(`#nav-links`);window.addEventListener(`scroll`,()=>{window.scrollY>40?n.classList.add(`scrolled`):n.classList.remove(`scrolled`)},{passive:!0}),i.addEventListener(`click`,()=>{a.classList.toggle(`open`)}),n.querySelectorAll(`.nav-link, .nav-cta`).forEach(e=>{e.addEventListener(`click`,()=>{a.classList.remove(`open`)})});let o=[`about`,`disciplines`,`featured-work`,`skills`,`teaching`,`leadership`,`contact`];window.addEventListener(`scroll`,()=>{let e=``,t=window.scrollY+250;o.forEach(n=>{let r=document.getElementById(n);r&&r.offsetTop<=t&&(e=n)}),r.forEach(t=>{t.classList.remove(`active`),t.getAttribute(`href`)===`#${e}`&&t.classList.add(`active`)})},{passive:!0})}function i(e,t){let n=document.createElement(`section`);n.id=`hero`,n.className=`studio-hero-section`,n.innerHTML=`
    <div class="container studio-hero-container">
      <!-- Top Status Masthead -->
      <div class="hero-status-row" data-reveal="fade-up">
        <div class="hero-live-badge">
          <span class="status-light"></span>
          <span>AVAILABLE FOR SE INTERNSHIPS & RESEARCH</span>
        </div>
        <div class="hero-academic-meta">
          <span>CGPA: <strong>${t.profile.academicStanding.replace(`CGPA `,``)}</strong> / 4.00</span>
          <span class="sep-slash">/</span>
          <span>5+ YRS INSTRUCTION</span>
        </div>
      </div>

      <!-- Main Magazine Grid -->
      <div class="hero-magazine-grid">
        <!-- Colossal Typography Stack -->
        <div class="hero-typo-stack">
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">MD</span>
          </div>
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">NAZMUL</span>
          </div>
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">HASAN</span>
          </div>
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">FAHIM</span>
          </div>

          <!-- Editorial Sub-Identity & Actions -->
          <div class="hero-identity-block" data-reveal="fade-up">
            <div class="hero-role-lead">${t.profile.heroRole}</div>
            <div class="hero-role-sub">${t.profile.subRoles.join(` • `)}</div>
            
            <p class="hero-editorial-statement">
              "${t.profile.primaryStatement}"
            </p>

            <div class="hero-action-buttons">
              <a href="#featured-work" class="btn btn-primary btn-arrow-hover">
                <span>Explore My Work</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#contact" class="btn btn-secondary">
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Editorial Glassmorphic Telemetry Panel -->
        <div class="hero-telemetry-column" data-reveal="scale-up">
          <div class="hero-glass-telemetry-card">
            <div class="telemetry-header">
              <span class="telemetry-signal-tag">SIGNAL 01</span>
              <span class="telemetry-indicator">ACTIVE REPOSITORY</span>
            </div>

            <div class="telemetry-centerpiece">
              <div class="telemetry-quote">
                "I don't just learn technology.<br/>
                <span class="text-accent">I build, solve, and teach it.</span>"
              </div>
              <div class="telemetry-disciplines">
                <span class="telemetry-pill">BUILD</span>
                <span class="telemetry-pill">SOLVE</span>
                <span class="telemetry-pill">TEACH</span>
                <span class="telemetry-pill">LEAD</span>
              </div>
            </div>

            <div class="telemetry-footer">
              <div class="telemetry-meta-row">
                <span class="meta-label">ARCHITECTURE</span>
                <span class="meta-val">C++ • C • PYTHON</span>
              </div>
              <div class="telemetry-meta-row">
                <span class="meta-label">PEDAGOGY</span>
                <span class="meta-val">ACM INSTRUCTOR (5+ YRS)</span>
              </div>
              <div class="telemetry-scroll-prompt">
                <span>SCROLL TO PUSH INTO THE LENS</span>
                <div class="scroll-down-arrow" aria-hidden="true">↓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,e.appendChild(n)}function a(e,t){let n=document.createElement(`section`);n.id=`about`,n.className=`section studio-about-section`;let r=t.profile.metadataBlocks.map(e=>`
    <div class="editorial-meta-block" data-reveal="fade-up">
      <span class="meta-block-label">${e.label}</span>
      <div class="meta-block-value">${e.value}</div>
      <span class="meta-block-detail">${e.detail}</span>
    </div>
  `).join(``),i=t.profile.coreStrengths.map(e=>`
    <div class="strength-pill" title="${e.description}">
      <span class="strength-name">${e.name}</span>
    </div>
  `).join(``);n.innerHTML=`
    <div class="container">
      <div class="about-asymmetric-grid">
        <!-- Left Colossal Title -->
        <div class="about-title-column" data-reveal="fade-up">
          <span class="section-editorial-num">01</span>
          <h2 class="section-editorial-title">ABOUT</h2>
          <div class="about-vertical-line" aria-hidden="true"></div>
        </div>

        <!-- Right Narrative Column -->
        <div class="about-content-column">
          <div class="about-lead-quote" data-reveal="fade-up">
            "I build technology, solve problems, and help others learn."
          </div>

          <div class="about-narrative-body" data-reveal="fade-up">
            ${t.profile.bio.map(e=>`<p class="editorial-paragraph">${e}</p>`).join(``)}
          </div>

          <!-- Core Competencies Matrix -->
          <div class="about-competencies-block" data-reveal="fade-up">
            <div class="competencies-header">
              <span class="comp-title">CORE COMPETENCIES</span>
              <span class="tag">9 KEY STRENGTHS</span>
            </div>
            <div class="strengths-grid">
              ${i}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Metadata Blocks -->
      <div class="about-metadata-row">
        ${r}
      </div>
    </div>
  `,e.appendChild(n)}function o(e,t){let n=document.createElement(`section`);n.id=`disciplines`,n.className=`section disciplines-section`,n.innerHTML=`
    <div class="container">
      <div class="section-tag">Disciplines & Philosophy</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Build. Solve. Teach. Lead.</h2>
        <p class="section-desc">
          Four interconnected disciplines driving software development, algorithmic mastery, educational mentorship, and institutional leadership.
        </p>
      </div>

      <div class="disciplines-grid">
        ${t.disciplines.map(e=>`
    <div class="discipline-card" data-reveal="scale-up">
      <div class="discipline-header">
        <span class="discipline-num">${e.number}</span>
        <span class="discipline-dot" aria-hidden="true"></span>
      </div>

      <h3 class="discipline-title">${e.title}</h3>
      <div class="discipline-role">${e.role}</div>
      <p class="discipline-desc">${e.description}</p>

      <div class="discipline-tags">
        ${e.tags.map(e=>`<span class="tag">${e}</span>`).join(``)}
      </div>

      <div class="discipline-hover-accent" aria-hidden="true"></div>
    </div>
  `).join(``)}
      </div>
    </div>
  `,e.appendChild(n)}function s(e,t,n){let r=document.createElement(`section`);r.id=`featured-work`,r.className=`section featured-work-section`;let i=t.featuredProject;r.innerHTML=`
    <div class="container">
      <div class="section-tag">${i.number}</div>
      <div class="featured-project-header">
        <h2 class="featured-project-title">${i.title}</h2>
        <p class="featured-project-tagline">${i.tagline}</p>
      </div>

      <!-- Agency Visual Banner -->
      <div class="featured-visual-canvas" data-reveal="scale-up">
        <div class="visual-canvas-grid-bg"></div>
        <div class="visual-canvas-content">
          <div class="canvas-badge">
            <span class="status-light"></span>
            <span>FLAGSHIP ENGINEERING REPOSITORY</span>
          </div>
          <div class="canvas-terminal-preview">
            <div class="terminal-bar">
              <span class="term-dot"></span>
              <span class="term-dot"></span>
              <span class="term-dot"></span>
              <span class="term-title">mnhf_algorithms :: c++17 / core_systems</span>
            </div>
            <div class="term-body">
              <div class="term-line"><span class="term-prompt">$</span> valgrind --leak-check=full ./bin/graph_benchmark</div>
              <div class="term-line term-success">[SUCCESS] 0 errors from 0 contexts (suppressed: 0)</div>
              <div class="term-line term-success">[MEMORY] All heap blocks were freed -- no leaks are possible</div>
              <div class="term-line"><span class="term-prompt">$</span> ./bin/avl_tree_verify --invariant-checks=strict</div>
              <div class="term-line term-accent">[VERIFY] 1,000,000 randomized insertions verified: Balance factor ∈ {-1, 0, 1}</div>
            </div>
          </div>
        </div>
        <div class="canvas-red-laser" aria-hidden="true"></div>
      </div>

      <!-- Agency 5-Column Case Study Breakdown -->
      <div class="featured-breakdown-grid">
        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">01</span>
          <h4 class="breakdown-label">THE PROBLEM</h4>
          <p class="breakdown-text">${i.problem}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">02</span>
          <h4 class="breakdown-label">THE APPROACH</h4>
          <p class="breakdown-text">${i.approach}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">03</span>
          <h4 class="breakdown-label">THE TECHNOLOGY</h4>
          <div class="tech-chips" style="margin-top: 10px;">
            ${i.technology.map(e=>`<span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">${e}</span>`).join(``)}
          </div>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">04</span>
          <h4 class="breakdown-label">THE RESULT</h4>
          <p class="breakdown-text">${i.result}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">05</span>
          <h4 class="breakdown-label">WHAT I LEARNED</h4>
          <p class="breakdown-text">${i.whatILearned}</p>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="featured-actions-footer">
        <button class="btn btn-primary" id="view-flagship-case-study">
          <span>Open Complete Case Study</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        ${i.github?`
          <a href="${i.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>View Source on GitHub</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        `:``}
      </div>
    </div>
  `,e.appendChild(r);let a=r.querySelector(`#view-flagship-case-study`);a&&n&&a.addEventListener(`click`,()=>{n.openModal(i)})}function c(e,t,n){let r=document.createElement(`section`);r.id=`secondary-work`,r.className=`section studio-projects-section`,r.innerHTML=`
    <div class="container">
      <div class="section-tag">Engineering Case Studies</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Systems & Applied Architectures</h2>
        <p class="section-desc">
          Alternating in-depth engineering breakdowns exploring relational schemas, deterministic automation, and software engineering discipline.
        </p>
      </div>

      <div class="editorial-projects-stack">
        ${t.projects.map((e,t)=>`
      <article class="editorial-project-panel ${t%2==0?`layout-left`:`layout-right`}" data-reveal="fade-up">
        <!-- Visual Column -->
        <div class="project-visual-column">
          <div class="project-visual-frame">
            <div class="visual-canvas-grid-bg"></div>
            <div class="project-preview-mockup">
              <div class="mockup-header">
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-title">${e.title.toLowerCase().replace(/\s+/g,`_`)}</span>
              </div>
              <div class="mockup-content">
                <div class="mockup-category-tag">${e.category}</div>
                <div class="mockup-accent-title">${e.title}</div>
                <div class="mockup-tech-list">
                  ${e.technologies.map(e=>`<span class="tag-sm">${e}</span>`).join(``)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Narrative Column -->
        <div class="project-info-column">
          <div class="project-num-badge">${e.number}</div>
          <h3 class="project-panel-title">${e.title}</h3>
          <p class="project-panel-tagline">${e.tagline}</p>

          <div class="project-metrics-table">
            <div class="metric-row">
              <span class="metric-head">THE PROBLEM</span>
              <span class="metric-body">${e.problem}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">THE APPROACH</span>
              <span class="metric-body">${e.approach}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">MY ROLE</span>
              <span class="metric-body">${e.myContribution}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">VERIFIED OUTCOME</span>
              <span class="metric-body">${e.result}</span>
            </div>
          </div>

          <div class="project-panel-actions">
            <button class="btn btn-primary open-case-study-btn" data-project-id="${e.id}">
              <span>View Case Study</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
            ${e.github?`
              <a href="${e.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <span>Source Code</span>
              </a>
            `:``}
          </div>
        </div>
      </article>
    `).join(``)}
      </div>
    </div>
  `,e.appendChild(r),r.querySelectorAll(`.open-case-study-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.getAttribute(`data-project-id`),i=t.projects.find(e=>e.id===r);i&&n&&n.openModal(i)})})}function l(){let e=document.createElement(`div`);e.className=`modal-backdrop`,e.id=`case-study-modal`,e.setAttribute(`role`,`dialog`),e.setAttribute(`aria-modal`,`true`),e.setAttribute(`aria-hidden`,`true`),e.innerHTML=`
    <div class="modal-window" id="modal-window">
      <div class="modal-header">
        <div class="modal-header-meta" id="modal-project-category">ENGINEERING CASE STUDY</div>
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Close Case Study Modal">&times;</button>
      </div>
      <div class="modal-body" id="modal-body-content">
        <!-- Injected dynamically -->
      </div>
    </div>
  `,document.body.appendChild(e);let t=e.querySelector(`#modal-close-btn`);function n(){e.classList.remove(`active`),e.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``}function r(t){let r=e.querySelector(`#modal-body-content`),i=e.querySelector(`#modal-project-category`);i.textContent=`${t.category} — ARCHITECTURAL BREAKDOWN`;let a=t.caseStudy;r.innerHTML=`
      <h2 class="modal-title">${t.title}</h2>
      <p class="section-desc" style="margin-bottom: 24px;">${t.tagline}</p>

      <div class="tech-chips" style="margin-bottom: 32px;">
        ${t.technologies.map(e=>`<span class="tag" style="border-color: rgba(239, 35, 60, 0.3); color: #ffffff;">${e}</span>`).join(``)}
      </div>

      <div class="modal-case-sections">
        <div class="case-section-item">
          <div class="case-section-number">01 — Overview</div>
          <h3 class="case-section-heading">Executive Engineering Summary</h3>
          <p class="case-section-body">${a.overview}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">02 — Problem</div>
          <h3 class="case-section-heading">Root Challenge & Context</h3>
          <p class="case-section-body">${a.problem}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">03 — Approach</div>
          <h3 class="case-section-heading">Methodology & Architectural Strategy</h3>
          <p class="case-section-body">${a.approach}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">04 — Technology</div>
          <h3 class="case-section-heading">Stack & Systems Environment</h3>
          <p class="case-section-body">${a.technology}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">05 — Implementation</div>
          <h3 class="case-section-heading">Execution & Engineering Milestones</h3>
          <p class="case-section-body">${a.implementation}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">06 — Results</div>
          <h3 class="case-section-heading">Outcomes & Benchmarks</h3>
          <p class="case-section-body">${a.results}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">07 — Lessons Learned</div>
          <h3 class="case-section-heading">Reflections & Takeaways</h3>
          <p class="case-section-body">${a.lessonsLearned}</p>
        </div>
      </div>

      <div style="margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap;">
        ${t.github?`
          <a href="${t.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>View GitHub Repository</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        `:``}
        ${t.liveDemo?`
          <a href="${t.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <span>Live Demonstration</span>
          </a>
        `:``}
        <button class="btn btn-outline-red" id="modal-inner-close">Close Case Study</button>
      </div>
    `,e.querySelector(`#modal-inner-close`)?.addEventListener(`click`,n),e.classList.add(`active`),e.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`}return e.addEventListener(`click`,t=>{t.target===e&&n()}),t.addEventListener(`click`,n),window.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`active`)&&n()}),{openModal:r,closeModal:n}}function u(e,t){let n=document.createElement(`section`);n.id=`skills`,n.className=`section`,n.innerHTML=`
    <div class="container">
      <div class="section-tag">04 / Capabilities</div>
      <h2 class="section-title">Technical Skills & Architecture</h2>
      <p class="section-desc">
        Grounded in low-level memory mechanics, object-oriented design, algorithmic efficiency, and relational data structures.
      </p>

      <div class="skills-grid">
        ${t.skills.categories.map(e=>`
    <div class="skill-category-card">
      <div class="skill-category-header">
        <h3 class="skill-category-title">${e.title}</h3>
        <p class="skill-category-desc">${e.description}</p>
      </div>

      <div class="skill-items-list">
        ${e.items.map(e=>`
          <div class="skill-item-row">
            <div class="skill-item-head">
              <span class="skill-name">${e.name}</span>
              <span class="skill-level">${e.level}</span>
            </div>
            <div class="skill-tags">
              ${e.tags.map(e=>`<span class="tag">${e}</span>`).join(``)}
            </div>
            ${e.note?`<p class="skill-note">${e.note}</p>`:``}
          </div>
        `).join(``)}
      </div>
    </div>
  `).join(``)}
      </div>
    </div>
  `,e.appendChild(n)}function d(e,t){let n=document.createElement(`section`);n.id=`teaching`,n.className=`section studio-teaching-section`,n.innerHTML=`
    <div class="container">
      <!-- Section Masthead -->
      <div class="teaching-section-header" data-reveal="fade-up">
        <span class="section-editorial-num">02</span>
        <h2 class="section-editorial-title">TEACHING</h2>
      </div>

      <!-- Distinctive Visual Headline -->
      <div class="teaching-headline-banner" data-reveal="fade-up">
        <h3 class="teaching-main-quote">
          "I don't just learn technology.<br />
          <span class="text-gradient-red">I teach it.</span>"
        </h3>
        <p class="teaching-lead-desc">
          Teaching is not an afterthought to my software engineering journey—it is the ultimate crucible of technical mastery. To guide over 10+ students and train peer cohorts in C/C++ memory mechanics demands an uncompromising command of foundational first principles.
        </p>
      </div>

      <!-- Enormous Visual Numbers -->
      <div class="teaching-colossal-metrics-grid">
        ${t.teaching.metrics.map(e=>`
    <div class="teaching-colossal-metric" data-reveal="scale-up">
      <div class="metric-huge-num">${e.value}</div>
      <div class="metric-huge-label">${e.label}</div>
      <p class="metric-huge-detail">${e.detail}</p>
      <div class="metric-bottom-accent" aria-hidden="true"></div>
    </div>
  `).join(``)}
      </div>

      <!-- Pedagogical Methodology Pillars -->
      <div class="teaching-pillars-header" data-reveal="fade-up">
        <span class="section-tag" style="margin-bottom: 0;">Pedagogical Framework</span>
        <h4 style="font-size: 1.5rem; color: #ffffff; margin-top: 8px;">From Core Mechanics to Autonomous Engineering</h4>
      </div>

      <div class="teaching-pillars-grid">
        ${t.teaching.pillars.map(e=>`
    <div class="teaching-pillar-card" data-reveal="fade-up">
      <div class="pillar-num-accent">${e.number}</div>
      <h3 class="pillar-title">${e.title}</h3>
      <p class="pillar-desc">${e.description}</p>
    </div>
  `).join(``)}
      </div>
    </div>
  `,e.appendChild(n)}function f(e,t){let n=document.createElement(`section`);n.id=`leadership`,n.className=`section studio-leadership-section`,n.innerHTML=`
    <div class="container">
      <div class="leadership-section-header" data-reveal="fade-up">
        <span class="section-editorial-num">03</span>
        <h2 class="section-editorial-title">LEADERSHIP</h2>
      </div>

      <div class="leadership-lead-text" data-reveal="fade-up">
        <h3 class="leadership-quote">"Leadership is turning collective intent into institutional execution."</h3>
        <p class="leadership-desc">
          Balancing executive coordination, university administration liaisons, and student mentorship across major academic and co-curricular programs.
        </p>
      </div>

      <div class="leadership-cards-grid">
        ${t.leadership.roles.map(e=>`
    <div class="leadership-editorial-card" data-reveal="scale-up">
      <div class="leadership-card-top">
        <div>
          <span class="leadership-org-badge">${e.organization}</span>
          <h3 class="leadership-role-heading">${e.title}</h3>
        </div>
        <span class="leadership-status-pill">${e.period}</span>
      </div>

      <p class="leadership-editorial-summary">${e.summary}</p>

      <div class="leadership-responsibilities-box">
        <h4 class="box-label">CORE MANDATE & IMPACT</h4>
        <ul class="responsibilities-list">
          ${e.responsibilities.map(e=>`
            <li>
              <span class="bullet-red" aria-hidden="true">▪</span>
              <span>${e}</span>
            </li>
          `).join(``)}
        </ul>
      </div>

      <div class="leadership-skills-chips">
        ${e.competencies.map(e=>`<span class="tag">${e}</span>`).join(``)}
      </div>
    </div>
  `).join(``)}
      </div>
    </div>
  `,e.appendChild(n)}function p(e,t){let n=document.createElement(`section`);n.id=`experience`,n.className=`section studio-experience-section`;let r=t.experience.map(e=>`
    <div class="editorial-exp-card" data-reveal="fade-up">
      <div class="exp-card-header">
        <div>
          <span class="exp-category-tag">${e.category}</span>
          <h3 class="exp-role-title">${e.role}</h3>
          <div class="exp-context-subtitle">${e.context}</div>
        </div>
        <span class="exp-period-badge">${e.period}</span>
      </div>

      <div class="exp-detail-matrix">
        <div class="matrix-cell">
          <span class="cell-label">RESPONSIBILITY</span>
          <p class="cell-text">${e.responsibility}</p>
        </div>
        <div class="matrix-cell">
          <span class="cell-label">VERIFIED IMPACT</span>
          <p class="cell-text">${e.impact}</p>
        </div>
      </div>
    </div>
  `).join(``);n.innerHTML=`
    <div class="container">
      <div class="section-tag">Trajectory & Qualifications</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Experience & Education</h2>
        <p class="section-desc">
          Structured professional and academic track record defined by technical rigor, teaching excellence, and community leadership.
        </p>
      </div>

      <div class="exp-edu-editorial-grid">
        <!-- Left: Education & Academic Rigor -->
        <div class="education-editorial-column" data-reveal="scale-up">
          <div class="education-prestige-card">
            <div class="edu-prestige-top">
              <span class="edu-tag-gold">ACADEMIC DISTINCTION</span>
              <div class="edu-cgpa-massive">${t.education.cgpa}</div>
              <div class="edu-cgpa-scale">CGPA ON 4.00 SCALE</div>
            </div>

            <div class="edu-degree-details">
              <h3 class="edu-degree-name">${t.education.degree}</h3>
              <p class="edu-institution-name">${t.education.institution}</p>
              <p class="edu-institution-note">${t.education.institutionNote}</p>
            </div>

            <div class="edu-highlights-box">
              <h4 class="edu-box-title">HONORS & HIGHLIGHTS</h4>
              <ul class="edu-highlights-ul">
                ${t.education.highlights.map(e=>`
                  <li>
                    <span class="edu-bullet">▸</span>
                    <span>${e}</span>
                  </li>
                `).join(``)}
              </ul>
            </div>
          </div>
        </div>

        <!-- Right: Experience Column -->
        <div class="experience-editorial-column">
          <div class="exp-cards-stack">
            ${r}
          </div>
        </div>
      </div>
    </div>
  `,e.appendChild(n)}function m(e,t){let n=document.createElement(`section`);n.id=`achievements`,n.className=`section achievements-section`,n.innerHTML=`
    <div class="container">
      <div class="section-tag">Recognitions & Benchmarks</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Achievements & Credentials</h2>
        <p class="section-desc">
          Verified milestones spanning academic performance, teaching appointments, and leadership responsibilities.
        </p>
      </div>

      <div class="achievements-grid">
        ${[{id:`academic`,title:`ACADEMIC`,items:[{title:`CGPA 3.91 Distinction`,detail:`Software Engineering Department • Continuous academic excellence across systems and theory.`}]},{id:`teaching`,title:`TEACHING & MENTORSHIP`,items:[{title:`ACM Instructor Appointment`,detail:`Selected to instruct peer cohorts in C/C++ and algorithmic foundations.`},{title:`5+ Years Educational Impact`,detail:`10+ students guided through individualized programming and academic tutoring.`}]},{id:`leadership`,title:`LEADERSHIP & SERVICE`,items:[{title:`Additional Co-Curricular Secretary`,detail:`Institutional student leadership steering campus-wide initiatives and committee coordination.`}]},{id:`competitions`,title:`COMPETITIONS`,items:[{title:`Programming Contest Participation`,detail:`Active participation in institutional problem solving and mock benchmarks.`,isPlaceholder:!0}]},{id:`certifications`,title:`CERTIFICATIONS`,items:[{title:`Technical Certifications`,detail:`Editable category ready for verified credential additions.`,isPlaceholder:!0}]}].map(e=>`
    <div class="achievement-category-panel" data-reveal="fade-up">
      <div class="achievement-cat-header">
        <span class="cat-tag">${e.title}</span>
        <span class="cat-count">${e.items.length} ${e.items.length===1?`RECORD`:`RECORDS`}</span>
      </div>

      <div class="achievement-items-list">
        ${e.items.map(e=>`
          <div class="achievement-item ${e.isPlaceholder?`placeholder-item`:``}">
            <div class="achieve-title-row">
              <h4 class="achieve-title">${e.title}</h4>
              ${e.isPlaceholder?`<span class="status-badge-pending">RECORD REPOSITORY READY</span>`:`<span class="status-badge-verified">VERIFIED RECORD</span>`}
            </div>
            <p class="achieve-detail">${e.detail}</p>
          </div>
        `).join(``)}
      </div>
    </div>
  `).join(``)}
      </div>
    </div>
  `,e.appendChild(n)}function h(e,t){let n=document.createElement(`section`);n.id=`educational-media`,n.className=`section studio-media-section`;let r=t.educationalMedia;n.innerHTML=`
    <div class="container">
      <div class="section-tag">Public Knowledge Sharing</div>
      
      <div class="media-banner-card" data-reveal="scale-up">
        <div class="media-banner-left">
          <div class="yt-pill-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YOUTUBE KNOWLEDGE SHARING</span>
          </div>
          <h3 class="media-banner-title">"${r.statement}"</h3>
          <p class="media-banner-sub">${r.note}</p>
        </div>

        <div class="media-banner-right">
          <div class="media-stat-box">
            <span class="stat-network">YOUTUBE</span>
            <span class="stat-handle">${r.channelName}</span>
          </div>
          <a
            href="${r.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-arrow-hover"
            style="width: 100%; justify-content: center;"
          >
            <span>Visit Educational Channel</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  `,e.appendChild(n)}function g(e,t,n){let r=document.createElement(`section`);r.id=`contact`,r.className=`section studio-contact-section`;let i=t.contact.socials.map(e=>`
    <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="studio-channel-link" data-reveal="fade-up">
      <div class="channel-left">
        <span class="channel-network-name">${e.name}</span>
        <span class="channel-handle">${e.label}</span>
      </div>
      <span class="channel-arrow-icon" aria-hidden="true">↗</span>
    </a>
  `).join(``);r.innerHTML=`
    <div class="container">
      <div class="section-tag" data-reveal="fade-up">Initiate Contact</div>

      <!-- Film Title Closing Headline -->
      <div class="contact-film-hero-text" data-reveal="fade-up">
        <div class="film-text-line">LET'S BUILD</div>
        <div class="film-text-line text-indent">SOMETHING</div>
        <div class="film-text-line text-accent">MEANINGFUL.</div>
      </div>

      <p class="contact-sub-statement" data-reveal="fade-up">
        "${t.contact.subheadline}"
      </p>

      <div class="contact-dual-column">
        <!-- Direct Channels Column -->
        <div class="contact-channels-column">
          <div class="channels-stack">
            ${i}
          </div>

          <!-- Quick Email Clipboard Box -->
          <div class="email-clipboard-box" data-reveal="fade-up">
            <span class="clipboard-box-label">DIRECT CORRESPONDENCE</span>
            <div class="clipboard-action-row">
              <span class="clipboard-email-address">${t.contact.email}</span>
              <button id="copy-email-btn" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.76rem;">
                <span>Copy Email</span>
              </button>
            </div>
            <div id="copy-feedback-toast" class="copy-toast" style="display: none;">
              ✓ Copied to clipboard
            </div>
          </div>
        </div>

        <!-- Interactive Direct Message Form -->
        <div class="contact-form-column" data-reveal="scale-up">
          <div class="studio-form-card">
            <h3 class="form-card-title">Send a Direct Message</h3>
            
            <form id="studio-contact-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">Your Name</label>
                <input type="text" id="contact-name" class="form-input" placeholder="e.g. Engineering Lead / Recruiter" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Your Email</label>
                <input type="email" id="contact-email" class="form-input" placeholder="name@organization.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-subject">Inquiry Purpose</label>
                <input type="text" id="contact-subject" class="form-input" placeholder="Software Engineering / Mentorship / Collaboration" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Message</label>
                <textarea id="contact-message" class="form-textarea" placeholder="Describe the opportunity or idea..." required></textarea>
              </div>

              <button type="submit" class="btn btn-accent" style="width: 100%;">
                <span>Transmit Message</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
              <div id="form-status-msg" class="form-status-alert" style="display: none;"></div>
            </form>
          </div>
        </div>
      </div>

      <!-- Studio Minimal Footer Bar -->
      <div class="studio-sub-footer">
        <div class="footer-left">
          <span>${t.profile.fullName}</span>
          <span class="footer-sep">/</span>
          <span>${t.profile.academicStanding}</span>
        </div>
        <div class="footer-right">
          <button id="replay-intro-btn" class="footer-replay-action" aria-label="Replay Cinematic Film Intro">
            ▶ Replay Film Intro
          </button>
        </div>
      </div>
    </div>
  `,e.appendChild(r);let a=r.querySelector(`#copy-email-btn`),o=r.querySelector(`#copy-feedback-toast`);a&&a.addEventListener(`click`,()=>{navigator.clipboard.writeText(t.contact.email).then(()=>{o.style.display=`block`,setTimeout(()=>{o.style.display=`none`},2400)})});let s=r.querySelector(`#studio-contact-form`),c=r.querySelector(`#form-status-msg`);s&&s.addEventListener(`submit`,e=>{e.preventDefault();let t=s.querySelector(`button[type="submit"]`);t.disabled=!0,t.innerHTML=`<span>Transmitting...</span>`,setTimeout(()=>{c.style.display=`block`,c.style.color=`#4ade80`,c.textContent=`Message received. Thank you! I will respond promptly.`,s.reset(),t.disabled=!1,t.innerHTML=`<span>Transmit Message →</span>`},700)});let l=r.querySelector(`#replay-intro-btn`);l&&typeof n==`function`&&l.addEventListener(`click`,()=>{n()})}function _(e,t){let n=document.createElement(`section`);n.id=`final-screen`,n.className=`final-film-screen`,n.innerHTML=`
    <div class="final-screen-inner">
      <div class="final-screen-signal-dot" aria-hidden="true"></div>
      <h2 class="final-screen-name">${t.profile.fullName}</h2>
      <p class="final-screen-descriptor">SOFTWARE ENGINEERING • TECHNOLOGY • EDUCATION</p>
      <div class="final-screen-copyright">
        © ${new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
      <a href="#hero" class="final-screen-back-top" aria-label="Return to top">
        <span>RETURN TO SURFACE ↑</span>
      </a>
    </div>
  `,e.appendChild(n)}function v(){document.querySelectorAll(`.section`).forEach(e=>{let t=e.querySelector(`.section-tag`),n=e.querySelector(`.section-title`),r=e.querySelector(`.section-desc`);t&&t.setAttribute(`data-reveal`,`fade-up`),n&&n.setAttribute(`data-reveal`,`fade-up`),r&&r.setAttribute(`data-reveal`,`fade-up`)});function e(e,t,n=90){document.querySelectorAll(e).forEach(e=>{e.classList.add(`stagger-container`),e.setAttribute(`data-reveal`,`stagger`),e.querySelectorAll(t).forEach((e,t)=>{e.classList.add(`stagger-item`),e.style.setProperty(`--stagger-delay`,`${t*n}ms`)})})}e(`.strengths-grid`,`.strength-pill`,50),e(`.teaching-metrics-grid`,`.metric-card`,120),e(`.teaching-pillars-grid`,`.pillar-card`,100),e(`.skills-grid`,`.skill-category-card`,120),e(`.secondary-projects-grid`,`.secondary-project-card`,140),e(`.dual-section-grid`,`.research-card, .content-card`,140),e(`.research-item-list`,`.research-item`,90),e(`.contact-channels`,`.contact-channel-card`,100),document.querySelectorAll(`
    .academic-highlight-card,
    .teaching-hero-banner,
    .leadership-card,
    .flagship-project-card,
    .education-panel,
    .timeline-entry,
    .contact-form-card
  `).forEach(e=>{e.setAttribute(`data-reveal`,`scale-up`)});let t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add(`is-revealed`),e.target.classList.contains(`stagger-container`)&&e.target.querySelectorAll(`.stagger-item`).forEach(e=>{e.classList.add(`is-revealed`)});let r=e.target.querySelector(`.metric-value`);r&&!r.dataset.counted&&(r.dataset.counted=`true`,n(r)),t.unobserve(e.target)}})},{root:null,rootMargin:`0px 0px -80px 0px`,threshold:.12});document.querySelectorAll(`[data-reveal]`).forEach(e=>{t.observe(e)});function n(e){e.style.transform=`scale(0.85)`,e.style.transition=`transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`,setTimeout(()=>{e.style.transform=`scale(1)`},100)}let r=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target.querySelector(`.timeline-node`);e.isIntersecting&&t&&t.classList.add(`node-active`)})},{rootMargin:`0px 0px -20% 0px`,threshold:.5});document.querySelectorAll(`.timeline-entry`).forEach(e=>{r.observe(e)})}document.addEventListener(`DOMContentLoaded`,()=>{let y=document.getElementById(`app`);if(!y)return;t();let b=l();n(document.body),r(y,e);let x=document.createElement(`main`);x.id=`main-editorial-content`,y.appendChild(x),i(x,e),a(x,e),o(x,e),s(x,e,b),c(x,e,b),u(x,e),d(x,e),f(x,e),p(x,e),m(x,e),h(x,e),g(y,e,()=>{window.scrollTo({top:0,behavior:`smooth`})}),_(y,e),v()});