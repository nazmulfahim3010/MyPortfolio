/**
 * Studio Cinematic Film Opening Sequence
 * 
 * Sequence:
 * 1. Black Screen with subtle ambient atmosphere
 * 2. Cinematic video begins: camera approaches sunglasses
 * 3. Sunglasses dominate frame -> enters dark lens
 * 4. Frame becomes completely black
 * 5. Brief dramatic pause
 * 6. Typographic name reveal: MD NAZMUL HASAN FAHIM
 * 7. Descriptor appears: SOFTWARE ENGINEERING • TECHNOLOGY • EDUCATION
 * 8. Curtain rises smoothly into main portfolio interface
 * 
 * Target duration: ~5-6 seconds.
 * Subtle SKIP INTRO [ESC] control.
 * Fallback to portrait if video blocked.
 * Respects prefers-reduced-motion.
 */

export function renderCinematicIntro(container, onComplete) {
  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const introOverlay = document.createElement('div');
  introOverlay.id = 'cinematic-intro';
  introOverlay.className = 'cinematic-film-intro';
  introOverlay.setAttribute('role', 'dialog');
  introOverlay.setAttribute('aria-label', 'Cinematic Film Intro');

  introOverlay.innerHTML = `
    <div class="film-intro-viewport">
      <!-- Skip Control -->
      <button class="film-skip-btn" id="film-skip-btn" aria-label="Skip Cinematic Intro">
        <span>Skip Intro</span>
        <span class="skip-pill">ESC</span>
      </button>

      <!-- Video Layer -->
      <div class="film-video-wrapper" id="film-video-wrapper">
        <video
          id="film-intro-video"
          class="film-intro-video"
          playsinline
          muted
          preload="auto"
          src="/assets/video/intro.mp4"
        ></video>
        <img
          id="film-fallback-img"
          class="film-fallback-img"
          src="/assets/images/portrait.jpg"
          alt="MD Nazmul Hasan Fahim"
        />
        <div class="film-ambient-line" aria-hidden="true"></div>
      </div>

      <!-- Black Void Layer -->
      <div class="film-black-void" id="film-black-void"></div>

      <!-- Typographic Title Card -->
      <div class="film-title-card" id="film-title-card">
        <div class="film-title-line" id="film-neon-accent"></div>
        <h1 class="film-name-title">MD NAZMUL HASAN FAHIM</h1>
        <div class="film-descriptor">SOFTWARE ENGINEERING • TECHNOLOGY • EDUCATION</div>
      </div>
    </div>
  `;

  container.appendChild(introOverlay);

  const video = introOverlay.querySelector('#film-intro-video');
  const fallbackImg = introOverlay.querySelector('#film-fallback-img');
  const skipBtn = introOverlay.querySelector('#film-skip-btn');
  const blackVoid = introOverlay.querySelector('#film-black-void');
  const titleCard = introOverlay.querySelector('#film-title-card');
  let isFinished = false;

  function finishSequence() {
    if (isFinished) return;
    isFinished = true;

    // Fade out film overlay into portfolio
    introOverlay.classList.add('film-fade-out');

    setTimeout(() => {
      introOverlay.remove();
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }, 900);
  }

  function triggerTitleCardSequence() {
    if (isFinished) return;

    // 1. Plunge into pitch black void
    blackVoid.classList.add('active');

    // 2. Pause briefly (500ms)
    setTimeout(() => {
      if (isFinished) return;
      // 3. Name & descriptor reveal
      titleCard.classList.add('active');

      // 4. Hold title card for ~1.6s, then dissolve into homepage
      setTimeout(() => {
        finishSequence();
      }, 1600);
    }, 500);
  }

  // Skip button click
  skipBtn.addEventListener('click', () => {
    finishSequence();
  });

  // Keyboard shortcut: ESC to skip
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      finishSequence();
      window.removeEventListener('keydown', handleKeyDown);
    }
  }
  window.addEventListener('keydown', handleKeyDown);

  // Monitor video progress into dark lens
  video.addEventListener('timeupdate', () => {
    // When video is entering the dark sunglasses lens (~3.8 - 4.2s)
    if (video.duration > 0 && video.currentTime >= Math.min(4.0, video.duration - 0.8)) {
      video.pause();
      triggerTitleCardSequence();
    }
  });

  video.addEventListener('ended', () => {
    triggerTitleCardSequence();
  });

  // Fallback if video fails
  video.addEventListener('error', () => {
    video.style.display = 'none';
    fallbackImg.style.display = 'block';
    setTimeout(triggerTitleCardSequence, 2000);
  });

  // Attempt autoplay
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If autoplay blocked, show static frame with brief zoom then title card
      video.style.display = 'none';
      fallbackImg.style.display = 'block';
      setTimeout(triggerTitleCardSequence, 1800);
    });
  }

  // Absolute safety timeout: Intro will never hold longer than 7s
  setTimeout(() => {
    if (!isFinished) {
      finishSequence();
    }
  }, 7000);
}
