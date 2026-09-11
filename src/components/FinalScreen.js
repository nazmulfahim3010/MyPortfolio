/**
 * Final Screen Component
 * The closing scene of the website film:
 * Minimal screen with name, professional descriptor, copyright,
 * and an optional manual return-to-surface link.
 */

export function renderFinalScreen(container, data) {
  const finalScreen = document.createElement('section');
  finalScreen.id = 'final-screen';
  finalScreen.className = 'final-film-screen';

  finalScreen.innerHTML = `
    <div class="final-screen-inner">
      <div class="final-screen-signal-dot" aria-hidden="true"></div>
      <h2 class="final-screen-name">${data.profile.fullName}</h2>
      <p class="final-screen-descriptor">SOFTWARE ENGINEERING • TECHNOLOGY • EDUCATION</p>
      <div class="final-screen-copyright">
        © ${new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
      <a href="#hero" class="final-screen-back-top" aria-label="Return to top">
        <span>RETURN TO SURFACE ↑</span>
      </a>
    </div>
  `;

  container.appendChild(finalScreen);
}
