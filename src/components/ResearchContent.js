/**
 * Studio Educational Content & Media Component
 * Highlights public technical knowledge sharing and YouTube educational media.
 */

export function renderResearchContent(container, data) {
  const section = document.createElement('section');
  section.id = 'educational-media';
  section.className = 'section studio-media-section';

  const media = data.educationalMedia;

  section.innerHTML = `
    <div class="container">
      <div class="section-tag">Public Knowledge Sharing</div>
      
      <div class="media-banner-card" data-reveal="scale-up">
        <div class="media-banner-left">
          <div class="yt-pill-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YOUTUBE KNOWLEDGE SHARING</span>
          </div>
          <h3 class="media-banner-title">"${media.statement}"</h3>
          <p class="media-banner-sub">${media.note}</p>
        </div>

        <div class="media-banner-right">
          <div class="media-stat-box">
            <span class="stat-network">YOUTUBE</span>
            <span class="stat-handle">${media.channelName}</span>
          </div>
          <a
            href="${media.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-arrow-hover"
            style="width: 100%; justify-content: center;"
          >
            <span>Visit Educational Channel</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  `;

  container.appendChild(section);
}
