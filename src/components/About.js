/**
 * Studio About Component (01 — ABOUT)
 * Asymmetric editorial composition:
 * LEFT: Colossal 01 / ABOUT header
 * RIGHT: Professional narrative + Core Competencies
 * BOTTOM: Small metadata blocks (CGPA 3.91, 5+ YRS TEACHING, FOCUS SE, ROLE ACM INSTRUCTOR)
 */

export function renderAbout(container, data) {
  const about = document.createElement('section');
  about.id = 'about';
  about.className = 'section studio-about-section';

  const metadataHtml = data.profile.metadataBlocks.map(block => `
    <div class="editorial-meta-block" data-reveal="fade-up">
      <span class="meta-block-label">${block.label}</span>
      <div class="meta-block-value">${block.value}</div>
      <span class="meta-block-detail">${block.detail}</span>
    </div>
  `).join('');

  const strengthsHtml = data.profile.coreStrengths.map(s => `
    <div class="strength-pill" title="${s.description}">
      <span class="strength-name">${s.name}</span>
    </div>
  `).join('');

  about.innerHTML = `
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
            ${data.profile.bio.map(p => `<p class="editorial-paragraph">${p}</p>`).join('')}
          </div>

          <!-- Core Competencies Matrix -->
          <div class="about-competencies-block" data-reveal="fade-up">
            <div class="competencies-header">
              <span class="comp-title">CORE COMPETENCIES</span>
              <span class="tag">9 KEY STRENGTHS</span>
            </div>
            <div class="strengths-grid">
              ${strengthsHtml}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Metadata Blocks -->
      <div class="about-metadata-row">
        ${metadataHtml}
      </div>
    </div>
  `;

  container.appendChild(about);
}
