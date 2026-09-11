/**
 * Technical Skills Component
 * Categorized technical architecture: Programming, Databases, Productivity, and AI/Vision.
 * Avoids generic percentage bars; uses semantic competencies and technical tags.
 */

export function renderTechnicalSkills(container, data) {
  const section = document.createElement('section');
  section.id = 'skills';
  section.className = 'section';

  const categoriesHtml = data.skills.categories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-category-header">
        <h3 class="skill-category-title">${cat.title}</h3>
        <p class="skill-category-desc">${cat.description}</p>
      </div>

      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item-row">
            <div class="skill-item-head">
              <span class="skill-name">${item.name}</span>
              <span class="skill-level">${item.level}</span>
            </div>
            <div class="skill-tags">
              ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${item.note ? `<p class="skill-note">${item.note}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">04 / Capabilities</div>
      <h2 class="section-title">Technical Skills & Architecture</h2>
      <p class="section-desc">
        Grounded in low-level memory mechanics, object-oriented design, algorithmic efficiency, and relational data structures.
      </p>

      <div class="skills-grid">
        ${categoriesHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
