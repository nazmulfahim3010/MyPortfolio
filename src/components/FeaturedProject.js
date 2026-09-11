/**
 * Featured Project Component
 * Agency-grade visual showcase for the flagship work:
 * Algorithmic Problem Solving & Data Structures Hub
 * 
 * Includes:
 * THE PROBLEM
 * THE APPROACH
 * THE TECHNOLOGY
 * THE RESULT
 * WHAT I LEARNED
 * Full-screen Case Study trigger
 */

export function renderFeaturedProject(container, data, modalController) {
  const section = document.createElement('section');
  section.id = 'featured-work';
  section.className = 'section featured-work-section';

  const project = data.featuredProject;

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">${project.number}</div>
      <div class="featured-project-header">
        <h2 class="featured-project-title">${project.title}</h2>
        <p class="featured-project-tagline">${project.tagline}</p>
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
          <p class="breakdown-text">${project.problem}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">02</span>
          <h4 class="breakdown-label">THE APPROACH</h4>
          <p class="breakdown-text">${project.approach}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">03</span>
          <h4 class="breakdown-label">THE TECHNOLOGY</h4>
          <div class="tech-chips" style="margin-top: 10px;">
            ${project.technology.map(t => `<span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">${t}</span>`).join('')}
          </div>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">04</span>
          <h4 class="breakdown-label">THE RESULT</h4>
          <p class="breakdown-text">${project.result}</p>
        </div>

        <div class="breakdown-card" data-reveal="fade-up">
          <span class="breakdown-num">05</span>
          <h4 class="breakdown-label">WHAT I LEARNED</h4>
          <p class="breakdown-text">${project.whatILearned}</p>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="featured-actions-footer">
        <button class="btn btn-primary" id="view-flagship-case-study">
          <span>Open Complete Case Study</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>View Source on GitHub</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  container.appendChild(section);

  const btn = section.querySelector('#view-flagship-case-study');
  if (btn && modalController) {
    btn.addEventListener('click', () => {
      modalController.openModal(project);
    });
  }
}
