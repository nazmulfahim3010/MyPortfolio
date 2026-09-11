/**
 * Studio Custom Follower Cursor
 * Minimalist 6px core dot + smooth trailing ring that expands on interactive elements.
 * Fully disabled on touch devices and respects reduced motion.
 */

export function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cursorContainer = document.getElementById('custom-cursor');
  if (!cursorContainer) return;

  const dot = cursorContainer.querySelector('.cursor-dot');
  const ring = cursorContainer.querySelector('.cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isHovered = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorContainer.style.opacity = '1';

    if (dot) {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    cursorContainer.style.opacity = '0';
  });

  // Smooth lerp loop for outer ring
  function render() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (ring) {
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovered ? 1.8 : 1})`;
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Attach hover triggers
  function attachHoverListeners() {
    const targets = document.querySelectorAll('a, button, input, textarea, .btn, .tag, .metric-card, .pillar-card, .discipline-card');
    targets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        isHovered = true;
        cursorContainer.classList.add('cursor-hover');
      });
      target.addEventListener('mouseleave', () => {
        isHovered = false;
        cursorContainer.classList.remove('cursor-hover');
      });
    });
  }

  attachHoverListeners();

  // Re-attach on dynamic DOM changes
  const observer = new MutationObserver(() => {
    attachHoverListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
