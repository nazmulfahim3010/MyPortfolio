/**
 * Case Study Modal Component
 * Displays the requested 7-part engineering deep-dive:
 * 01 — OVERVIEW
 * 02 — PROBLEM
 * 03 — APPROACH
 * 04 — TECHNOLOGY
 * 05 — IMPLEMENTATION
 * 06 — RESULTS
 * 07 — LESSONS LEARNED
 */

export function createCaseStudyModal() {
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';
  modalBackdrop.id = 'case-study-modal';
  modalBackdrop.setAttribute('role', 'dialog');
  modalBackdrop.setAttribute('aria-modal', 'true');
  modalBackdrop.setAttribute('aria-hidden', 'true');

  modalBackdrop.innerHTML = `
    <div class="modal-window" id="modal-window">
      <div class="modal-header">
        <div class="modal-header-meta" id="modal-project-category">ENGINEERING CASE STUDY</div>
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Close Case Study Modal">&times;</button>
      </div>
      <div class="modal-body" id="modal-body-content">
        <!-- Injected dynamically -->
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);

  const closeBtn = modalBackdrop.querySelector('#modal-close-btn');

  function closeModal() {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openModal(project) {
    const bodyContent = modalBackdrop.querySelector('#modal-body-content');
    const categoryEl = modalBackdrop.querySelector('#modal-project-category');

    categoryEl.textContent = `${project.category} — ARCHITECTURAL BREAKDOWN`;

    const cs = project.caseStudy;

    bodyContent.innerHTML = `
      <h2 class="modal-title">${project.title}</h2>
      <p class="section-desc" style="margin-bottom: 24px;">${project.tagline}</p>

      <div class="tech-chips" style="margin-bottom: 32px;">
        ${project.technologies.map(t => `<span class="tag" style="border-color: rgba(239, 35, 60, 0.3); color: #ffffff;">${t}</span>`).join('')}
      </div>

      <div class="modal-case-sections">
        <div class="case-section-item">
          <div class="case-section-number">01 — Overview</div>
          <h3 class="case-section-heading">Executive Engineering Summary</h3>
          <p class="case-section-body">${cs.overview}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">02 — Problem</div>
          <h3 class="case-section-heading">Root Challenge & Context</h3>
          <p class="case-section-body">${cs.problem}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">03 — Approach</div>
          <h3 class="case-section-heading">Methodology & Architectural Strategy</h3>
          <p class="case-section-body">${cs.approach}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">04 — Technology</div>
          <h3 class="case-section-heading">Stack & Systems Environment</h3>
          <p class="case-section-body">${cs.technology}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">05 — Implementation</div>
          <h3 class="case-section-heading">Execution & Engineering Milestones</h3>
          <p class="case-section-body">${cs.implementation}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">06 — Results</div>
          <h3 class="case-section-heading">Outcomes & Benchmarks</h3>
          <p class="case-section-body">${cs.results}</p>
        </div>

        <div class="case-section-item">
          <div class="case-section-number">07 — Lessons Learned</div>
          <h3 class="case-section-heading">Reflections & Takeaways</h3>
          <p class="case-section-body">${cs.lessonsLearned}</p>
        </div>
      </div>

      <div style="margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap;">
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>View GitHub Repository</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        ` : ''}
        ${project.liveDemo ? `
          <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <span>Live Demonstration</span>
          </a>
        ` : ''}
        <button class="btn btn-outline-red" id="modal-inner-close">Close Case Study</button>
      </div>
    `;

    modalBackdrop.querySelector('#modal-inner-close')?.addEventListener('click', closeModal);

    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Backdrop click closes modal
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  closeBtn.addEventListener('click', closeModal);

  // Esc closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  return { openModal, closeModal };
}
