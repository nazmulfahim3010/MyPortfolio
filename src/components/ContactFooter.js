/**
 * Studio Contact Component
 * Closing scene of a film:
 * Large text:
 * LET'S BUILD
 * SOMETHING
 * MEANINGFUL.
 * Verified direct channels (Email, GitHub, LinkedIn, YouTube), 1-click clipboard copy,
 * client-side message form, and replay intro button.
 */

export function renderContactFooter(container, data, onReplayIntro) {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'section studio-contact-section';

  const channelsHtml = data.contact.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="studio-channel-link" data-reveal="fade-up">
      <div class="channel-left">
        <span class="channel-network-name">${s.name}</span>
        <span class="channel-handle">${s.label}</span>
      </div>
      <span class="channel-arrow-icon" aria-hidden="true">↗</span>
    </a>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-tag" data-reveal="fade-up">Initiate Contact</div>

      <!-- Film Title Closing Headline -->
      <div class="contact-film-hero-text" data-reveal="fade-up">
        <div class="film-text-line">LET'S BUILD</div>
        <div class="film-text-line text-indent">SOMETHING</div>
        <div class="film-text-line text-accent">MEANINGFUL.</div>
      </div>

      <p class="contact-sub-statement" data-reveal="fade-up">
        "${data.contact.subheadline}"
      </p>

      <div class="contact-dual-column">
        <!-- Direct Channels Column -->
        <div class="contact-channels-column">
          <div class="channels-stack">
            ${channelsHtml}
          </div>

          <!-- Quick Email Clipboard Box -->
          <div class="email-clipboard-box" data-reveal="fade-up">
            <span class="clipboard-box-label">DIRECT CORRESPONDENCE</span>
            <div class="clipboard-action-row">
              <span class="clipboard-email-address">${data.contact.email}</span>
              <button id="copy-email-btn" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.76rem;">
                <span>Copy Email</span>
              </button>
            </div>
            <div id="copy-feedback-toast" class="copy-toast" style="display: none;">
              ✓ Copied to clipboard
            </div>
          </div>
        </div>

        <!-- Interactive Direct Message Form -->
        <div class="contact-form-column" data-reveal="scale-up">
          <div class="studio-form-card">
            <h3 class="form-card-title">Send a Direct Message</h3>
            
            <form id="studio-contact-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">Your Name</label>
                <input type="text" id="contact-name" class="form-input" placeholder="e.g. Engineering Lead / Recruiter" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Your Email</label>
                <input type="email" id="contact-email" class="form-input" placeholder="name@organization.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-subject">Inquiry Purpose</label>
                <input type="text" id="contact-subject" class="form-input" placeholder="Software Engineering / Mentorship / Collaboration" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Message</label>
                <textarea id="contact-message" class="form-textarea" placeholder="Describe the opportunity or idea..." required></textarea>
              </div>

              <button type="submit" class="btn btn-accent" style="width: 100%;">
                <span>Transmit Message</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
              <div id="form-status-msg" class="form-status-alert" style="display: none;"></div>
            </form>
          </div>
        </div>
      </div>

      <!-- Studio Minimal Footer Bar -->
      <div class="studio-sub-footer">
        <div class="footer-left">
          <span>${data.profile.fullName}</span>
          <span class="footer-sep">/</span>
          <span>${data.profile.academicStanding}</span>
        </div>
        <div class="footer-right">
          <button id="replay-intro-btn" class="footer-replay-action" aria-label="Replay Cinematic Film Intro">
            ▶ Replay Film Intro
          </button>
        </div>
      </div>
    </div>
  `;

  container.appendChild(section);

  // Email copy event
  const copyBtn = section.querySelector('#copy-email-btn');
  const copyToast = section.querySelector('#copy-feedback-toast');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(data.contact.email).then(() => {
        copyToast.style.display = 'block';
        setTimeout(() => { copyToast.style.display = 'none'; }, 2400);
      });
    });
  }

  // Form submit
  const form = section.querySelector('#studio-contact-form');
  const statusMsg = section.querySelector('#form-status-msg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmitting...</span>';

      setTimeout(() => {
        statusMsg.style.display = 'block';
        statusMsg.style.color = '#4ade80';
        statusMsg.textContent = 'Message received. Thank you! I will respond promptly.';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Transmit Message →</span>';
      }, 700);
    });
  }

  // Replay intro
  const replayBtn = section.querySelector('#replay-intro-btn');
  if (replayBtn && typeof onReplayIntro === 'function') {
    replayBtn.addEventListener('click', () => {
      onReplayIntro();
    });
  }
}
