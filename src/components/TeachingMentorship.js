/**
 * Studio Teaching & Mentorship Component (02 — TEACHING)
 * Headline: "I don't just learn technology. I teach it."
 * Enormous numbers: 5+ YEARS TEACHING, 10+ STUDENTS MENTORED, ACM INSTRUCTOR.
 * Visual storytelling layout completely distinctive from the technical projects.
 */

export function renderTeachingMentorship(container, data) {
  const section = document.createElement('section');
  section.id = 'teaching';
  section.className = 'section studio-teaching-section';

  const metricsHtml = data.teaching.metrics.map(m => `
    <div class="teaching-colossal-metric" data-reveal="scale-up">
      <div class="metric-huge-num">${m.value}</div>
      <div class="metric-huge-label">${m.label}</div>
      <p class="metric-huge-detail">${m.detail}</p>
      <div class="metric-bottom-accent" aria-hidden="true"></div>
    </div>
  `).join('');

  const pillarsHtml = data.teaching.pillars.map(p => `
    <div class="teaching-pillar-card" data-reveal="fade-up">
      <div class="pillar-num-accent">${p.number}</div>
      <h3 class="pillar-title">${p.title}</h3>
      <p class="pillar-desc">${p.description}</p>
    </div>
  `).join('');

  section.innerHTML = `
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
        ${metricsHtml}
      </div>

      <!-- Pedagogical Methodology Pillars -->
      <div class="teaching-pillars-header" data-reveal="fade-up">
        <span class="section-tag" style="margin-bottom: 0;">Pedagogical Framework</span>
        <h4 style="font-size: 1.5rem; color: #ffffff; margin-top: 8px;">From Core Mechanics to Autonomous Engineering</h4>
      </div>

      <div class="teaching-pillars-grid">
        ${pillarsHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
