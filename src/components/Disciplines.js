/**
 * Disciplines Component ("WHAT I DO")
 * Visual storytelling section focusing on:
 * 01 BUILD (Software Engineering & Architecture)
 * 02 SOLVE (Algorithmic Problem Solving & Exploration)
 * 03 TEACH (Programming Education & Mentorship)
 * 04 LEAD (Student Leadership & Coordination)
 * 
 * High-impact typographic layout with interactive hover states and red signal accents.
 */

export function renderDisciplines(container, data) {
  const section = document.createElement('section');
  section.id = 'disciplines';
  section.className = 'section disciplines-section';

  const disciplinesHtml = data.disciplines.map(d => `
    <div class="discipline-card" data-reveal="scale-up">
      <div class="discipline-header">
        <span class="discipline-num">${d.number}</span>
        <span class="discipline-dot" aria-hidden="true"></span>
      </div>

      <h3 class="discipline-title">${d.title}</h3>
      <div class="discipline-role">${d.role}</div>
      <p class="discipline-desc">${d.description}</p>

      <div class="discipline-tags">
        ${d.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="discipline-hover-accent" aria-hidden="true"></div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">Disciplines & Philosophy</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Build. Solve. Teach. Lead.</h2>
        <p class="section-desc">
          Four interconnected disciplines driving software development, algorithmic mastery, educational mentorship, and institutional leadership.
        </p>
      </div>

      <div class="disciplines-grid">
        ${disciplinesHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
