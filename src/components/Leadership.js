/**
 * Studio Leadership Component (03 — LEADERSHIP)
 * Editorial chronology featuring:
 * Additional Co-Curricular Secretary & ACM Instructor
 * Event planning, team coordination, student engagement, and stakeholder communication.
 */

export function renderLeadership(container, data) {
  const section = document.createElement('section');
  section.id = 'leadership';
  section.className = 'section studio-leadership-section';

  const rolesHtml = data.leadership.roles.map(role => `
    <div class="leadership-editorial-card" data-reveal="scale-up">
      <div class="leadership-card-top">
        <div>
          <span class="leadership-org-badge">${role.organization}</span>
          <h3 class="leadership-role-heading">${role.title}</h3>
        </div>
        <span class="leadership-status-pill">${role.period}</span>
      </div>

      <p class="leadership-editorial-summary">${role.summary}</p>

      <div class="leadership-responsibilities-box">
        <h4 class="box-label">CORE MANDATE & IMPACT</h4>
        <ul class="responsibilities-list">
          ${role.responsibilities.map(resp => `
            <li>
              <span class="bullet-red" aria-hidden="true">▪</span>
              <span>${resp}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="leadership-skills-chips">
        ${role.competencies.map(comp => `<span class="tag">${comp}</span>`).join('')}
      </div>
    </div>
  `).join('');

  section.innerHTML = `
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
        ${rolesHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
