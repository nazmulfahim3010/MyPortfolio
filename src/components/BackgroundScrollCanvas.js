/**
 * Full-Viewport Global Scroll-Animated Background Canvas
 * 
 * Uses the 300 photographic frames from mainone.
 * As the visitor scrolls down through the portfolio, the canvas smoothly scrubs
 * from Frame 001 through Frame 300, animating the camera's cinematic push
 * toward and through the sunglasses into deep void.
 * 
 * Features:
 * - High-visual punch: vivid contrast, bright authentic skin tone, vibrant red neon glow.
 * - Smooth lerp damping (currentFrame += (targetFrame - currentFrame) * 0.12)
 *   to eliminate scroll ticks and deliver buttery smooth film motion.
 * - HiDPI / Retina canvas scaling with cover aspect ratio.
 */

export function renderBackgroundScrollCanvas(container) {
  const TOTAL_FRAMES = 300;
  const frames = [];
  let currentFrame = 0;
  let targetFrame = 0;
  let rafId = null;

  // 1. Create Canvas Container & Overlay
  const bgWrapper = document.createElement('div');
  bgWrapper.className = 'fixed-global-bg-container';
  bgWrapper.setAttribute('aria-hidden', 'true');

  bgWrapper.innerHTML = `
    <canvas id="global-scroll-canvas" class="global-scroll-canvas"></canvas>
    <div class="global-bg-overlay"></div>
    <div class="global-bg-ambient-red"></div>
  `;

  // Prepend to container so it sits at the absolute bottom of the stacking context
  container.prepend(bgWrapper);

  const canvas = bgWrapper.querySelector('#global-scroll-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  // 2. Frame Path Generator
  function getFrameUrl(idx) {
    const padded = String(idx + 1).padStart(3, '0');
    return `/assets/frames/ezgif-frame-${padded}.jpg`;
  }

  // 3. Canvas Resizing with Retina Support
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    drawFrame(Math.round(currentFrame));
  }

  // 4. Draw Frame with 'Cover' Aspect Ratio
  function drawFrame(idx) {
    let img = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame if current isn't ready
      for (let offset = 1; offset < 20; offset++) {
        if (frames[idx - offset]?.complete && frames[idx - offset].naturalWidth > 0) {
          img = frames[idx - offset];
          break;
        }
        if (frames[idx + offset]?.complete && frames[idx + offset].naturalWidth > 0) {
          img = frames[idx + offset];
          break;
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
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

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, iw, ih, destX, destY, destW, destH);
    }
  }

  // 5. Preload all 300 frames progressively
  function preloadFrames() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      frames[i] = img;

      if (i === 0) {
        img.onload = () => {
          resizeCanvas();
        };
      }
    }
  }

  // 6. Smooth Animation Loop with Lerp Damping
  function tick() {
    // Smooth interpolation towards target frame
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.01) {
      currentFrame += diff * 0.12;
      drawFrame(Math.round(currentFrame));
    }

    rafId = requestAnimationFrame(tick);
  }

  // 7. Scroll Listener: maps page scroll % to 0..299
  function onScroll() {
    const docEl = document.documentElement;
    const maxScroll = (docEl.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    if (maxScroll <= 0) return;

    const scrollY = window.scrollY || window.pageYOffset || 0;
    const progress = Math.max(0, Math.min(1, scrollY / maxScroll));

    targetFrame = Math.min(TOTAL_FRAMES - 1, progress * (TOTAL_FRAMES - 1));
  }

  // Initialize
  preloadFrames();
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  rafId = requestAnimationFrame(tick);

  return {
    destroy() {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', onScroll);
      bgWrapper.remove();
    }
  };
}
