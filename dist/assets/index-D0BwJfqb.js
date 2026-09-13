(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=e(a);fetch(a.href,t)}})();const v={profile:{fullName:"MD NAZMUL HASAN FAHIM",splitName:{first:"MD NAZMUL",last:"HASAN FAHIM"},shortName:"NAZMUL FAHIM",masthead:"FAHIM / MNHF",monogram:"MNHF",heroRole:"SOFTWARE ENGINEERING STUDENT",subRoles:["PROGRAMMER","EDUCATOR","TECHNOLOGY ENTHUSIAST","STUDENT LEADER"],academicStanding:"CGPA 3.91",brandConcept:"BUILD. SOLVE. TEACH.",primaryStatement:"Building technology, solving problems, and helping others learn.",editorialQuote:"I build technology, solve problems, teach others, and lead communities.",bio:["I am a proactive Software Engineering student with a distinguished academic record (CGPA 3.91), pairing low-level computational discipline with extensive experience in technical instruction and student leadership.","Beyond core software engineering across C, C++, and Python, my strongest differentiator is the synthesis of analytical problem-solving and educational mentorship. Over the past 5+ years, I have guided more than 10+ private tutoring students, served as an ACM Instructor, and facilitated structured programming problem-solving curricula.","In institutional capacities—notably as Additional Co-Curricular Secretary and ACM Instructor—I coordinate initiatives across students, faculty, teams, and administration, transforming complex goals into structured, high-impact programs."],metadataBlocks:[{label:"CGPA",value:"3.91",detail:"Scale of 4.00"},{label:"TEACHING",value:"5+ YEARS",detail:"Instruction & Mentorship"},{label:"FOCUS",value:"SOFTWARE ENG.",detail:"Systems & Algorithms"},{label:"ROLE",value:"ACM INSTRUCTOR",detail:"Technical Leadership"}],assets:{portraitImage:"/assets/images/portrait.jpg",introVideo:"/assets/video/intro.mp4",favicon:"/assets/images/favicon.svg"},coreStrengths:[{name:"Communication",description:"Articulating complex technical concepts with clarity and precision."},{name:"Coordination",description:"Aligning multi-disciplinary teams, faculty, and student bodies seamlessly."},{name:"Leadership",description:"Guiding student initiatives, fostering collaborative culture, and driving execution."},{name:"Teaching",description:"5+ years developing curriculum and mentoring across academic and programming topics."},{name:"Mentoring",description:"Personalized guidance helping 10+ students unlock analytical problem-solving."},{name:"Problem Solving",description:"Systematic algorithmic thinking using structured, modular approaches."},{name:"Adaptability",description:"Rapid assimilation of new paradigms, technologies, and institutional challenges."},{name:"Event Planning",description:"End-to-end execution of campus events, hackathons, and academic workshops."},{name:"Team Management",description:"Empowering team members, delegating effectively, and ensuring milestone delivery."}]},disciplines:[{number:"01",title:"BUILD",role:"Software Engineering & Architecture",description:"Low-level systems programming in C and C++, modular software architecture, data structure implementation, and deterministic memory mechanics.",tags:["C++","C","Object-Oriented Design","Memory Safety","System Foundations"]},{number:"02",title:"SOLVE",role:"Algorithms & Technical Exploration",description:"Analytical problem solving, time/space complexity optimization, coursework mastery, and active exploration into computer vision and applied intelligence.",tags:["Algorithmic Design","Discrete Mathematics","Data Structures","Computer Vision Concepts"]},{number:"03",title:"TEACH",role:"Programming Education & Mentorship",description:"5+ years dedicated to breaking down theoretical concepts into rebuildable mental models through ACM instruction, private tutoring, and structured workshops.",tags:["First-Principles Pedagogy","ACM Workshops","10+ Students","Curriculum Design"]},{number:"04",title:"LEAD",role:"Student Leadership & Coordination",description:"Steering institutional initiatives as Additional Co-Curricular Secretary, managing cross-functional student teams, and bridging student aspirations with institutional execution.",tags:["Institutional Liaison","Event Execution","Team Management","Public Communication"]}],featuredProject:{id:"featured-flagship",number:"01 / FEATURED WORK",title:"Algorithmic Problem Solving & Data Structures Hub",category:"Software Engineering / Algorithms & Data Structures",tagline:"High-performance C++ & C algorithmic architecture engineered for computational efficiency, cache awareness, and invariant verification.",problem:"Students and emerging engineers often struggle to bridge abstract algorithmic proofs with concrete, memory-safe pointer manipulation and boundary validation in C and C++.",approach:"Designed a modular, self-verifying architecture where each data structure is isolated with invariant assertions, comprehensive edge-case harnesses, and memory leak profiling.",technology:["C++","C","Standard Template Library","Algorithm Optimization","Dynamic Memory"],result:"Achieved 100% leak-free execution across rigorous stress tests; deployed as the core teaching asset during ACM programming sessions to illustrate pointer safety.",whatILearned:"Clarity of code structure and visual state tracing reduces student conceptual debugging time by more than half, proving low-level engineering and educational clarity reinforce one another.",myContribution:"Architected the algorithmic implementations, structured clean test suites, authored technical proofs, and integrated invariant harnesses.",github:"https://github.com/nazmulfahim3010",liveDemo:null,caseStudy:{overview:"An architectural deep-dive into constructing resilient, self-verifying algorithmic modules in C++ and C, emphasizing boundary-safety, cache-friendly data layout, and intuitive pedagogical documentation.",problem:"Traditional algorithmic references frequently isolate theoretical pseudocode from real-world pointer arithmetic, cache locality, and asymptotic trade-offs. Learners often lack a clean bridge between concept and low-level mechanics.",approach:"Adopted a test-driven, modular philosophy: each data structure (trees, disjoint sets, graph representations) is isolated in pure C/C++ with invariant assertions, comprehensive edge-case suites, and memory profiling.",technology:"Utilized modern C++, standard template library internals, C dynamic allocation handlers, and POSIX memory analysis utilities.",implementation:"Constructed clear separation between abstract interface declarations, encapsulated memory handlers, and algorithmic drivers. Implemented stress-testing harnesses that generate randomized combinatorial inputs.",results:"Achieved zero memory-leak execution across all stress suites; successfully deployed as teaching examples during ACM instruction sessions to illustrate pointer safety and time complexity.",lessonsLearned:"First-principles documentation combined with visual state tracing reduces student conceptual debugging time by more than half, proving that clarity of code structure is as crucial as algorithmic asymptotic order."}},projects:[{id:"project-academic-management",number:"02",title:"Structured Academic Data & Evaluation Model",category:"Database Engineering & Relational Design",tagline:"Normalized relational schema and query engine for institutional grading, student performance metrics, and curriculum progression.",problem:"Educational tracking often suffers from denormalized datasets, conflicting grade histories, and cumbersome reporting overhead across student cohorts.",approach:"Engineered a 3NF-normalized relational database architecture with strict foreign key constraints, composite term keys, and view-based abstraction for GPA computation.",implementation:"Built normalized tables for Students, Courses, Prerequisites, Enrollments, and Evaluations with stored query procedures that compute running metrics.",technologies:["Relational Databases","SQL Query Optimization","Schema Normalization","ER Modeling"],myContribution:"Formulated the relational schema, designed ER diagrams, wrote complex join queries, and benchmarked query performance under simulated multi-semester loads.",result:"Demonstrates production-ready database design principles, maintaining 100% data integrity under concurrent evaluation updates.",github:"https://github.com/nazmulfahim3010",liveDemo:null,caseStudy:{overview:"A rigorous database engineering blueprint modeling the lifecycle of academic performance, attendance metrics, and course prerequisites.",problem:"Handling prerequisite dependency chains and multi-weight grading schemes in conventional flat spreadsheets generates high error rates and redundant manual calculations.",approach:"Engineered a normalized relational schema with strict foreign key constraints, composite keys for term enrollment, and view-based abstraction for GPA computation.",technology:"Relational SQL database engine, structured DDL/DML scripts, and stored view procedures.",implementation:"Built normalized tables for Students, Courses, Prerequisites, Enrollments, and Evaluations. Crafted stored queries that compute running CGPA and evaluate prerequisite readiness.",results:"Maintained mathematical consistency with zero redundant student record updates and sub-millisecond query execution on analytical aggregate queries.",lessonsLearned:"Enforcing business constraints at the database schema level fundamentally eliminates edge-case validation bugs in application layers."}},{id:"project-python-automation",number:"03",title:"Automated Academic Workflow & Utility Suite",category:"Python Systems & Workflow Automation",tagline:"Modular Python utility framework for parsing structured datasets, automating administrative digests, and batch record validation.",problem:"Repetitive manual data entry and report compilation for institutional campus initiatives consume excessive hours and introduce human transcription error.",approach:"Implemented a robust CLI pipeline using modular Python standard libraries, regex sanitization, defensive schema validation, and structured logging.",implementation:"Wrote distinct stages: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with automated summary statistics.",technologies:["Python 3","File I/O","Data Parsing","Automation Scripting","CLI Architecture"],myContribution:"Created the parsing logic, designed CLI argument structures, implemented error-tolerant CSV/Excel handlers, and wrote automated unit tests.",result:"Successfully processed batches of hundreds of registration entries in seconds, flagging anomalies and producing clean attendance sheets.",github:"https://github.com/nazmulfahim3010",liveDemo:null,caseStudy:{overview:"An automated pipeline built in Python to ingest, cleanse, validate, and summarize institutional records with minimal human intervention.",problem:"Organizing committee leads frequently deal with unformatted registration spreadsheets, duplicate student entries, and inconsistent email records prior to workshops.",approach:"Implemented a robust CLI pipeline using modular Python standard libraries, regex sanitization, and structured logging.",technology:"Python 3, argparse, csv/openpyxl handlers, logging framework.",implementation:"Wrote distinct stages: Ingestion -> Schema Validation -> Deduplication -> Normalized Output Generation with summary statistics.",results:"Successfully processed batches of hundreds of entries in seconds, flagging anomalies and producing clean attendance sheets for campus workshops.",lessonsLearned:"Defensive input parsing and clear terminal feedback are critical when building tools meant to be operated by non-technical team coordinators."}}],skills:{categories:[{id:"programming",title:"PROGRAMMING",description:"Core computational foundations, object-oriented architecture, and algorithmic design.",items:[{name:"C",level:"Advanced Foundation",tags:["Memory Management","Pointers","Data Structures","System Concepts"]},{name:"C++",level:"Advanced Problem Solving",tags:["OOP","STL","Algorithm Optimization","Competitive Fundamentals"]},{name:"Python",level:"Applied Development",tags:["Automation","Scripting","Data Handling","Modular Design"]}]},{id:"database",title:"DATABASE",description:"Relational data structuring, query formulation, and persistent data architecture.",items:[{name:"Databases",level:"Structured Architecture",tags:["Relational Design","SQL Modeling","Schema Normalization","Query Logic"]}]},{id:"tools",title:"TOOLS & PRODUCTIVITY",description:"Institutional reporting, analytical documentation, and collaborative workflows.",items:[{name:"Microsoft Office",level:"Professional Suite",tags:["Excel Data Analysis","Technical Documentation","Institutional Presentations"]}]},{id:"ai-vision",title:"AI / COMPUTER VISION",description:"Specialized coursework exploration and emerging technical focus.",items:[{name:"Computer Vision & AI Concepts",level:"Academic Exploration",tags:["Image Processing Foundations","Model Concepts","Upcoming Research Architecture"],note:"Expandable for upcoming project deliverables"}]}]},teaching:{headline:"I don't just learn technology. I teach it.",subheadline:"5+ years dedicated to demystifying programming, academic mentoring, and student development.",metrics:[{value:"5+",label:"YEARS TEACHING",detail:"Continuous educational guidance across programming & academics"},{value:"ACM",label:"INSTRUCTOR ROLE",detail:"Structured training sessions in fundamental & competitive programming"},{value:"10+",label:"STUDENTS MENTORED",detail:"High-touch, customized academic and analytical mentoring"}],pillars:[{number:"01",title:"First-Principles Pedagogy",description:"Breaking down complex algorithmic concepts and memory mechanics in C/C++ into intuitive, rebuildable mental models."},{number:"02",title:"Structured ACM Training",description:"Leading collaborative workshops, debugging sessions, and guided problem-solving sets for aspiring computer science peers."},{number:"03",title:"Individual Mentorship",description:"Tailoring pacing and practice routines to individual student needs, fostering long-term intellectual curiosity and confidence."},{number:"04",title:"Independent Problem Solving",description:"Training students not just to write code, but to independently formulate edge cases, analyze complexity, and debug methodically."}]},leadership:{headline:"Institutional Leadership & Coordination",subheadline:"Bridging student aspirations with institutional execution through structured leadership.",roles:[{title:"Additional Co-Curricular Secretary",organization:"Institutional Student Leadership",period:"Active Leadership Term",summary:"Steering institutional co-curricular initiatives, coordinating university-wide programs, and managing multi-functional committees.",responsibilities:["Coordinated large-scale institutional events, workshops, and extracurricular student platforms.","Liaised between university faculty, department leadership, student executives, and participants.","Managed event logistics, budget allocation, schedule adherence, and volunteer mobilization.","Fostered an inclusive community culture that encourages holistic student participation and skill enhancement."],competencies:["Institutional Coordination","Event Planning","Team Management","Public Communication"]},{title:"ACM Instructor",organization:"ACM Student Chapter / Programming Society",period:"Instruction & Mentorship Term",summary:"Spearheading programming education, technical syllabus planning, and community skill-building sessions.",responsibilities:["Formulated structured curriculum covering procedural programming, data structures, and problem-solving strategies.","Conducted hands-on coding labs, algorithm walk-throughs, and peer review sessions.","Mentored junior cohorts to overcome conceptual barriers in C/C++ and computational logic.","Organized mock programming contests to prepare students for competitive problem-solving benchmarks."],competencies:["Technical Instruction","Curriculum Planning","Student Engagement","Peer Mentorship"]}]},experience:[{role:"ACM Instructor",context:"ACM Student Chapter & Programming Society",responsibility:"Conducting structured programming training in C and C++, designing lab exercises, and mentoring junior cohorts in algorithmic problem solving.",impact:"Elevated foundational programming literacy and contest readiness for student participants.",period:"Instructional Term",category:"Instruction"},{role:"Additional Co-Curricular Secretary",context:"Student Leadership & Institutional Affairs",responsibility:"Directing event planning, coordinating cross-functional student teams, and facilitating institutional collaboration between faculty and students.",impact:"Successfully delivered campus-wide extracurricular initiatives with cross-departmental engagement.",period:"Leadership Term",category:"Leadership"},{role:"Private Tutor & Academic Mentor",context:"Independent Academic Mentorship",responsibility:"Providing 1-on-1 tutoring in programming, mathematics, and science for 10+ students across 5+ years.",impact:"Helped students achieve measurable grade improvements and cultivate independent analytical capability.",period:"5+ Years (Ongoing)",category:"Mentorship"},{role:"Student Mentor & Peer Advisor",context:"Software Engineering Department",responsibility:"Guiding incoming students through academic transitions, study methodologies, and early programming roadblocks.",impact:"Fostered retention, collaborative department culture, and high academic achievement.",period:"Academic Tenure",category:"Student Development"}],education:{degree:"Bachelor of Science in Software Engineering",cgpa:"3.91",cgpaScale:"4.00",status:"Active Student",institution:"University Department of Software Engineering",institutionNote:"Full institutional credentials and transcripts available upon request.",highlights:["Top-tier academic standing with consistent 3.91 CGPA across foundational and advanced engineering semesters.","Recognized for academic excellence, peer tutoring leadership, and co-curricular service.","Active participant in departmental programming activities, workshops, and student mentorship initiatives."]},educationalMedia:{headline:"Public Knowledge Sharing",statement:"I do not only learn technology — I also explain and share knowledge. Creating educational video content reinforces my own mastery while providing students with on-demand, step-by-step guidance.",platform:"YouTube",role:"Educational Content Creator",url:"https://youtube.com/@nazmulfahim3010",channelName:"@nazmulfahim3010",note:"Tutorials, algorithm walk-throughs, and academic deep dives."},contact:{headline:"LET'S BUILD SOMETHING MEANINGFUL.",subheadline:"Open to meaningful opportunities, collaborations, technical projects, and ideas worth building.",email:"nazmulfahim3010@gmail.com",location:"Available for Software Engineering Internships & Technical Collaborations",socials:[{name:"GitHub",url:"https://github.com/nazmulfahim3010",label:"github.com/nazmulfahim3010"},{name:"LinkedIn",url:"https://linkedin.com/in/nazmulfahim3010",label:"linkedin.com/in/nazmulfahim3010"},{name:"YouTube",url:"https://youtube.com/@nazmulfahim3010",label:"youtube.com/@nazmulfahim3010"},{name:"Email",url:"mailto:nazmulfahim3010@gmail.com",label:"nazmulfahim3010@gmail.com"}]}};function $(){if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=document.getElementById("custom-cursor");if(!s)return;const i=s.querySelector(".cursor-dot"),e=s.querySelector(".cursor-ring");let n=window.innerWidth/2,a=window.innerHeight/2,t=n,r=a,o=!1;window.addEventListener("mousemove",m=>{n=m.clientX,a=m.clientY,s.style.opacity="1",i&&(i.style.transform=`translate3d(${n}px, ${a}px, 0)`)},{passive:!0}),window.addEventListener("mouseleave",()=>{s.style.opacity="0"});function l(){t+=(n-t)*.18,r+=(a-r)*.18,e&&(e.style.transform=`translate3d(${t}px, ${r}px, 0) scale(${o?1.8:1})`),requestAnimationFrame(l)}requestAnimationFrame(l);function c(){document.querySelectorAll("a, button, input, textarea, .btn, .tag, .metric-card, .pillar-card, .discipline-card").forEach(h=>{h.addEventListener("mouseenter",()=>{o=!0,s.classList.add("cursor-hover")}),h.addEventListener("mouseleave",()=>{o=!1,s.classList.remove("cursor-hover")})})}c(),new MutationObserver(()=>{c()}).observe(document.body,{childList:!0,subtree:!0})}function R(s){const e=[];let n=0,a=0,t=null;const r=document.createElement("div");r.className="fixed-global-bg-container",r.setAttribute("aria-hidden","true"),r.innerHTML=`
    <canvas id="global-scroll-canvas" class="global-scroll-canvas"></canvas>
    <div class="global-bg-overlay"></div>
    <div class="global-bg-ambient-red"></div>
  `,s.prepend(r);const o=r.querySelector("#global-scroll-canvas"),l=o.getContext("2d",{alpha:!1});function c(d){return`/assets/frames/ezgif-frame-${String(d+1).padStart(3,"0")}.jpg`}function u(){const d=Math.min(window.devicePixelRatio||1,2);o.width=window.innerWidth*d,o.height=window.innerHeight*d,m(Math.round(n))}function m(d){var b,f;let p=e[d];if(!p||!p.complete||p.naturalWidth===0)for(let g=1;g<20;g++){if((b=e[d-g])!=null&&b.complete&&e[d-g].naturalWidth>0){p=e[d-g];break}if((f=e[d+g])!=null&&f.complete&&e[d+g].naturalWidth>0){p=e[d+g];break}}if(p&&p.complete&&p.naturalWidth>0){const g=o.width,S=o.height,y=p.naturalWidth,E=p.naturalHeight,T=g/y,I=S/E,A=Math.max(T,I),k=y*A,L=E*A,M=(g-k)/2,x=(S-L)/2;l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(p,0,0,y,E,M,x,k,L)}}function h(){for(let d=0;d<300;d++){const p=new Image;p.src=c(d),e[d]=p,d===0&&(p.onload=()=>{u()})}}function w(){const d=a-n;Math.abs(d)>.01&&(n+=d*.12,m(Math.round(n))),t=requestAnimationFrame(w)}function C(){const p=(document.documentElement.scrollHeight||document.body.scrollHeight)-window.innerHeight;if(p<=0)return;const b=window.scrollY||window.pageYOffset||0,f=Math.max(0,Math.min(1,b/p));a=Math.min(299,f*299)}return h(),u(),window.addEventListener("resize",u,{passive:!0}),window.addEventListener("scroll",C,{passive:!0}),t=requestAnimationFrame(w),{destroy(){t&&cancelAnimationFrame(t),window.removeEventListener("resize",u),window.removeEventListener("scroll",C),r.remove()}}}function N(s,i){const e=document.createElement("header");e.id="navbar",e.className="studio-navbar",e.innerHTML=`
    <div class="container nav-container">
      <a href="#hero" class="nav-logo" aria-label="${i.profile.fullName}">
        <span class="logo-masthead">${i.profile.masthead}</span>
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
  `,s.appendChild(e);const n=e.querySelectorAll(".nav-link"),a=e.querySelector("#mobile-toggle"),t=e.querySelector("#nav-links");window.addEventListener("scroll",()=>{window.scrollY>40?e.classList.add("scrolled"):e.classList.remove("scrolled")},{passive:!0}),a.addEventListener("click",()=>{t.classList.toggle("open")}),e.querySelectorAll(".nav-link, .nav-cta").forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("open")})});const r=["about","disciplines","featured-work","skills","teaching","leadership","contact"];window.addEventListener("scroll",()=>{let o="";const l=window.scrollY+250;r.forEach(c=>{const u=document.getElementById(c);u&&u.offsetTop<=l&&(o=c)}),n.forEach(c=>{c.classList.remove("active"),c.getAttribute("href")===`#${o}`&&c.classList.add("active")})},{passive:!0})}function O(s,i){const e=document.createElement("section");e.id="hero",e.className="studio-hero-section",e.innerHTML=`
    <div class="container studio-hero-container">
      <!-- Top Status Masthead -->
      <div class="hero-status-row" data-reveal="fade-up">
        <div class="hero-live-badge">
          <span class="status-light"></span>
          <span>AVAILABLE FOR SE INTERNSHIPS & RESEARCH</span>
        </div>
        <div class="hero-academic-meta">
          <span>CGPA: <strong>${i.profile.academicStanding.replace("CGPA ","")}</strong> / 4.00</span>
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
            <div class="hero-role-lead">${i.profile.heroRole}</div>
            <div class="hero-role-sub">${i.profile.subRoles.join(" • ")}</div>
            
            <p class="hero-editorial-statement">
              "${i.profile.primaryStatement}"
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
  `,s.appendChild(e)}function P(s,i){const e=document.createElement("section");e.id="about",e.className="section studio-about-section";const n=i.profile.metadataBlocks.map(t=>`
    <div class="editorial-meta-block" data-reveal="fade-up">
      <span class="meta-block-label">${t.label}</span>
      <div class="meta-block-value">${t.value}</div>
      <span class="meta-block-detail">${t.detail}</span>
    </div>
  `).join(""),a=i.profile.coreStrengths.map(t=>`
    <div class="strength-pill" title="${t.description}">
      <span class="strength-name">${t.name}</span>
    </div>
  `).join("");e.innerHTML=`
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
            ${i.profile.bio.map(t=>`<p class="editorial-paragraph">${t}</p>`).join("")}
          </div>

          <!-- Core Competencies Matrix -->
          <div class="about-competencies-block" data-reveal="fade-up">
            <div class="competencies-header">
              <span class="comp-title">CORE COMPETENCIES</span>
              <span class="tag">9 KEY STRENGTHS</span>
            </div>
            <div class="strengths-grid">
              ${a}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Metadata Blocks -->
      <div class="about-metadata-row">
        ${n}
      </div>
    </div>
  `,s.appendChild(e)}const H={"01":`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2"></line>
  </svg>`,"02":`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="15" x2="23" y2="15"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="15" x2="4" y2="15"></line>
  </svg>`,"03":`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>`,"04":`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>`};function D(s,i){const e=document.createElement("section");e.id="disciplines",e.className="section disciplines-section";const n=i.disciplines.map(a=>`
    <div class="discipline-card" data-reveal="scale-up">
      <div class="discipline-header">
        <div class="discipline-badge">
          <span class="discipline-num">${a.number}</span>
          <span class="discipline-tag-sep">/</span>
          <span class="discipline-cat">PILLAR</span>
        </div>
        <div class="discipline-icon-box" aria-hidden="true">
          ${H[a.number]||""}
        </div>
      </div>

      <h3 class="discipline-title">${a.title}</h3>
      <div class="discipline-role-badge">
        <span>${a.role}</span>
      </div>
      <p class="discipline-desc">${a.description}</p>

      <div class="discipline-tags">
        ${a.tags.map(t=>`<span class="discipline-tag">${t}</span>`).join("")}
      </div>

      <div class="discipline-hover-accent" aria-hidden="true"></div>
    </div>
  `).join("");e.innerHTML=`
    <div class="container">
      <div class="section-tag">02 — DISCIPLINES & PHILOSOPHY</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Build. Solve. Teach. Lead.</h2>
        <p class="section-desc">
          Four interconnected disciplines driving software engineering rigor, algorithmic problem solving, pedagogical mentorship, and institutional student leadership.
        </p>
      </div>

      <div class="disciplines-grid">
        ${n}
      </div>
    </div>
  `,s.appendChild(e)}function j(s,i,e){const n=document.createElement("section");n.id="featured-work",n.className="section featured-work-section";const a=i.featuredProject;n.innerHTML=`
    <div class="container">
      <div class="section-tag">${a.number}</div>
      <div class="featured-project-header">
        <h2 class="featured-project-title">${a.title}</h2>
        <p class="featured-project-tagline">${a.tagline}</p>
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
          <p class="breakdown-text">${a.problem}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">02</span>
          <h4 class="breakdown-label">THE APPROACH</h4>
          <p class="breakdown-text">${a.approach}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">03</span>
          <h4 class="breakdown-label">THE TECHNOLOGY</h4>
          <div class="tech-chips" style="margin-top: 10px;">
            ${a.technology.map(r=>`<span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">${r}</span>`).join("")}
          </div>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">04</span>
          <h4 class="breakdown-label">THE RESULT</h4>
          <p class="breakdown-text">${a.result}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">05</span>
          <h4 class="breakdown-label">WHAT I LEARNED</h4>
          <p class="breakdown-text">${a.whatILearned}</p>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="featured-actions-footer">
        <button class="btn btn-primary" id="view-flagship-case-study">
          <span>Open Complete Case Study</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        ${a.github?`
          <a href="${a.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>View Source on GitHub</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        `:""}
      </div>
    </div>
  `,s.appendChild(n);const t=n.querySelector("#view-flagship-case-study");t&&e&&t.addEventListener("click",()=>{e.openModal(a)})}function F(s,i,e){const n=document.createElement("section");n.id="secondary-work",n.className="section studio-projects-section";const a=i.projects.map((t,r)=>`
      <article class="editorial-project-panel ${r%2===0?"layout-left":"layout-right"}" data-reveal="fade-up">
        <!-- Visual Column -->
        <div class="project-visual-column">
          <div class="project-visual-frame">
            <div class="visual-canvas-grid-bg"></div>
            <div class="project-preview-mockup">
              <div class="mockup-header">
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-title">${t.title.toLowerCase().replace(/\s+/g,"_")}</span>
              </div>
              <div class="mockup-content">
                <div class="mockup-category-tag">${t.category}</div>
                <div class="mockup-accent-title">${t.title}</div>
                <div class="mockup-tech-list">
                  ${t.technologies.map(l=>`<span class="tag-sm">${l}</span>`).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Narrative Column -->
        <div class="project-info-column">
          <div class="project-num-badge">${t.number}</div>
          <h3 class="project-panel-title">${t.title}</h3>
          <p class="project-panel-tagline">${t.tagline}</p>

          <div class="project-metrics-table">
            <div class="metric-row">
              <span class="metric-head">THE PROBLEM</span>
              <span class="metric-body">${t.problem}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">THE APPROACH</span>
              <span class="metric-body">${t.approach}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">MY ROLE</span>
              <span class="metric-body">${t.myContribution}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">VERIFIED OUTCOME</span>
              <span class="metric-body">${t.result}</span>
            </div>
          </div>

          <div class="project-panel-actions">
            <button class="btn btn-primary open-case-study-btn" data-project-id="${t.id}">
              <span>View Case Study</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
            ${t.github?`
              <a href="${t.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <span>Source Code</span>
              </a>
            `:""}
          </div>
        </div>
      </article>
    `).join("");n.innerHTML=`
    <div class="container">
      <div class="section-tag">Engineering Case Studies</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Systems & Applied Architectures</h2>
        <p class="section-desc">
          Alternating in-depth engineering breakdowns exploring relational schemas, deterministic automation, and software engineering discipline.
        </p>
      </div>

      <div class="editorial-projects-stack">
        ${a}
      </div>
    </div>
  `,s.appendChild(n),n.querySelectorAll(".open-case-study-btn").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-project-id"),o=i.projects.find(l=>l.id===r);o&&e&&e.openModal(o)})})}function q(){const s=document.createElement("div");s.className="modal-backdrop",s.id="case-study-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-hidden","true"),s.innerHTML=`
    <div class="modal-window" id="modal-window">
      <div class="modal-header">
        <div class="modal-header-meta" id="modal-project-category">ENGINEERING CASE STUDY</div>
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Close Case Study Modal">&times;</button>
      </div>
      <div class="modal-body" id="modal-body-content">
        <!-- Injected dynamically -->
      </div>
    </div>
  `,document.body.appendChild(s);const i=s.querySelector("#modal-close-btn");function e(){s.classList.remove("active"),s.setAttribute("aria-hidden","true"),document.body.style.overflow=""}function n(a){var l;const t=s.querySelector("#modal-body-content"),r=s.querySelector("#modal-project-category");r.textContent=`${a.category} — ARCHITECTURAL BREAKDOWN`;const o=a.caseStudy;t.innerHTML=`
      <h2 class="modal-title">${a.title}</h2>
      <p class="section-desc" style="margin-bottom: 24px;">${a.tagline}</p>

      <div class="tech-chips" style="margin-bottom: 32px;">
        ${a.technologies.map(c=>`<span class="tag" style="border-color: rgba(239, 35, 60, 0.3); color: #ffffff;">${c}</span>`).join("")}
      </div>

      <div class="modal-case-sections">
        <div class="case-section-item">
          <div class="case-section-number">01 — Overview</div>
          <h3 class="case-section-heading">Executive Engineering Summary</h3>
          <p class="case-section-body">${o.overview}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">02 — Problem</div>
          <h3 class="case-section-heading">Root Challenge & Context</h3>
          <p class="case-section-body">${o.problem}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">03 — Approach</div>
          <h3 class="case-section-heading">Methodology & Architectural Strategy</h3>
          <p class="case-section-body">${o.approach}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">04 — Technology</div>
          <h3 class="case-section-heading">Stack & Systems Environment</h3>
          <p class="case-section-body">${o.technology}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">05 — Implementation</div>
          <h3 class="case-section-heading">Execution & Engineering Milestones</h3>
          <p class="case-section-body">${o.implementation}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">06 — Results</div>
          <h3 class="case-section-heading">Outcomes & Benchmarks</h3>
          <p class="case-section-body">${o.results}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">07 — Lessons Learned</div>
          <h3 class="case-section-heading">Reflections & Takeaways</h3>
          <p class="case-section-body">${o.lessonsLearned}</p>
        </div>
      </div>

      <div style="margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap;">
        ${a.github?`
          <a href="${a.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>View GitHub Repository</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        `:""}
        ${a.liveDemo?`
          <a href="${a.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <span>Live Demonstration</span>
          </a>
        `:""}
        <button class="btn btn-outline-red" id="modal-inner-close">Close Case Study</button>
      </div>
    `,(l=s.querySelector("#modal-inner-close"))==null||l.addEventListener("click",e),s.classList.add("active"),s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}return s.addEventListener("click",a=>{a.target===s&&e()}),i.addEventListener("click",e),window.addEventListener("keydown",a=>{a.key==="Escape"&&s.classList.contains("active")&&e()}),{openModal:n,closeModal:e}}function z(s,i){const e=document.createElement("section");e.id="skills",e.className="section";const n=i.skills.categories.map(a=>`
    <div class="skill-category-card">
      <div class="skill-category-header">
        <h3 class="skill-category-title">${a.title}</h3>
        <p class="skill-category-desc">${a.description}</p>
      </div>

      <div class="skill-items-list">
        ${a.items.map(t=>`
          <div class="skill-item-row">
            <div class="skill-item-head">
              <span class="skill-name">${t.name}</span>
              <span class="skill-level">${t.level}</span>
            </div>
            <div class="skill-tags">
              ${t.tags.map(r=>`<span class="tag">${r}</span>`).join("")}
            </div>
            ${t.note?`<p class="skill-note">${t.note}</p>`:""}
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");e.innerHTML=`
    <div class="container">
      <div class="section-tag">04 / Capabilities</div>
      <h2 class="section-title">Technical Skills & Architecture</h2>
      <p class="section-desc">
        Grounded in low-level memory mechanics, object-oriented design, algorithmic efficiency, and relational data structures.
      </p>

      <div class="skills-grid">
        ${n}
      </div>
    </div>
  `,s.appendChild(e)}function G(s,i){const e=document.createElement("section");e.id="teaching",e.className="section studio-teaching-section";const n=i.teaching.metrics.map(t=>`
    <div class="teaching-colossal-metric" data-reveal="scale-up">
      <div class="metric-huge-num">${t.value}</div>
      <div class="metric-huge-label">${t.label}</div>
      <p class="metric-huge-detail">${t.detail}</p>
      <div class="metric-bottom-accent" aria-hidden="true"></div>
    </div>
  `).join(""),a=i.teaching.pillars.map(t=>`
    <div class="teaching-pillar-card" data-reveal="fade-up">
      <div class="pillar-num-accent">${t.number}</div>
      <h3 class="pillar-title">${t.title}</h3>
      <p class="pillar-desc">${t.description}</p>
    </div>
  `).join("");e.innerHTML=`
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
        ${n}
      </div>

      <!-- Pedagogical Methodology Pillars -->
      <div class="teaching-pillars-header" data-reveal="fade-up">
        <span class="section-tag" style="margin-bottom: 0;">Pedagogical Framework</span>
        <h4 style="font-size: 1.5rem; color: #ffffff; margin-top: 8px;">From Core Mechanics to Autonomous Engineering</h4>
      </div>

      <div class="teaching-pillars-grid">
        ${a}
      </div>
    </div>
  `,s.appendChild(e)}function B(s,i){const e=document.createElement("section");e.id="leadership",e.className="section studio-leadership-section";const n=i.leadership.roles.map(a=>`
    <div class="leadership-editorial-card" data-reveal="scale-up">
      <div class="leadership-card-top">
        <div>
          <span class="leadership-org-badge">${a.organization}</span>
          <h3 class="leadership-role-heading">${a.title}</h3>
        </div>
        <span class="leadership-status-pill">${a.period}</span>
      </div>

      <p class="leadership-editorial-summary">${a.summary}</p>

      <div class="leadership-responsibilities-box">
        <h4 class="box-label">CORE MANDATE & IMPACT</h4>
        <ul class="responsibilities-list">
          ${a.responsibilities.map(t=>`
            <li>
              <span class="bullet-red" aria-hidden="true">▪</span>
              <span>${t}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="leadership-skills-chips">
        ${a.competencies.map(t=>`<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");e.innerHTML=`
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
        ${n}
      </div>
    </div>
  `,s.appendChild(e)}function U(s,i){const e=document.createElement("section");e.id="experience",e.className="section studio-experience-section";const n=i.experience.map(a=>`
    <div class="editorial-exp-card" data-reveal="fade-up">
      <div class="exp-card-header">
        <div>
          <span class="exp-category-tag">${a.category}</span>
          <h3 class="exp-role-title">${a.role}</h3>
          <div class="exp-context-subtitle">${a.context}</div>
        </div>
        <span class="exp-period-badge">${a.period}</span>
      </div>

      <div class="exp-detail-matrix">
        <div class="matrix-cell">
          <span class="cell-label">RESPONSIBILITY</span>
          <p class="cell-text">${a.responsibility}</p>
        </div>
        <div class="matrix-cell">
          <span class="cell-label">VERIFIED IMPACT</span>
          <p class="cell-text">${a.impact}</p>
        </div>
      </div>
    </div>
  `).join("");e.innerHTML=`
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
              <div class="edu-cgpa-massive">${i.education.cgpa}</div>
              <div class="edu-cgpa-scale">CGPA ON 4.00 SCALE</div>
            </div>

            <div class="edu-degree-details">
              <h3 class="edu-degree-name">${i.education.degree}</h3>
              <p class="edu-institution-name">${i.education.institution}</p>
              <p class="edu-institution-note">${i.education.institutionNote}</p>
            </div>

            <div class="edu-highlights-box">
              <h4 class="edu-box-title">HONORS & HIGHLIGHTS</h4>
              <ul class="edu-highlights-ul">
                ${i.education.highlights.map(a=>`
                  <li>
                    <span class="edu-bullet">▸</span>
                    <span>${a}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- Right: Experience Column -->
        <div class="experience-editorial-column">
          <div class="exp-cards-stack">
            ${n}
          </div>
        </div>
      </div>
    </div>
  `,s.appendChild(e)}function Y(s,i){const e=document.createElement("section");e.id="achievements",e.className="section achievements-section";const a=[{id:"academic",title:"ACADEMIC",items:[{title:"CGPA 3.91 Distinction",detail:"Software Engineering Department • Continuous academic excellence across systems and theory."}]},{id:"teaching",title:"TEACHING & MENTORSHIP",items:[{title:"ACM Instructor Appointment",detail:"Selected to instruct peer cohorts in C/C++ and algorithmic foundations."},{title:"5+ Years Educational Impact",detail:"10+ students guided through individualized programming and academic tutoring."}]},{id:"leadership",title:"LEADERSHIP & SERVICE",items:[{title:"Additional Co-Curricular Secretary",detail:"Institutional student leadership steering campus-wide initiatives and committee coordination."}]},{id:"competitions",title:"COMPETITIONS",items:[{title:"Programming Contest Participation",detail:"Active participation in institutional problem solving and mock benchmarks.",isPlaceholder:!0}]},{id:"certifications",title:"CERTIFICATIONS",items:[{title:"Technical Certifications",detail:"Editable category ready for verified credential additions.",isPlaceholder:!0}]}].map(t=>`
    <div class="achievement-category-panel" data-reveal="fade-up">
      <div class="achievement-cat-header">
        <span class="cat-tag">${t.title}</span>
        <span class="cat-count">${t.items.length} ${t.items.length===1?"RECORD":"RECORDS"}</span>
      </div>

      <div class="achievement-items-list">
        ${t.items.map(r=>`
          <div class="achievement-item ${r.isPlaceholder?"placeholder-item":""}">
            <div class="achieve-title-row">
              <h4 class="achieve-title">${r.title}</h4>
              ${r.isPlaceholder?'<span class="status-badge-pending">RECORD REPOSITORY READY</span>':'<span class="status-badge-verified">VERIFIED RECORD</span>'}
            </div>
            <p class="achieve-detail">${r.detail}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");e.innerHTML=`
    <div class="container">
      <div class="section-tag">Recognitions & Benchmarks</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Achievements & Credentials</h2>
        <p class="section-desc">
          Verified milestones spanning academic performance, teaching appointments, and leadership responsibilities.
        </p>
      </div>

      <div class="achievements-grid">
        ${a}
      </div>
    </div>
  `,s.appendChild(e)}function V(s,i){const e=document.createElement("section");e.id="educational-media",e.className="section studio-media-section";const n=i.educationalMedia;e.innerHTML=`
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
          <h3 class="media-banner-title">"${n.statement}"</h3>
          <p class="media-banner-sub">${n.note}</p>
        </div>

        <div class="media-banner-right">
          <div class="media-stat-box">
            <span class="stat-network">YOUTUBE</span>
            <span class="stat-handle">${n.channelName}</span>
          </div>
          <a
            href="${n.url}"
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
  `,s.appendChild(e)}function W(s,i,e){const n=document.createElement("section");n.id="contact",n.className="section studio-contact-section";const a=i.contact.socials.map(u=>`
    <a href="${u.url}" target="_blank" rel="noopener noreferrer" class="studio-channel-link" data-reveal="fade-up">
      <div class="channel-left">
        <span class="channel-network-name">${u.name}</span>
        <span class="channel-handle">${u.label}</span>
      </div>
      <span class="channel-arrow-icon" aria-hidden="true">↗</span>
    </a>
  `).join("");n.innerHTML=`
    <div class="container">
      <div class="section-tag" data-reveal="fade-up">Initiate Contact</div>

      <!-- Film Title Closing Headline -->
      <div class="contact-film-hero-text" data-reveal="fade-up">
        <div class="film-text-line">LET'S BUILD</div>
        <div class="film-text-line text-indent">SOMETHING</div>
        <div class="film-text-line text-accent">MEANINGFUL.</div>
      </div>

      <p class="contact-sub-statement" data-reveal="fade-up">
        "${i.contact.subheadline}"
      </p>

      <div class="contact-dual-column">
        <!-- Direct Channels Column -->
        <div class="contact-channels-column">
          <div class="channels-stack">
            ${a}
          </div>

          <!-- Quick Email Clipboard Box -->
          <div class="email-clipboard-box" data-reveal="fade-up">
            <span class="clipboard-box-label">DIRECT CORRESPONDENCE</span>
            <div class="clipboard-action-row">
              <span class="clipboard-email-address">${i.contact.email}</span>
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
          <span>${i.profile.fullName}</span>
          <span class="footer-sep">/</span>
          <span>${i.profile.academicStanding}</span>
        </div>
        <div class="footer-right">
          <button id="replay-intro-btn" class="footer-replay-action" aria-label="Replay Cinematic Film Intro">
            ▶ Replay Film Intro
          </button>
        </div>
      </div>
    </div>
  `,s.appendChild(n);const t=n.querySelector("#copy-email-btn"),r=n.querySelector("#copy-feedback-toast");t&&t.addEventListener("click",()=>{navigator.clipboard.writeText(i.contact.email).then(()=>{r.style.display="block",setTimeout(()=>{r.style.display="none"},2400)})});const o=n.querySelector("#studio-contact-form"),l=n.querySelector("#form-status-msg");o&&o.addEventListener("submit",u=>{u.preventDefault();const m=o.querySelector('button[type="submit"]');m.disabled=!0,m.innerHTML="<span>Transmitting...</span>",setTimeout(()=>{l.style.display="block",l.style.color="#4ade80",l.textContent="Message received. Thank you! I will respond promptly.",o.reset(),m.disabled=!1,m.innerHTML="<span>Transmit Message →</span>"},700)});const c=n.querySelector("#replay-intro-btn");c&&typeof e=="function"&&c.addEventListener("click",()=>{e()})}function _(s,i){const e=document.createElement("section");e.id="final-screen",e.className="final-film-screen",e.innerHTML=`
    <div class="final-screen-inner">
      <div class="final-screen-signal-dot" aria-hidden="true"></div>
      <h2 class="final-screen-name">${i.profile.fullName}</h2>
      <p class="final-screen-descriptor">SOFTWARE ENGINEERING • TECHNOLOGY • EDUCATION</p>
      <div class="final-screen-copyright">
        © ${new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
      <a href="#hero" class="final-screen-back-top" aria-label="Return to top">
        <span>RETURN TO SURFACE ↑</span>
      </a>
    </div>
  `,s.appendChild(e)}function Q(){document.querySelectorAll(".section").forEach(r=>{const o=r.querySelector(".section-tag"),l=r.querySelector(".section-title"),c=r.querySelector(".section-desc");o&&o.setAttribute("data-reveal","fade-up"),l&&l.setAttribute("data-reveal","fade-up"),c&&c.setAttribute("data-reveal","fade-up")});function i(r,o,l=90){document.querySelectorAll(r).forEach(c=>{c.classList.add("stagger-container"),c.setAttribute("data-reveal","stagger"),c.querySelectorAll(o).forEach((m,h)=>{m.classList.add("stagger-item"),m.style.setProperty("--stagger-delay",`${h*l}ms`)})})}i(".strengths-grid",".strength-pill",50),i(".teaching-metrics-grid",".metric-card",120),i(".teaching-pillars-grid",".pillar-card",100),i(".skills-grid",".skill-category-card",120),i(".secondary-projects-grid",".secondary-project-card",140),i(".dual-section-grid",".research-card, .content-card",140),i(".research-item-list",".research-item",90),i(".contact-channels",".contact-channel-card",100),document.querySelectorAll(`
    .academic-highlight-card,
    .teaching-hero-banner,
    .leadership-card,
    .flagship-project-card,
    .education-panel,
    .timeline-entry,
    .contact-form-card
  `).forEach(r=>{r.setAttribute("data-reveal","scale-up")});const e={root:null,rootMargin:"0px 0px -80px 0px",threshold:.12},n=new IntersectionObserver(r=>{r.forEach(o=>{if(o.isIntersecting){o.target.classList.add("is-revealed"),o.target.classList.contains("stagger-container")&&o.target.querySelectorAll(".stagger-item").forEach(c=>{c.classList.add("is-revealed")});const l=o.target.querySelector(".metric-value");l&&!l.dataset.counted&&(l.dataset.counted="true",a(l)),n.unobserve(o.target)}})},e);document.querySelectorAll("[data-reveal]").forEach(r=>{n.observe(r)});function a(r){r.style.transform="scale(0.85)",r.style.transition="transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",setTimeout(()=>{r.style.transform="scale(1)"},100)}const t=new IntersectionObserver(r=>{r.forEach(o=>{const l=o.target.querySelector(".timeline-node");o.isIntersecting&&l&&l.classList.add("node-active")})},{rootMargin:"0px 0px -20% 0px",threshold:.5});document.querySelectorAll(".timeline-entry").forEach(r=>{t.observe(r)})}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("app");if(!s)return;$();const i=q();R(document.body),N(s,v);const e=document.createElement("main");e.id="main-editorial-content",s.appendChild(e),O(e,v),P(e,v),D(e,v),j(e,v,i),F(e,v,i),z(e,v),G(e,v),B(e,v),U(e,v),Y(e),V(e,v),W(s,v,()=>{window.scrollTo({top:0,behavior:"smooth"})}),_(s,v),Q()});
