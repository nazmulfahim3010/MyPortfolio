/**
 * Achievements Component
 * Structured categories: Academic, Technical, Teaching, Leadership, Competitions, Certifications.
 * Verified facts displayed with prominence; elegant placeholders for unsupported items.
 */

export function renderAchievements(container, data) {
  const section = document.createElement('section');
  section.id = 'achievements';
  section.className = 'section achievements-section';

  const categories = [
    {
      id: "academic",
      title: "ACADEMIC",
      items: [
        { title: "CGPA 3.91 Distinction", detail: "Software Engineering Department • Continuous academic excellence across systems and theory." }
      ]
    },
    {
      id: "teaching",
      title: "TEACHING & MENTORSHIP",
      items: [
        { title: "ACM Instructor Appointment", detail: "Selected to instruct peer cohorts in C/C++ and algorithmic foundations." },
        { title: "5+ Years Educational Impact", detail: "10+ students guided through individualized programming and academic tutoring." }
      ]
    },
    {
      id: "leadership",
      title: "LEADERSHIP & SERVICE",
      items: [
        { title: "Additional Co-Curricular Secretary", detail: "Institutional student leadership steering campus-wide initiatives and committee coordination." }
      ]
    },
    {
      id: "competitions",
      title: "COMPETITIONS",
      items: [
        { title: "Programming Contest Participation", detail: "Active participation in institutional problem solving and mock benchmarks.", isPlaceholder: true }
      ]
    },
    {
      id: "certifications",
      title: "CERTIFICATIONS",
      items: [
        { title: "Technical Certifications", detail: "Editable category ready for verified credential additions.", isPlaceholder: true }
      ]
    }
  ];

  const categoriesHtml = categories.map(cat => `
    <div class="achievement-category-panel" data-reveal="fade-up">
      <div class="achievement-cat-header">
        <span class="cat-tag">${cat.title}</span>
        <span class="cat-count">${cat.items.length} ${cat.items.length === 1 ? 'RECORD' : 'RECORDS'}</span>
      </div>

      <div class="achievement-items-list">
        ${cat.items.map(item => `
          <div class="achievement-item ${item.isPlaceholder ? 'placeholder-item' : ''}">
            <div class="achieve-title-row">
              <h4 class="achieve-title">${item.title}</h4>
              ${item.isPlaceholder ? '<span class="status-badge-pending">RECORD REPOSITORY READY</span>' : '<span class="status-badge-verified">VERIFIED RECORD</span>'}
            </div>
            <p class="achieve-detail">${item.detail}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">Recognitions & Benchmarks</div>
      <div class="section-editorial-header">
        <h2 class="section-title">Achievements & Credentials</h2>
        <p class="section-desc">
          Verified milestones spanning academic performance, teaching appointments, and leadership responsibilities.
        </p>
      </div>

      <div class="achievements-grid">
        ${categoriesHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
