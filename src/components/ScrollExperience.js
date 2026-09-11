/**
 * Scroll Experience Component
 * Apple-style canvas scroll animation using the 240 frames from ezgif-6ec52d2eb328c421-jpg
 * 
 * Sequence:
 * 1. Frame 001: Cinematic portrait with sunglasses & red neon lighting
 * 2. Frames 002-130: Camera slowly pushes toward sunglasses as user scrolls
 * 3. Frames 131-180: Camera enters the dark sunglass lens
 * 4. Frames 181-240: Complete darkness expands, smoothly transitioning into the portfolio content
 * 
 * Text stages synchronize with scroll progress.
 */

export function renderScrollExperience(container, data) {
  const TOTAL_FRAMES = 240;
  const frames = [];
  let isFirstFrameLoaded = false;
  let currentFrameIndex = 0;
  let rafId = null;

  const scrollWrapper = document.createElement('div');
  scrollWrapper.id = 'hero';
  scrollWrapper.className = 'scroll-hero-container';

  scrollWrapper.innerHTML = `
    <div class="scroll-sticky-viewport">
      <!-- Fullscreen Canvas -->
      <canvas id="hero-scroll-canvas" class="scroll-canvas"></canvas>

      <!-- Signature Red Ambient Laser Glow Line -->
      <div class="scroll-ambient-glow" aria-hidden="true"></div>

      <!-- Synchronized Text Overlays -->
      <div class="scroll-overlay-content">
        <!-- Stage 1: Identity -->
        <div class="scroll-stage active" id="scroll-stage-1">
          <div class="hero-meta-badge">
            <span class="status-light"></span>
            <span>${data.profile.heroRole}</span>
            <span class="badge-cgpa">${data.profile.academicStanding}</span>
          </div>
          <h1 class="hero-name">${data.profile.fullName}</h1>
          <div class="hero-positioning">
            ${data.profile.subRoles.join(' • ')}
          </div>
          <p class="hero-statement">
            "${data.profile.primaryStatement}"
          </p>
          <div class="scroll-prompt">
            <span class="scroll-prompt-text">SCROLL TO EXPLORE</span>
            <div class="scroll-mouse-icon">
              <span class="scroll-wheel"></span>
            </div>
          </div>
        </div>

        <!-- Stage 2: Core Philosophy -->
        <div class="scroll-stage" id="scroll-stage-2">
          <div class="section-tag" style="justify-content: center;">Core Philosophy</div>
          <h2 class="scroll-stage-title">
            "I build technology, solve problems, teach others, and lead communities."
          </h2>
          <div class="stage-pillars-row">
            <span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">5+ Years Teaching</span>
            <span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">ACM Instructor</span>
            <span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">Co-Curricular Secretary</span>
            <span class="tag" style="border-color: rgba(239, 35, 60, 0.4); color: #ffffff;">CGPA 3.91</span>
          </div>
        </div>

        <!-- Stage 3: Entering the Dark Lens -->
        <div class="scroll-stage" id="scroll-stage-3">
          <div class="section-tag" style="justify-content: center;">Entering The System</div>
          <h2 class="scroll-stage-title" style="font-size: clamp(2rem, 4vw, 3.2rem); letter-spacing: -0.02em;">
            Precision. Architecture. Impact.
          </h2>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto;">
            Transitioning into verified engineering work, teaching methodologies, and leadership records.
          </p>
        </div>
      </div>

      <!-- Floating Skip to Content Button -->
      <a href="#about" class="scroll-skip-content-btn" id="scroll-skip-btn">
        <span>Skip to Portfolio</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M7 13l5 5 5-5M12 5v13" />
        </svg>
      </a>

      <!-- Progress Track -->
      <div class="scroll-progress-bar-container">
        <div class="scroll-progress-bar" id="scroll-progress-fill"></div>
      </div>
    </div>
  `;

  // Insert before other content
  container.prepend(scrollWrapper);

  const canvas = scrollWrapper.querySelector('#hero-scroll-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const progressBar = scrollWrapper.querySelector('#scroll-progress-fill');
  const stage1 = scrollWrapper.querySelector('#scroll-stage-1');
  const stage2 = scrollWrapper.querySelector('#scroll-stage-2');
  const stage3 = scrollWrapper.querySelector('#scroll-stage-3');

  // Resize canvas for sharp rendering
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderCurrentFrame();
  }
  window.addEventListener('resize', resizeCanvas, { passive: true });

  // Frame URL generator
  function getFrameUrl(index) {
    const padded = String(index + 1).padStart(3, '0');
    return `/assets/frames/ezgif-frame-${padded}.jpg`;
  }

  // Draw image with cover aspect ratio
  function drawCoverImage(img) {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);

    const destW = iw * ratio;
    const destH = ih * ratio;
    const destX = (cw - destW) / 2;
    const destY = (ch - destH) / 2;

    ctx.drawImage(img, 0, 0, iw, ih, destX, destY, destW, destH);
  }

  function renderCurrentFrame() {
    let imgToDraw = frames[currentFrameIndex];
    if (!imgToDraw || !imgToDraw.complete) {
      // Find closest loaded frame
      for (let offset = 1; offset < 20; offset++) {
        if (frames[currentFrameIndex - offset]?.complete) {
          imgToDraw = frames[currentFrameIndex - offset];
          break;
        }
        if (frames[currentFrameIndex + offset]?.complete) {
          imgToDraw = frames[currentFrameIndex + offset];
          break;
        }
      }
    }

    if (imgToDraw && imgToDraw.complete) {
      drawCoverImage(imgToDraw);
    }
  }

  // Preload frames progressively
  function preloadFrames() {
    // Initial 20 frames loaded with high priority
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      frames[i] = img;

      if (i === 0) {
        img.onload = () => {
          isFirstFrameLoaded = true;
          resizeCanvas();
        };
      }
    }
  }

  // Scroll handler
  function handleScroll() {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      rafId = null;

      const rect = scrollWrapper.getBoundingClientRect();
      const totalScrollable = scrollWrapper.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      // Update progress bar
      if (progressBar) {
        progressBar.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      // Map progress to 0..239
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));
      if (targetFrame !== currentFrameIndex) {
        currentFrameIndex = targetFrame;
        renderCurrentFrame();
      }

      // Stage 1: 0% - 28%
      if (progress < 0.28) {
        const opacity = Math.max(0, 1 - (progress / 0.22));
        stage1.style.opacity = opacity;
        stage1.style.transform = `translateY(${-progress * 60}px)`;
        stage1.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
      } else {
        stage1.style.opacity = '0';
        stage1.style.pointerEvents = 'none';
      }

      // Stage 2: 32% - 65%
      if (progress >= 0.28 && progress < 0.68) {
        let opacity = 0;
        if (progress < 0.42) {
          opacity = (progress - 0.28) / 0.14; // fade in
        } else if (progress > 0.56) {
          opacity = 1 - ((progress - 0.56) / 0.12); // fade out
        } else {
          opacity = 1;
        }
        stage2.style.opacity = Math.max(0, Math.min(1, opacity));
        stage2.style.transform = `translateY(${(0.48 - progress) * 40}px)`;
        stage2.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
      } else {
        stage2.style.opacity = '0';
        stage2.style.pointerEvents = 'none';
      }

      // Stage 3: 70% - 95% (Approaching / entering dark sunglasses)
      if (progress >= 0.68 && progress <= 0.98) {
        let opacity = 0;
        if (progress < 0.78) {
          opacity = (progress - 0.68) / 0.10; // fade in
        } else if (progress > 0.90) {
          opacity = 1 - ((progress - 0.90) / 0.08); // fade into black
        } else {
          opacity = 1;
        }
        stage3.style.opacity = Math.max(0, Math.min(1, opacity));
        stage3.style.transform = `translateY(${(0.82 - progress) * 40}px)`;
        stage3.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
      } else {
        stage3.style.opacity = '0';
        stage3.style.pointerEvents = 'none';
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initialize
  preloadFrames();
  resizeCanvas();
}
