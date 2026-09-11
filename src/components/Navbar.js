/**
 * Studio Navbar Component
 * Minimal masthead: FAHIM / MNHF
 * Active red signal dot, smooth scroll tracking, mobile responsive drawer
 */

export function renderNavbar(container, data) {
  const nav = document.createElement('header');
  nav.id = 'navbar';
  nav.className = 'studio-navbar';

  nav.innerHTML = `
    <div class="container nav-container">
      <a href="#hero" class="nav-logo" aria-label="${data.profile.fullName}">
        <span class="logo-masthead">${data.profile.masthead}</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#disciplines" class="nav-link">Disciplines</a></li>
          <li><a href="#featured-work" class="nav-link">Work</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#teaching" class="nav-link">Teaching</a></li>
          <li><a href="#leadership" class="nav-link">Leadership</a></li>
          <li><a href="#contact" class="nav-cta">Connect</a></li>
        </ul>
      </nav>

      <button class="mobile-menu-toggle" id="mobile-toggle" aria-label="Toggle Navigation Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  `;

  container.appendChild(nav);

  const navLinks = nav.querySelectorAll('.nav-link');
  const mobileToggle = nav.querySelector('#mobile-toggle');
  const linksContainer = nav.querySelector('#nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  mobileToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('open');
  });

  nav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      linksContainer.classList.remove('open');
    });
  });

  // Active scroll spy
  const sections = ['about', 'disciplines', 'featured-work', 'skills', 'teaching', 'leadership', 'contact'];
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 250;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
