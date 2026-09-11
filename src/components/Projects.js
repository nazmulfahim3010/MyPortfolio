/**
 * Studio Projects Component
 * Alternating editorial panels (left image / right info, right image / left info).
 * Deep case study integration.
 */

export function renderProjects(container, data, modalController) {
  const section = document.createElement('section');
  section.id = 'secondary-work';
  section.className = 'section studio-projects-section';

  const projectsHtml = data.projects.map((p, idx) => {
    const isEven = idx % 2 === 0;

    return `
      <article class="editorial-project-panel ${isEven ? 'layout-left' : 'layout-right'}" data-reveal="fade-up">
        <!-- Visual Column -->
        <div class="project-visual-column">
          <div class="project-visual-frame">
            <div class="visual-canvas-grid-bg"></div>
            <div class="project-preview-mockup">
              <div class="mockup-header">
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-dot"></span>
                <span class="mockup-title">${p.title.toLowerCase().replace(/\s+/g, '_')}</span>
              </div>
              <div class="mockup-content">
                <div class="mockup-category-tag">${p.category}</div>
                <div class="mockup-accent-title">${p.title}</div>
                <div class="mockup-tech-list">
                  ${p.technologies.map(t => `<span class="tag-sm">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Narrative Column -->
        <div class="project-info-column">
          <div class="project-num-badge">${p.number}</div>
          <h3 class="project-panel-title">${p.title}</h3>
          <p class="project-panel-tagline">${p.tagline}</p>

          <div class="project-metrics-table">
            <div class="metric-row">
              <span class="metric-head">THE PROBLEM</span>
              <span class="metric-body">${p.problem}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">THE APPROACH</span>
              <span class="metric-body">${p.approach}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">MY ROLE</span>
              <span class="metric-body">${p.myContribution}</span>
            </div>
            <div class="metric-row">
              <span class="metric-head">VERIFIED OUTCOME</span>
              <span class="metric-body">${p.result}</span>
            </div>
          </div>

          <div class="project-panel-actions">
            <button class="btn btn-primary open-case-study-btn" data-project-id="${p.id}">
              <span>View Case Study</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <span>Source Code</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">Engineering Case Studies</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Systems & Applied Architectures</h2>
        <p class="section-desc">
          Alternating in-depth engineering breakdowns exploring relational schemas, deterministic automation, and software engineering discipline.
        </p>
      </div>

      <div class="editorial-projects-stack">
        ${projectsHtml}
      </div>
    </div>
  `;

  container.appendChild(section);

  // Attach modal handlers
  section.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      const project = data.projects.find(p => p.id === pid);
      if (project && modalController) {
        modalController.openModal(project);
      }
    });
  });
}
