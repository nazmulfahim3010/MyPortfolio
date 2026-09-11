/**
 * Studio Editorial Hero Component
 * 
 * Features:
 * - Colossal typography stack: MD NAZMUL HASAN FAHIM
 * - Magazine cover layout with technical metadata (CGPA 3.91, SE Student)
 * - Transparent glass architecture letting the full-viewport 240-frame background shine through
 * - Editorial HUD telemetry panel with scroll prompt and live coordinates
 * - Magnetic action buttons with micro-interactions
 */

export function renderHero(container, data) {
  const hero = document.createElement('section');
  hero.id = 'hero';
  hero.className = 'studio-hero-section';

  hero.innerHTML = `
    <div class="container studio-hero-container">
      <!-- Top Status Masthead -->
      <div class="hero-status-row" data-reveal="fade-up">
        <div class="hero-live-badge">
          <span class="status-light"></span>
          <span>AVAILABLE FOR SE INTERNSHIPS & RESEARCH</span>
        </div>
        <div class="hero-academic-meta">
          <span>CGPA: <strong>${data.profile.academicStanding.replace('CGPA ', '')}</strong> / 4.00</span>
          <span class="sep-slash">/</span>
          <span>5+ YRS INSTRUCTION</span>
        </div>
      </div>

      <!-- Main Magazine Grid -->
      <div class="hero-magazine-grid">
        <!-- Colossal Typography Stack -->
        <div class="hero-typo-stack">
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">MD</span>
          </div>
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">NAZMUL</span>
          </div>
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">HASAN</span>
          </div>
          <div class="typo-word-line" data-reveal="fade-up">
            <span class="hero-massive-text">FAHIM</span>
          </div>

          <!-- Editorial Sub-Identity & Actions -->
          <div class="hero-identity-block" data-reveal="fade-up">
            <div class="hero-role-lead">${data.profile.heroRole}</div>
            <div class="hero-role-sub">${data.profile.subRoles.join(' • ')}</div>
            
            <p class="hero-editorial-statement">
              "${data.profile.primaryStatement}"
            </p>

            <div class="hero-action-buttons">
              <a href="#featured-work" class="btn btn-primary btn-arrow-hover">
                <span>Explore My Work</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#contact" class="btn btn-secondary">
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Editorial Glassmorphic Telemetry Panel -->
        <div class="hero-telemetry-column" data-reveal="scale-up">
          <div class="hero-glass-telemetry-card">
            <div class="telemetry-header">
              <span class="telemetry-signal-tag">SIGNAL 01</span>
              <span class="telemetry-indicator">ACTIVE REPOSITORY</span>
            </div>

            <div class="telemetry-centerpiece">
              <div class="telemetry-quote">
                "I don't just learn technology.<br/>
                <span class="text-accent">I build, solve, and teach it.</span>"
              </div>
              <div class="telemetry-disciplines">
                <span class="telemetry-pill">BUILD</span>
                <span class="telemetry-pill">SOLVE</span>
                <span class="telemetry-pill">TEACH</span>
                <span class="telemetry-pill">LEAD</span>
              </div>
            </div>

            <div class="telemetry-footer">
              <div class="telemetry-meta-row">
                <span class="meta-label">ARCHITECTURE</span>
                <span class="meta-val">C++ • C • PYTHON</span>
              </div>
              <div class="telemetry-meta-row">
                <span class="meta-label">PEDAGOGY</span>
                <span class="meta-val">ACM INSTRUCTOR (5+ YRS)</span>
              </div>
              <div class="telemetry-scroll-prompt">
                <span>SCROLL TO PUSH INTO THE LENS</span>
                <div class="scroll-down-arrow" aria-hidden="true">↓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(hero);
}
