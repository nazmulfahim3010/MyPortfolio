/**
 * Disciplines Component ("WHAT I DO")
 * Visual storytelling section focusing on:
 * 01 BUILD (Software Engineering & Architecture)
 * 02 SOLVE (Algorithmic Problem Solving & Exploration)
 * 03 TEACH (Programming Education & Mentorship)
 * 04 LEAD (Student Leadership & Coordination)
 * 
 * High-impact typographic layout with interactive hover states,
 * dedicated SVG iconography, and enhanced dark glass readability.
 */

const DISCIPLINE_ICONS = {
  "01": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2"></line>
  </svg>`, // Systems Architecture / Code
  "02": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`, // Algorithms / Logic / CPU
  "03": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>`, // Teaching / Academy / Graduation
  "04": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>` // Leadership / Compass / Direction
};

export function renderDisciplines(container, data) {
  const section = document.createElement('section');
  section.id = 'disciplines';
  section.className = 'section disciplines-section';

  const disciplinesHtml = data.disciplines.map(d => `
    <div class="discipline-card" data-reveal="scale-up">
      <div class="discipline-header">
        <div class="discipline-badge">
          <span class="discipline-num">${d.number}</span>
          <span class="discipline-tag-sep">/</span>
          <span class="discipline-cat">PILLAR</span>
        </div>
        <div class="discipline-icon-box" aria-hidden="true">
          ${DISCIPLINE_ICONS[d.number] || ''}
        </div>
      </div>

      <h3 class="discipline-title">${d.title}</h3>
      <div class="discipline-role-badge">
        <span>${d.role}</span>
      </div>
      <p class="discipline-desc">${d.description}</p>

      <div class="discipline-tags">
        ${d.tags.map(t => `<span class="discipline-tag">${t}</span>`).join('')}
      </div>

      <div class="discipline-hover-accent" aria-hidden="true"></div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">02 — DISCIPLINES & PHILOSOPHY</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Build. Solve. Teach. Lead.</h2>
        <p class="section-desc">
          Four interconnected disciplines driving software engineering rigor, algorithmic problem solving, pedagogical mentorship, and institutional student leadership.
        </p>
      </div>

      <div class="disciplines-grid">
        ${disciplinesHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
