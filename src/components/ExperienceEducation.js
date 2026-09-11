/**
 * Studio Experience & Education Component
 * Editorial chronology:
 * ROLE • CONTEXT • RESPONSIBILITY • IMPACT
 * Paired with clean Software Engineering academic credentials (CGPA 3.91).
 */

export function renderExperienceEducation(container, data) {
  const section = document.createElement('section');
  section.id = 'experience';
  section.className = 'section studio-experience-section';

  const expHtml = data.experience.map(exp => `
    <div class="editorial-exp-card" data-reveal="fade-up">
      <div class="exp-card-header">
        <div>
          <span class="exp-category-tag">${exp.category}</span>
          <h3 class="exp-role-title">${exp.role}</h3>
          <div class="exp-context-subtitle">${exp.context}</div>
        </div>
        <span class="exp-period-badge">${exp.period}</span>
      </div>

      <div class="exp-detail-matrix">
        <div class="matrix-cell">
          <span class="cell-label">RESPONSIBILITY</span>
          <p class="cell-text">${exp.responsibility}</p>
        </div>
        <div class="matrix-cell">
          <span class="cell-label">VERIFIED IMPACT</span>
          <p class="cell-text">${exp.impact}</p>
        </div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
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
              <div class="edu-cgpa-massive">${data.education.cgpa}</div>
              <div class="edu-cgpa-scale">CGPA ON 4.00 SCALE</div>
            </div>

            <div class="edu-degree-details">
              <h3 class="edu-degree-name">${data.education.degree}</h3>
              <p class="edu-institution-name">${data.education.institution}</p>
              <p class="edu-institution-note">${data.education.institutionNote}</p>
            </div>

            <div class="edu-highlights-box">
              <h4 class="edu-box-title">HONORS & HIGHLIGHTS</h4>
              <ul class="edu-highlights-ul">
                ${data.education.highlights.map(h => `
                  <li>
                    <span class="edu-bullet">▸</span>
                    <span>${h}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Right: Experience Column -->
        <div class="experience-editorial-column">
          <div class="exp-cards-stack">
            ${expHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(section);
}
