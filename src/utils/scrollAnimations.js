/**
 * Page-Wide Scroll Animation Engine
 * Creates editorial cascading entrances, staggered grids,
 * animated number counters, and interactive timeline reveals.
 */

export function initScrollAnimations() {
  // 1. Automatically tag section headers, cards, and grids with reveal attributes
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    const tag = section.querySelector('.section-tag');
    const title = section.querySelector('.section-title');
    const desc = section.querySelector('.section-desc');

    if (tag) tag.setAttribute('data-reveal', 'fade-up');
    if (title) title.setAttribute('data-reveal', 'fade-up');
    if (desc) desc.setAttribute('data-reveal', 'fade-up');
  });

  // Stagger helper for containers
  function setupStaggerContainer(containerSelector, itemSelector, baseDelay = 90) {
    document.querySelectorAll(containerSelector).forEach(container => {
      container.classList.add('stagger-container');
      container.setAttribute('data-reveal', 'stagger');
      const items = container.querySelectorAll(itemSelector);
      items.forEach((item, index) => {
        item.classList.add('stagger-item');
        item.style.setProperty('--stagger-delay', `${index * baseDelay}ms`);
      });
    });
  }

  // Setup specific grids for staggered cascade
  setupStaggerContainer('.strengths-grid', '.strength-pill', 50);
  setupStaggerContainer('.teaching-metrics-grid', '.metric-card', 120);
  setupStaggerContainer('.teaching-pillars-grid', '.pillar-card', 100);
  setupStaggerContainer('.skills-grid', '.skill-category-card', 120);
  setupStaggerContainer('.secondary-projects-grid', '.secondary-project-card', 140);
  setupStaggerContainer('.dual-section-grid', '.research-card, .content-card', 140);
  setupStaggerContainer('.research-item-list', '.research-item', 90);
  setupStaggerContainer('.contact-channels', '.contact-channel-card', 100);

  // Single standalone elements
  document.querySelectorAll(`
    .academic-highlight-card,
    .teaching-hero-banner,
    .leadership-card,
    .flagship-project-card,
    .education-panel,
    .timeline-entry,
    .contact-form-card
  `).forEach(el => {
    el.setAttribute('data-reveal', 'scale-up');
  });

  // 2. Intersection Observer for trigger
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');

        // If it has children with stagger, reveal them
        if (entry.target.classList.contains('stagger-container')) {
          entry.target.querySelectorAll('.stagger-item').forEach(item => {
            item.classList.add('is-revealed');
          });
        }

        // Animate counter if metric card
        const metricVal = entry.target.querySelector('.metric-value');
        if (metricVal && !metricVal.dataset.counted) {
          metricVal.dataset.counted = 'true';
          animateMetric(metricVal);
        }

        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // 3. Metric pulse animation
  function animateMetric(el) {
    el.style.transform = 'scale(0.85)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => {
      el.style.transform = 'scale(1)';
    }, 100);
  }

  // 4. Timeline Active Track Observer
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const node = entry.target.querySelector('.timeline-node');
      if (entry.isIntersecting && node) {
        node.classList.add('node-active');
      }
    });
  }, {
    rootMargin: '0px 0px -20% 0px',
    threshold: 0.5
  });

  document.querySelectorAll('.timeline-entry').forEach(entry => {
    timelineObserver.observe(entry);
  });
}
